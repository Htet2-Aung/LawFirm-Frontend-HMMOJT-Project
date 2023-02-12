import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { deleteCase } from "./lawCaseSlice";
import { useState } from "react";
import ConfirmModal from "../utility/ConfirmModal";
import Backdrop from "../utility/Backdrop";



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

        <div className="col-lg-4 col-md-6">
                
                    <div className="service-item bg-primary rounded d-flex flex-column align-items-center justify-content-center text-center">
                        
                        <h6 className="mb-3">Id: {props.id}</h6>
                        <h6 className="mb-3">Title: {props.caseTitle}</h6>
                        <h6 className="mb-3">Attendent: {props.attenCourtRoom}</h6>
                        <h6 className="mb-3">Type: </h6>
                        <h6 className="mb-3">Start Date and Time: {props.startDate} , {props.startTime}</h6>
                        <h6 className="mb-3">End Date and Time: {props.endDate} , {props.endTime}</h6>                       
                        <p className="m-0">{props.description}</p>
                        <div className="my-3">
                        <Link to={`/case/edit/${props.id}`}>
                            <button className="btn btn-info mx-2">Update</button>
                        </Link>
                        <Link to={`/case/edit/${props.id}`}>
                            <button className="btn btn-success mx-2">Payment</button>
                        </Link>
                        <Link onClick={deleteHandler}>
                            <button className="btn btn-danger">Delete</button>
                        </Link>
                        

                        </div>
                        <Link to={`/contract/edit/${props.id}`}>
                            <button className="btn btn-lg btn-primary rounded-pill">
                            <i className="bi bi-arrow-right"></i>
                            </button>
                        </Link>
                        {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler}/>}
                        {isModalOpen && <Backdrop onBackdrop={backdropHandler}/>} 
                        
                    </div>
             
            </div>
        
  
    );
}

export default CaseItem;
