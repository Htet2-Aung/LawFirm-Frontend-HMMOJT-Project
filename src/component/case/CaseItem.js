import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { deleteCase } from "./casesSlice";
import { useState } from "react";
import ConfirmModal from "../utility/ConfirmModal";
import BackDrop from "../utility/BackDrop";



function CaseItem(props){
   
    console.log(props.id);

    const [isModalOpen,setModalOpen] = useState(false)
    const dispatch = useDispatch();

    function deleteHandler(){
        setModalOpen(true);
    }

    function backdropHandler(){
        setModalOpen(false);
    }

    function cancelHandler(){
        setModalOpen(false);
    }

    function confirmHandler(){
        dispatch(deleteCase({caseId:props.id})).unwrap()

        setModalOpen(false)
    }

    

    return (

        
                
                    <tr >                        
                        <td > {props.id}</td>
                        <td >{props.caseTitle}</td>
                        <td >{props.attenCourtRoom}</td>
                        <td >Status </td>
                        <td >{props.description}</td>
                        <td >{props.startDate} /{props.startTime}</td>
                        <td >{props.endDate} / {props.endTime}</td>                       
                        
                        <td >
                        <Link to={`/case/edit/${props.id}`}>
                            <button className="btn btn-secondary mx-2">Update</button>
                        </Link>
                        <Link to={`/case/create/${props.id}`}>
                            <button className="btn btn-success mx-2">Case</button>
                        </Link>
                        <Link onClick={deleteHandler}>
                            <button className="btn btn-danger">Delete</button>
                        </Link>
                        

                        </td>
                        
                        {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler}/>}
                        {isModalOpen && <BackDrop onBackdrop={backdropHandler}/>} 
                        
                    </tr>
             
           
        
  
    );
}

export default CaseItem;
