import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToken, getUser } from "../auth/authSlice";
import ConfirmModal from "../utility/ConfirmModal";
import { deleteAppointment } from "./appointmentSlice";

function Appointment(props) {
    console.log(props.id);

    const token=useSelector(getToken)
    console.log("In the inquery Item and token is "+ token)

    const user = useSelector(getUser)
    console.log("In the inquery Item "+user.role)

    //define Action for Admin
    function Admin(){
        return(
            <td className="text-center">
            
            <Link to={`/appointment/edit/${props.id}/${props.inqueryId}`}>
                <i titl="Edit Appointment" className='fas fa-edit text-success mx-3'></i>
            </Link>

            <SetLink />
            {/* <Link to={`/appointment/create/${props.id}`}>
                <button className="btn btn-light mx-2"><i className='fas fa-paste text-primary'></i>Appointment</button>
                </Link> */}
            

           </td>
        );
    }

    //define link or unlink to create contract
    function SetLink() {
        let content;
        console.log("in the setLink")
        console.log(props.appointmentStatus)
        if (props.contractStatus === 'CREATED') {
            content = <UnLinkItem />
        }
        else {
            content = <LinkItem />
        }
        return content;
    }

    function LinkItem() {
        return (
            <Link to={`/contract/create/${props.id}`}>
               <i title="Create Contract" className='fas fa-paste text-primary'></i>
            </Link>
        );
    }
    function UnLinkItem() {
        return (
           <i title="Contract Created" className='fas fa-paste text-success'></i>
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
        dispatch(deleteAppointment({ appointmentId: props.id , token})).unwrap()

        setModalOpen(false)
    }

    if(user.role==='Admin'){

        return (

            <tr>
                <td>{props.no}</td>
                <td>{props.name}</td>
                <td>{props.username}</td>
                <td>{props.lawyerName}</td>
                <td>{props.consultantFees}</td>
                <td>{props.lawyerStatus}</td>
                <td>{props.clientStatus}</td>
                <td>{props.date}</td>
                <td>{props.time}</td>
                <Admin />
                     
            </tr>);

    }
    else if(user.role==='User')
    {
        return (

            <tr>
                <td>{props.no}</td>
                <td>{props.name}</td>
                <td>{props.username}</td>
                <td>{props.lawyerName}</td>
                <td>{props.consultantFees}</td>
                <td>{props.lawyerStatus}</td>
                <td>{props.clientStatus}</td>
                <td>{props.date}</td>
                <td>{props.time}</td>
                <td>
                    <h6 className="cardInfo">Appointment for your inquiry</h6>
                </td>
                     
            </tr>);

    }
    else
    {
        return (

            <tr>
                <td>{props.no}</td>
                <td>{props.name}</td>
                <td>{props.username}</td>
                <td>{props.lawyerName}</td>
                <td>{props.consultantFees}</td>
                <td>{props.lawyerStatus}</td>
                <td>{props.clientStatus}</td>
                <td>{props.date}</td>
                <td>{props.time}</td>
                <td>
                    <h6 className="cardInfo">Your Appointment</h6>
                </td>
                     
            </tr>);

    }
}
export default Appointment;