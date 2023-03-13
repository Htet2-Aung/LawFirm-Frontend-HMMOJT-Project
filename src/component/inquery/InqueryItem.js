import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToken, getUser } from "../auth/authSlice";
import { fetchUser, selectUserByEmail } from "../user/usersSlice";
import ConfirmModal from "../utility/ConfirmModal";
import { deleteInquery } from "./inquerySlice";

function InqueryItem(props) {
    const token = useSelector(getToken)
    console.log("In the inquery Item and token is " + token)

    const user = useSelector(getUser)
    console.log("In the inquery Item " + user.role)




    function Admin() {
        return (
            <td className="text-center">
                <Link to={`info/${props.id}`}>
                    <i title="View Inquiry" className="bi bi-info-circle text-info mx-3"></i>
                </Link>
                <SetLink />

            </td>
        );
    }
    function User() {
        return (
            <td className="text-center">

                {/* created & not create */}
                <DeleteLink />
            </td>
        );
    }

    console.log(props.id);

    function LinkItem() {
        return (
            <Link to={`/appointment/create/${props.id}`}>
                <i title="Appointment create" className='fas fa-paste text-primary'></i>
            </Link>

        );
    }

    function DeleteLink() {
        let content;
        if (props.appointmentStatus !== 'CREATED') {
            content = (
                <span>
                    <Link to={`info/${props.id}`}>
                        <i title="View Inquiry" className="bi bi-info-circle text-info mx-3"></i>
                    </Link>
                    <Link to={`/inquery/edit/${props.id}`}>
                        <i title="Edit inquiry" className='fas fa-edit text-success mx-3'></i>
                    </Link>
                    <Link onClick={deleteHandler}>
                        <i title="Delete" className="fa fa-minus-circle pr-1 mx-2 text-danger "></i>
                    </Link>
                    {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
                </span>
            )
        } else {
            content = (
                <Link to={`info/${props.id}`}>
                    <button className="btn btn-primary">View Inquiry</button>
                </Link>
            )
        }
        return content;
    }
    function UnLinkItem() {
        return (
            <i title="Created Appointment" className='fas fa-paste text-success'></i>
        );
    }

    function SetLink() {
        let content;
        console.log("in the setLink")
        console.log(props.appointmentStatus)
        if (props.appointmentStatus === 'CREATED') {
            content = <UnLinkItem />
        }
        else {
            content = <LinkItem />
        }
        return content;
    }

    console.log(props.id);


    const [isModalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch();
    const appointmentStatus = props.appointmentStatus
    console.log("Id for AppointmentStatus" + appointmentStatus)




    function deleteHandler() {
        setModalOpen(true);
    }

    // function backdropHandler(){
    //     setModalOpen(false);
    // }

    function cancelHandler() {
        setModalOpen(false);
    }

    function confirmHandler() {
        dispatch(deleteInquery({ inqueryId: props.id, token })).unwrap()

        setModalOpen(false)
    }


    let result;
    if (user.role === 'User') {
        result = (
            <tr id="data_table tr">
                <td> {props.no}</td>
                <td>{props.lawyerName}</td>
                <td>{props.userName}</td>
                <td>{props.phoneNo}</td>
                {/* <td>{props.description}</td> */}
                <td>{props.appointmentStatus}</td>
                <User />

            </tr>
        )
    } else if (user.role === 'Admin') {


        result = (
            <tr id="data_table tr">
                <td> {props.no}</td>
                <td>{props.lawyerName}</td>
                <td>{props.userName}</td>
                <td>{props.phoneNo}</td>
                {/* <td>{props.description}</td> */}
                <td>{props.appointmentStatus}</td>
                <Admin />

            </tr>

        )

    }
    else {
        result = (
            <tr id="data_table tr">
                <td> {props.no}</td>
                <td>{props.lawyerName}</td>
                <td>{props.userName}</td>
                <td>{props.phoneNo}</td>
                {/* <td>{props.description}</td> */}
                <td>{props.appointmentStatus}</td>
                <td><Link to={`info/${props.id}`}>
                    <i title="View Inquery" className="bi bi-info-circle text-info"></i>
                </Link>
                </td>

            </tr>
        )
    }
    return result;
}
export default InqueryItem;