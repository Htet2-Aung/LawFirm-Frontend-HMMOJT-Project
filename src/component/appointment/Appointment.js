import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ConfirmModal from "../utility/ConfirmModal";
import { deleteAppointment } from "./appointmentSlice";

function Appointment(props) {
    console.log(props.id);

    const [isModalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch();

    function deleteHandler() {
        setModalOpen(true);
    }

    function cancelHandler() {
        setModalOpen(false);
    }

    function confirmHandler() {
        dispatch(deleteAppointment({ appointmentId: props.id })).unwrap()

        setModalOpen(false)
    }

    return (

        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.consultantFees}</td>
            <td>{props.lawyerStatus}</td>
            <td>{props.clientStatus}</td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td>
                <Link to={`/appointment/edit/${props.id}`}>
                <i className='fas fa-edit text-success mx-3'></i>
                </Link>
                <Link onClick={deleteHandler}>
                <i className='fas fa-trash text-danger mx-3'></i>
                </Link>
                <Link to={`/contract/create/${props.id}`}>
                    <button className="btn btn-light mx-3"><i className="fas fa-scroll text-primary"></i>Contract</button>
                </Link>
                </td> 
                {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
                {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
        </tr>
       
            


    );
}
export default Appointment;