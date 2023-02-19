import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectInqueryById, updateInquery } from "./inquerySlice";
import lawyerImage from "./lawyer.jpg";

function EditInqueryForm(props){

    const { inqueryId } = useParams( )
    const inquery = useSelector((state)=>selectInqueryById(state,Number(inqueryId))) 
    console.log(inqueryId)
    console.log(inquery)

    const [id,setId] = useState(inquery?.id);
    

    const [lawyerName,setLawyerName] = useState(inquery?.lawyerName);
    const [phoneNo,setPhoneNo] = useState(inquery?.phoneNo)
    const [description,setDescription] = useState(inquery?.description);
    const [addRequestStatus,setAddRequestStatus]= useState('idle')

     
    
    const onLawyerNameChange = e => setLawyerName(e.target.value);
    const onPhoneNoChange = e => setPhoneNo(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);


    const canSave = [ phoneNo,description].every(Boolean) && addRequestStatus === 'idle'
   

    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();

         
           if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log("In the can save")

                dispatch(
                   
                   updateInquery({
                        id,
                        lawyerName,
                        phoneNo,
                        description

                    }),
                )
            }                
             catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

            setId('')
            setLawyerName('')
            setPhoneNo('')
            setDescription('')
           }
           console.log(canSave)
        
        }
        return(
            <div className="container bg-gradient-primary">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">

                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block">
                            <img src={lawyerImage} className="w-100" />
                        </div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Update an Inquery!</h1>
                                </div>
                                <form onSubmit={onSubmit} className="user">
                                    <div className="form-group row mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                        <select
                                            className="form-control"
                                            value={lawyerName}
                                            onChange={onLawyerNameChange}
                                        >
                                            <option value="">Select LawyerName</option>
                                            <option value="Myat Thu">Myat Thu</option>
                                            <option value="ThuRai">ThuRai</option>
                                        </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control " id="exampleLastName"
                                                placeholder="Phone Number"
                                                value={phoneNo}
                                                onChange={onPhoneNoChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <div className="mb-3">
                                            <textarea type="text" className="form-control"
                                                rows={7}
                                                id="exampleRepeatPassword" placeholder="Description"
                                                value={description}
                                                onChange={onDescriptionChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                        <Link to="/inquery"
                                            type="submit"
                                            className="btn btn-primary w-100 py-3">Update an Inquiry</Link>

                                
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                        <Link to="#"
                                            type="reset"
                                            className="btn btn-danger w-100 py-3">Reset</Link>
                                        </div>
                                    </div>


                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        );
}
export default EditInqueryForm;