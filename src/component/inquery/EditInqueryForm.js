import { useEffect } from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getToken } from "../auth/authSlice";
import { fetchUser, selectLawyerByRole } from "../user/usersSlice";
import { selectInqueryById, updateInquery } from "./inquerySlice";
import lawyerImage from "./lawyer.jpg";

function EditInqueryForm(props){

    const navigate =useNavigate()

    const { inqueryId } = useParams( )
    const inquery = useSelector((state)=>selectInqueryById(state,Number(inqueryId))) 
    console.log(inqueryId)
    console.log(inquery)

    const [id,setId] = useState(inquery.id);
    
    const token = useSelector(getToken)
    console.log("Token is :"+ token)

    // const user = useSelector(getUser)
    // console.log("User Role:"+user.id)
    // const userId = user.id;
    // console.log(userId)
      
    // const user=useSelector(selectAllUser);
    
    //Load all Lawyer to dropdown box
    const lawyers = useSelector(selectLawyerByRole)
    console.log(lawyers)
   
    
    const [lawyerName, setLawyerName] = useState(inquery.lawyerName);
    const [description, setDescription] = useState(inquery.description);
    //const [appointmentStatus, setAppointmentStatus] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const onLawyerNameChange = e => setLawyerName(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);

    const canSave = [description].every(Boolean) && addRequestStatus === 'idle'

    //const isEdit = props.mode === 'edit'

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser())
    },[dispatch])


    const onSubmit = (event) => {
        event.preventDefault();



        if (canSave) {
            try {
                setAddRequestStatus('pending')
               

                dispatch(
                    updateInquery({
                      inquery:{
                        id,
                        lawyerName,
                        description
                        

                    },token
                })).unwrap();
                navigate('/inquery')
            } catch (error) {
                console.log(error)

            } finally {
                setAddRequestStatus('idle')
            }

           
            setLawyerName('')
            setDescription('')
            //setAppointmentStatus('')

        }
        console.log(canSave)

    }
    return (
       
        <div class="contact">
            <div class="container">
                <div class="section-header">
                    <h2>Inquiry Form</h2>
                </div>

    

        <div className="contact card o-hidden border-0 shadow-lg my-5">
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
                                        {
                                            lawyers.map((lawyer)=>
                                            <option value={lawyer.username}>{lawyer.firstName} {lawyer.middleName} {lawyer.lastName}</option>
                                            )
                                        }
                                        
                                        
                                    </select>
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
                                    <input
                                        type="submit"
                                        className="btn btn-primary w-100 py-3"

                                        value={'Update An Inquiry'}
                                    />
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input
                                        type="reset"
                                        className="btn btn-danger w-100 py-3"

                                        value={'Reset'}
                                    />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
   

);
}
export default EditInqueryForm;