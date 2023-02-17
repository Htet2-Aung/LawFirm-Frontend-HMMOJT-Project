import { useState } from "react";
import { useDispatch } from "react-redux";
import {  useParams } from "react-router-dom";
import { addNewAppointment } from "./appointmentSlice";
import lawyerDiscussion from "./lawyerDiscussion.jpg";

function AddAppointmentForm(props) {

    const { inqueryId } = useParams( )
    console.log(Number(inqueryId));
   

    const [name, setName] = useState('');
    const [consultantFees, setConsultantFees] = useState('')
    const [clientStatus, setClientStatus] = useState('');
    const [lawyerStatus, setLawyerStatus] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')



    const onNameChange = e => setName(e.target.value);
    const onConsultantFeesChange = e => setConsultantFees(e.target.value);
    const onClientStatusChange = e => setClientStatus(e.target.value);
    const onLawyerStatusChange = e => setLawyerStatus(e.target.value);
    const onDateChange = e => setDate(e.target.value);
    const onTimeChange = e => setTime(e.target.value);
    const canSave = [name, consultantFees, clientStatus, lawyerStatus, date, time].every(Boolean) && addRequestStatus === 'idle'



    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();


        if (canSave) {
            try {
                setAddRequestStatus('pending')
                console.log(addRequestStatus);

                dispatch(
                    addNewAppointment({
                       appointment: {
                            name,
                            consultantFees,
                            clientStatus,
                            lawyerStatus,
                            date,
                            time 
                        },inqueryId
                       
                           
                    }) 
                ).unwrap();
               
            } catch (error) {
                console.log(error)

            } finally {
                setAddRequestStatus('idle')
            }


            setName('')
            setConsultantFees('')
            setLawyerStatus('')
            setClientStatus('')
            setDate('')
            setTime('')

        }
        console.log(canSave)

    }
    return (
        <div class="container bg-gradient-primary">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">

                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block">
                        <img src={lawyerDiscussion} className="w-100 h-100" />
                    </div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create An Appointment!</h1>
                            </div>
                            <form onSubmit={onSubmit} class="user">
                                <div class="form-group row mb-3">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="exampleLastName"
                                            placeholder="Name"
                                            value={name}
                                            onChange={onNameChange}
                                        />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" id="exampleLastName"
                                            placeholder="Phone Number"
                                            value={consultantFees}
                                            onChange={onConsultantFeesChange}
                                        />
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                    <select
                                            className="form-control"
                                            value={clientStatus}
                                            onChange={onClientStatusChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Agree">Agree</option>
                                            <option value="Disagree">isagree</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                    <select
                                            className="form-control"
                                            value={lawyerStatus}
                                            onChange={onLawyerStatusChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Agree">Agree</option>
                                            <option value="Disagree">isagree</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="date" class="form-control form-control-user" id="exampleLastName"
                                            placeholder="Appointment Date"
                                            value={date}
                                            onChange={onDateChange}
                                        />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="time" class="form-control form-control-user" id="exampleLastName"
                                            placeholder="Appointment Time"
                                            value={time}
                                            onChange={onTimeChange}
                                        />
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input
                                        type="submit"
                                        className="btn btn-primary w-100 py-3"

                                        value={'Make An Appointment'}
                                    />
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
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
export default AddAppointmentForm;