import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectCourtById, updateCourt } from "./courtSlices";

//for update
import { useParams } from "react-router-dom";
function UpdateCourtForm(props){

    const { courtId } = useParams( )
    const court = useSelector((state)=>selectCourtById(state,Number(courtId))) 
    console.log(courtId)
    console.log(court)
    //New
    const [id,setId] = useState(court?.id);
    

    const [courtName,setCourtName] = useState(court?.courtName);
    const [address,setAddress] = useState(court?.address);
    const [township,setTownship] = useState(court?.township);
    const [city,setCity] = useState(court?.city);
    const [addRequestStatus,setAddRequestStatus]= useState('idle')

    const onCourtIdChange = e => setId(e.target.value);

    
    const onCourtNameChange = e => setCourtName(e.target.value);
    const onAddressChange = e => setAddress(e.target.value);
    const onTownshipChange = e => setTownship(e.target.value);
    const onCityChange = e => setCity(e.target.value);


    const canSave = [ courtName,address,township,city].every(Boolean) && addRequestStatus === 'idle'
    const isEdit = props.mode === 'edit'

    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();

         
           if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log("In the can save")

                dispatch(
                    //isEdit?
                    updateCourt({
                    courtUpdate:{
                        id,
                        courtName,
                        address,
                        township,
                        city
                    }

                    }),
                )
            }
            
                //     addNewCategory({
                //         id,
                //         categoryName,
                //         description
        
                // }),
                    // ).unwrap();
                
             catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

       
            setId('')
        setCourtName('')
        setAddress('')
        setTownship('')
        setCity('')
           }
           console.log(canSave)
        
        }
    return (
   
        <div className="bg-light container-fluid py-5">

        <div className="container">
            <div className="row gx-5">
            <div className="col-lg-3 mb-5 mb-lg-0">
                    </div>
        <div className="col-lg-6 mb-5 mb-lg-0" >
       
      
            <h1 className="text-primary text-center mb-4">Update Court Form</h1>
            <div className="b-light text-center rounded p-5">

                <form onSubmit={ onSubmit }>
                
                    <div className="row g-3">
                    <div className="col-12 ">

                    
                    <div className="Date" id="date" data-target-input="nearest">
                                <input type="text"
                                    className="form-control text-primary bg-white border-0 datetimepicker-input"
                                    name="appointmentId"
                                    placeholder="Id" data-target="#date" data-toggle="datetimepicker" 
                                        value={id}
                                        onChange = {onCourtIdChange}
                                        disabled 
                                        
                                    />
                            </div>
                        
                    
                            <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Court Name" data-target="#date" data-toggle="datetimepicker"
                                                value={courtName}
                                                onChange = {onCourtNameChange} 
                                                disabled
                                        />
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
                             <button 
                                type="submit" 
                                className="btn btn-primary w-100 py-3" 
                                disabled={!canSave}
                                value={isEdit?'Update':'Save'}
                                
                                >Submit</button>
                        </div>
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
export default UpdateCourtForm