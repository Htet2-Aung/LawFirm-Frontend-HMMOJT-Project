import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAppointment, fetchAppointmentAdmin, selectAppointmentById, updateAppointment } from "./appointmentSlice";
import { useNavigate } from "react-router-dom";
import lawyerDiscussion from "./lawyerDiscussion.jpg";
import { getToken } from "../auth/authSlice";
import { useEffect } from "react";

function EditAppointmentForm(props) {

    const token=useSelector(getToken);
  
  

    const { appointmentId, inqueryId } = useParams()
    console.log("In the appointment update :"+inqueryId)
    console.log(appointmentId)
    const navigate = useNavigate()
    const appointment = useSelector((state) => selectAppointmentById(state, Number(appointmentId)))
    console.log(appointment)



    const [id, setId] = useState(appointment?.id);
    

    const [name, setName] = useState(appointment?.name);
    const [username, setUsername] = useState(appointment.username);
    const [lawyerName, setLawyerName] = useState(appointment.lawyerName)
    const [contractStatus, setContractStatus] = useState(appointment.contractStatus)
    const [consultantFees, setConsultantFees] = useState(appointment?.consultantFees)
    const [clientStatus, setClientStatus] = useState(appointment?.clientStatus);
    const [lawyerStatus, setLawyerStatus] = useState(appointment?.lawyerStatus);
    const [date, setDate] = useState(appointment?.date);
    const [time, setTime] = useState(appointment?.time);
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    

    const onNameChange = e => setName(e.target.value);
    const onConsultantFeesChange = e => setConsultantFees(e.target.value);
    const onClientStatusChange = e => setClientStatus(e.target.value);
    const onLawyerStatusChange = e => setLawyerStatus(e.target.value);
    const onUsername = e => setUsername(e.target.value);
    const onLawyerName = e => setLawyerName(e.target.value);
    const onContractStatus = e => setContractStatus(e.target.value);
    const onDateChange = e => setDate(e.target.value);
    const onTimeChange = e => setTime(e.target.value);

   

    const canSave = [name, consultantFees, clientStatus, lawyerStatus, date, time].every(Boolean) && addRequestStatus === 'idle'


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAppointmentAdmin())
    },[dispatch])

    const onSubmit = (event) => {
        event.preventDefault();

        if (canSave) {
            try {
                setAddRequestStatus('pending')

                dispatch(

                    updateAppointment({
                        
                            appointment: {
                                id,
                                name,
                                consultantFees,
                                lawyerName,
                                username,
                                contractStatus,
                                clientStatus,
                                lawyerStatus,
                                date,
                                time
                            },inqueryId,token
                     
                    }),
                ).unwrap();
            }
            catch (error) {
                console.log(error)

            } finally {
                setAddRequestStatus('idle')
            }

            navigate('/appointment')

            setId('')
            setName('')
            setConsultantFees('')
            setLawyerStatus('')
            setClientStatus('')
            setDate('')
            setTime('')
            setUsername('')
            setLawyerName('')
            setContractStatus('')
        }
        console.log(canSave)

    }
    return (
        <div className="container bg-gradient-primary">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">

                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block">
                            <img src={lawyerDiscussion} className="w-100 h-100" />
                        </div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Update An Appointment!</h1>
                                </div>
                                <form onSubmit={onSubmit} className="user">
                                    <div className="form-group row mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control" id="exampleLastName"
                                                placeholder="Name"
                                                value={name}
                                                onChange={onNameChange}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="exampleLastName"
                                                placeholder="Consultant Fees"
                                                value={consultantFees}
                                                onChange={onConsultantFeesChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <select
                                                className="form-control"
                                                value={clientStatus}
                                                onChange={onClientStatusChange}
                                            >
                                                <option value="">Select Client Status</option>
                                                <option value="Agree">Agree</option>
                                                <option value="EditedDisagree">EditedDisagree</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <select
                                                className="form-control"
                                                value={lawyerStatus}
                                                onChange={onLawyerStatusChange}
                                            >
                                                <option value="">Select Lawyer Status</option>
                                                <option value="Agree">Agree</option>
                                                <option value="EditedDisagree">EditedDisagree</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="date" className="form-control" id="exampleLastName"
                                                placeholder="Appointment Date"
                                                value={date}
                                                onChange={onDateChange}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="time" className="form-control" id="exampleLastName"
                                                placeholder="Appointment Time"
                                                value={time}
                                                onChange={onTimeChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="submit"
                                                className="btn btn-primary w-100 py-3"

                                                value={'Update An Appointment'}
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
    );
}
export default EditAppointmentForm;