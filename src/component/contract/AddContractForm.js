import {addNewContract} from "./contractSlice"
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
//import { useParams,useNavigate } from "react-router-dom";
//import { getToken } from "../auth/authSlice";
import contractImage from "./img/AddContractImg.png"
import { getToken } from "../auth/authSlice";
import { useNavigate, useParams } from "react-router-dom";


function AddContractForm(props) {

    //const contract = useSelector((state)=>selectProjectByIdentifier(state,String(contractId))) 
    const token=useSelector(getToken);

    const { appointmentId } = useParams( )
    console.log(Number(appointmentId));
    const navigate = useNavigate();
    
    
    const [contractDate,setContractDate] = useState('');
    const [conDescription,setConDescription] = useState('');
    const [addRequestStatus,setAddRequestStatus] = useState('idle')
    
    
    const onContractDateChange = e => setContractDate(e.target.value);
    const onConDescriptionChange = e => setConDescription(e.target.value);
    

    const canSave = [contractDate,conDescription].every(Boolean) && addRequestStatus === 'idle'
   // const token = useSelector(getToken)

    const dispatch = useDispatch();
    
    const onSubmit = (event)=>{
        event.preventDefault();
        //console.log(token)

        if(canSave){
            try {

                setAddRequestStatus('pending')
                console.log(addRequestStatus);

                dispatch(
                    
                    addNewContract({
                        contract:{                            
                            contractDate,
                            conDescription,
                        },appointmentId,token
                    }),
                ).unwrap();

               navigate("/contract")
                
            } catch (error) {
                console.log(error)
            }finally{
                setAddRequestStatus('idle')
            }
           

        
        setContractDate('')
        setConDescription('')
        
        }
    }
    

    return (
        

        <div className="row">
            <div className="col"> <img src={contractImage} className="w-100 h-100" /></div>
            <div className="col">
                <h1 className="text-primary text-center mb-4">Make Contract</h1>
                

                    <form onSubmit={onSubmit}>
                        <div className="row g-3">


                            <div className="col-12 col-sm-6">
                                <div className="date" id="date" data-target-input="nearest">
                                    <input type="date" className="form-control "
                                        value={contractDate}
                                        onChange={onContractDateChange}
                                        
                                        placeholder="Date" data-target="#date" data-toggle="datetimepicker" />
                                </div>
                            </div>
                            <div className="col-12">

                                <textarea type="text" className="form-control "
                                    
                                    rows={10}
                                    value={conDescription}
                                    onChange={onConDescriptionChange}
                                    placeholder="Contract Description" data-target="#time" data-toggle="datetimepicker" />

                            </div>
                            <div className="col-12">
                                <input
                                    type="submit"
                                    className="btn btn-primary w-100 py-3"
                                    disabled={!canSave}
                                    value={'Make A Contract'}
                                />

                            </div>
                        </div>
                    </form>
                </div>

            </div>

        

    );
}
export default AddContractForm;