import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToken, getUser } from "../auth/authSlice";
import ConfirmModal from "../utility/ConfirmModal";
import { deleteContract } from "./contractSlice";

function ContractItem(props) {
    const token = useSelector(getToken)
    console.log("In the contract Item and token is " + token)

    const user = useSelector(getUser)
    console.log("In the contract Item " + user.role)


function PaymentLink(){
    let content;
    if(props.paymentStatus === 'CREATED')
    content=(
      
                    <i title="paid" className="far fa-credit-card text-success"></i>
              
    )
    else
    content=(
        <Link to={`/payment/create/${props.id}`}>
                    <i title="make payment" className="far fa-credit-card mx-2"></i>
        </Link>
    )
    return content;
}

    function User() {
        return (
            <td className="text-center">
                <Link to={`view/${props.id}`}>
                    <i title="view Contract" className="bi bi-info-circle text-info mx-2"></i>
                </Link>
               <PaymentLink/>

            </td>
        );
    }
    function Admin() {
        return (
            
                <SetLink />
               

            
        );
    }

    console.log(props.id);

    function LinkItem() {
        return (

            <td className="text-center">
                <Link to={`view/${props.id}`}>
                    <i title="View Contract" className="bi bi-info-circle text-info"></i>
                </Link>

                <Link to={`/contract/edit/${props.id}`}>
                    <i className='fas fa-edit text-success mx-3'></i>
                </Link>
                

                <Link to={`/case/create/${props.id}`}>
                    <i title="Case create" className='fas fa-paste text-primary'></i>
                </Link>

               
            </td>
        );
    }
    function UnLinkItem() {
        return (
            <td>
            <Link to={`view/${props.id}`}>
                    <button className="btn btn-primary">View Contract</button>
            </Link>

            
            </td>
        );
    }

    function SetLink() {
        let content;
        console.log("in the setLink")
        console.log(props.caseStatus)
        if (props.caseStatus === 'CREATED') {
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
    const caseStatus = props.caseStatus
    console.log("Id for contractStatus" + caseStatus)




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
        dispatch(deleteContract({ contractId: props.id, token })).unwrap()

        setModalOpen(false)
    }

    console.log("IN the contractItem with paymentStatus: "+props.paymentStatus)
    let result;
    if (user.role === 'User') {
        result = (
            <tr id="data_table tr">
                <td>{props.no}</td>
                <td>{props.contractDate}</td>
                <td>{props.username}</td>
                <td>{props.lawyerName}</td>
                <td>{props.conDescription}</td>
                <td>{props.caseStatus}</td>
                <td>{props.paymentStatus}</td>
                <User />

            </tr>
        )
    } else if (user.role === 'Admin') {


        result = (
            <tr id="data_table tr">
                <td> {props.no}</td>
                <td>{props.contractDate}</td>
                <td>{props.username}</td>
                <td>{props.lawyerName}</td>
                <td>{props.conDescription}</td>
                <td>{props.caseStatus}</td>
                <td>{props.paymentStatus}</td>
                <Admin />

            </tr>



        )

    }
    else {
        result = (
            <tr id="data_table tr">
                <td> {props.no}</td>
                <td>{props.contractDate}</td>
                <td>{props.username}</td>
                <td>{props.lawyerName}</td>
                <td>{props.conDescription}</td>
                <td>{props.caseStatus}</td>
                <td>{props.paymentStatus}</td>
                <User />

            </tr>
        )
    }
    return result;
}
export default ContractItem;