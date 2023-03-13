import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { addNewCourt,selectCategoryById, updateCategory } from "./courtSlices";
function AddCourtForm(props){
    const { caseId } =useParams()
    console.log(Number(caseId));

    const [courtName,setCourtName] = useState('');
    const [address,setAddress] = useState('');
    const [township,setTownship] = useState('');
    const [city,setCity] = useState('');
    const [addRequestStatus,setAddRequestStatus]= useState('idle')

    const onCourtNameChange = e => setCourtName(e.target.value);
    const onAddressChange = e => setAddress(e.target.value);
    const onTownshipChange = e => setTownship(e.target.value);
    const onCityChange = e => setCity(e.target.value);


    const canSave = [ courtName,address,township,city].every(Boolean) && addRequestStatus === 'idle'
    

    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();

         
           if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log("In the can save")

                dispatch(
                    
                    addNewCourt({
                        court:{
                        
                        courtName,
                        address,
                        township,
                        city
                        },caseId
        
                }),
                    ).unwrap();
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

          
        setCourtName('')
        setAddress('')
        setTownship('')
        setCity('')
           }
           
        
        }
       
  
    return (
           <div className="bg-light container-fluid py-5">

            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 mb-5 mb-lg-0">
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">

                        <h1 className="text-primary text-center mb-4">Create Court Form</h1>
                        <div className="b-light text-center rounded p-5">

                            <form onSubmit={ onSubmit }>
                                <div className="row g-3">
                                    
                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Court Name" data-target="#date" data-toggle="datetimepicker"
                                                value={courtName}
                                        onChange = {onCourtNameChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Address" data-target="#date" data-toggle="datetimepicker"
                                                value={address}
                                        onChange = {onAddressChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Township " data-target="#date" data-toggle="datetimepicker"
                                                value={township}
                                        onChange = {onTownshipChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="City " data-target="#date" data-toggle="datetimepicker"
                                                value={city}
                                            onChange = {onCityChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
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

export default AddCourtForm;
