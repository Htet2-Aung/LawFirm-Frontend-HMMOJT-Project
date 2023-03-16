import {updateContract,selectContractById} from "./contractSlice"
import { useDispatch} from "react-redux";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//import { getToken } from "../auth/authSlice";
import Card from '../ui/Card'


function EditContractForm() {
    const { contractId } = useParams()
    console.log(contractId)
    console.log(typeof contractId)
    
    

    const contract = useSelector((state)=>selectContractById(state,Number(contractId))) 

    
    console.log(contract)
    
    const [id,setId]=useState(contract.id);
    const [contractDate,setContractDate] = useState(contract.contractDate);
    const [conDescription,setConDescription] = useState(contract.conDescription);
    const [paymentStatus,setPaymentStatus] = useState(contract.paymentStatus);
     const [caseStatus,setCaseStatus] = useState(contract.caseStatus);
    const [addRequestStatus,setAddRequestStatus] = useState('idle')
    
    
    const onContractDateChange = e => setContractDate(e.target.value);
    const onConDescriptionChange = e => setConDescription(e.target.value);
    const navigate = useNavigate()

    const canSave = [id,contractDate,conDescription].every(Boolean) && addRequestStatus === 'idle'
   // const token = useSelector(getToken)

    const dispatch = useDispatch();
    
    const onSubmit = (event)=>{
        event.preventDefault();
        //console.log(token)

        if(canSave){
            try {

                setAddRequestStatus('pending');

                dispatch(
                    
                    updateContract({
                        contract:{
                            id,
                            contractDate,
                            conDescription,
                            paymentStatus,
                            caseStatus
                        }//,
                        //token
                    }),
                ).unwrap();
                navigate('/contract')
               
                
            } catch (error) {
                console.log(error)
            }finally{
                setAddRequestStatus('idle')
            }
           

        setId('')
        setContractDate('')
        setConDescription('')
        
        }
    }
    

    return (
        

        <div className="container-fluid py-5">

            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 mb-5 mb-lg-0">
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">

                        <h1 className="text-primary text-center mb-4">Update Contract</h1>
                        <div className="bg-primary text-center rounded p-5">

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
                                            className="btn btn-info w-100 py-3" 
                                            disabled={!canSave}
                                            value={'Update A Contract'}
                                            />
                                        
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        

    );
}
export default EditContractForm;