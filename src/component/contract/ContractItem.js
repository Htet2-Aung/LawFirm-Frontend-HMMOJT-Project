import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { deleteContract } from "./contractSlice";
import { useState } from "react";
import ConfirmModal from "../utility/ConfirmModal";
import BackDrop from "../utility/BackDrop";


function ContdactItem(props){
   

    const [isModalOpen,setModalOpen] = useState(false)
    const dispatch = useDispatch();
    var cases="No"
    if(props.caseStatus){
         cases="Yes"
    }
    
    console.log(cases);

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
        dispatch(deleteContract({contdactId:props.id})).unwrap()

        setModalOpen(false)
    }

   

    return (
        <tr>
        
               <td>
                    {props.id}
                </td>
               <td>                   
                    {props.conDescription}                    
                </td>
                <td>                   
                    {props.contractDate}                    
                </td>
                <td>
                    {cases}
                </td>
               <td className="text-center">
                       
                            <Link to= "{caseStatus?{}:{`/case/create/${props.id}`}}">
                                    
                                    <i className="fa fa-flag-checkered pr-1 mx-2">Case</i>   
                                
                            </Link>

                        
                        
                        
                        <Link to={`/contract/edit/${props.id}`}>
                            
                                <i className="fa fa-edit pr-1 mx-2"></i>
                            
                        </Link>
                        <Link onClick={deleteHandler}>
                            
                                <i className="fa fa-minus-circle pr-1 mx-2 text-danger "></i>
                            
                        </Link>
                    
                    {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler}/>}
                    {isModalOpen && <BackDrop onBackdrop={backdropHandler}/>} 
                </td>
            
            </tr>
  
    );
}

export default ContdactItem;