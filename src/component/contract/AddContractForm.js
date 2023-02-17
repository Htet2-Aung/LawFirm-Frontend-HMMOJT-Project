import {addNewContract} from "./contractSlice"
import { useDispatch} from "react-redux";
import { useState } from "react";
//import { useParams,useNavigate } from "react-router-dom";
//import { getToken } from "../auth/authSlice";
import Card from '../ui/Card'
import { useParams } from "react-router-dom";


function AddContractForm(props) {

    //const contract = useSelector((state)=>selectProjectByIdentifier(state,String(contractId))) 

    const {appointmentId} = useParams();
    console.log(appointmentId)
    
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

         


                dispatch(
                    
                    addNewContract({
                        contract:{
                            
                            contractDate,
                            conDescription,
                        },appointmentId
                        
                    }),
                ).unwrap();

               
                
           
           

        
        setContractDate('')
        setConDescription('')
        
    }
    

    return (
        <Card>

        <div className="container-fluid py-5">

            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 mb-5 mb-lg-0">
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">

                        <h1 className="text-primary text-center mb-4">Make Contract</h1>
                        <div className="b-light text-center rounded p-5">

                        <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    
                                   

                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="date"
                                                value={contractDate}
                                                onChange={onContractDateChange}
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Date" data-target="#date" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-12">

                                        <textarea type="text"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
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
                </div>
            </div>

        </div>

        </Card>

    );
}
export default AddContractForm;