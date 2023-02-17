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
                    <button className="btn btn-success mx-3">Update</button>
                </Link>
                <Link onClick={deleteHandler}>
                    <button className="btn btn-danger mx-3">
                        Delete
                    </button>
                </Link>
                <Link to={`/contract/create/${props.id}`}>
                    <button className="btn btn-success mx-3">Contract</button>
                </Link>
                </td> 
                {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
                {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
        </tr>
       
            


    );
}
export default Appointment;