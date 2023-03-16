import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../auth/authSlice";
import ConfirmModal from "../utility/ConfirmModal";
import { deleteUser} from "./usersSlice";

function UserItem(props) {
   
    const user = useSelector(getUser)
    console.log("In the user item with role:"+user.role)

    console.log(props.id);
    console.log(props.nrc)

    const [isModalOpen,setModalOpen] = useState(false)
    const dispatch = useDispatch();

    function deleteHandler(){
        setModalOpen(true);
    }

    // function backdropHandler(){
    //     setModalOpen(false);
    // }

    function cancelHandler(){
        setModalOpen(false);
    }

    function confirmHandler(){
        dispatch(deleteUser({userId:props.id})).unwrap()

        setModalOpen(false)
    }

    console.log(props.role)
    function Info(){
        let content;
        
        if(user.role === 'Admin'){
            content = (
                <Link to={`/user/infoAdmin/${props.id}`}>
                        <i title="Information" class="bi bi-info-circle text-info"></i>
                    </Link>
            )
        }else{
            content = (
                <Link to={`/user/info/${props.id}`}>
                        <i title="Information" class="bi bi-info-circle text-info"></i>
                    </Link>
            )
        }
        return content;
    }

    return (
     
        <tr>
                <td>{props.id}</td>
                <td><img src={props.imageURL} className="image fluid" width="100px" height="100px"/></td>
                <td>{props.accountName}</td>
                <td>{props.role}</td>
                <td>{props.username}</td>
                <td>{props.address}</td>
                <td className="text-center">
                    <Info/>
              
                    <Link onClick={deleteHandler}>
                    <i title="Delete" className="fa fa-minus-circle pr-1 mx-2 text-danger "></i>
                    </Link>
                    {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
                   
                </td>
                
        </tr>
            
       


    );
}
export default UserItem;