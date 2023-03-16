import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../auth/authSlice";
import courtImg from "./courtImg.jpg"

import { addNewCourt,selectCategoryById, updateCategory } from "./courtSlices";
function AddCourtForm(props){
    const navigate=useNavigate();
    const token=useSelector(getToken);
    console.log("In the add court form , token is : "+token);

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
                        },token
        
                }),
                    ).unwrap();

                    navigate("/court")
                
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
        <div class="contact">
            <div class="container">
                <div>

                </div>

                <div className="row">

                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="contact card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <h2 className="text-primary text-center mt-3">Add New Court</h2>
                                    <div className="col-lg-5 d-none d-lg-block"><img src={courtImg} className="w-100" /></div>
                                    <div className="col-lg-7 pr-5">
                                        <form onSubmit={onSubmit}>
                                            <div className="row g-3">

                                                <div className="col-12 ">
                                                    <div className="date" id="date" data-target-input="nearest">
                                                        <input type="text"
                                                            name="contractDate"
                                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                            placeholder="Court Name" data-target="#date" data-toggle="datetimepicker"
                                                            value={courtName}
                                                            onChange={onCourtNameChange} />
                                                    </div>
                                                </div>

                                                <div className="col-12 ">
                                                    <div className="date" id="date" data-target-input="nearest">
                                                        <input type="text"
                                                            name="contractDate"
                                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                            placeholder="Address" data-target="#date" data-toggle="datetimepicker"
                                                            value={address}
                                                            onChange={onAddressChange} />
                                                    </div>
                                                </div>

                                                <div className="col-12 ">
                                                    <div className="date" id="date" data-target-input="nearest">
                                                        <input type="text"
                                                            name="contractDate"
                                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                            placeholder="Township " data-target="#date" data-toggle="datetimepicker"
                                                            value={township}
                                                            onChange={onTownshipChange} />
                                                    </div>
                                                </div>

                                                <div className="col-12 ">
                                                    <div className="date" id="date" data-target-input="nearest">
                                                        <input type="text"
                                                            name="contractDate"
                                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                            placeholder="City " data-target="#date" data-toggle="datetimepicker"
                                                            value={city}
                                                            onChange={onCityChange} />
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
                    <div className="col-md-2"></div>

                </div>



            </div>
        </div>


                   
                    
                    
    );

   

}

export default AddCourtForm;
