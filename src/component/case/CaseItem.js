import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { deleteCase } from "./casesSlice";
import { useState } from "react";
import ConfirmModal from "../utility/ConfirmModal";
import BackDrop from "../utility/BackDrop";
import { getToken, getUser } from "../auth/authSlice";

function CaseItem(props){

    console.log(props.id);

    const token=useSelector(getToken)
    console.log("In the inquery Item and token is "+ token)

    const user = useSelector(getUser)
    console.log("In the inquery Item "+user.role)

    //define Action for Admin
    function Admin(){
        return(
            <td className="text-center">
            <Link  to={`info/${props.id}`}>
                <i title="View Cases" className="bi bi-info-circle text-info"></i>
            </Link>

            <Link to={`/case/edit/${props.id}`}>
                <i titl="Edit Cases" className='fas fa-edit text-success mx-3'></i>
            </Link>

            <Link onClick={deleteHandler}>
            <i title="Delete" className="fa fa-minus-circle pr-1 mx-2 text-danger "></i>
            </Link>
            {/* <Link to={`/appointment/create/${props.id}`}>
                <button className="btn btn-light mx-2"><i className='fas fa-paste text-primary'></i>Appointment</button>
                </Link> */}
            {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}

           </td>
        );
    }

   

   
    const [isModalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch();

    function deleteHandler() {
        setModalOpen(true);
    }

    function cancelHandler() {
        setModalOpen(false);
    }

    function confirmHandler() {
        dispatch(deleteCase({caseId:props.id,token})).unwrap()

        setModalOpen(false)
    }

    if(user.role==="Admin"){
        return(<tr >

            <td>{props.no}</td>
            <td>{props.caseTitle}</td>
            <td>{props.username}</td>
            <td>{props.lawyerName}</td>
            <td>{props.attenCourtRoom}</td>
            <td>{props.caseStatus}</td>
            <td>{props.description}</td>
            <td>{props.startDate} - {props.startTime}</td>
            <td>25-12-46</td>
            <Admin/>
                        
                        
                        
        </tr>);

    }
    else
    {
        return(<tr >

            <td>{props.no}</td>
            <td>{props.caseTitle}</td>
            <td>{props.username}</td>
            <td>{props.lawyerName}</td>
            <td>{props.attenCourtRoom}</td>
            <td>{props.caseStatus}</td>
            <td>{props.description}</td>
            <td>{props.startDate} - {props.startTime}</td>
            <td>25-35-26</td>
            <td>
            <Link  to={`info/${props.id}`}>
                <i title="View Cases" className="bi bi-info-circle text-info"></i>
            </Link>
            </td>
            
                        
                        
                        
        </tr>);
    }

   
    

    


       
        
                
        
             
        
}

export default CaseItem;
