import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../auth/authSlice";
import { selectInqueryById } from "../inquery/inquerySlice";
import { selectUserByEmail } from "../user/usersSlice";
import { addNewAppointment } from "./appointmentSlice";
import lawyerDiscussion from "./lawyerDiscussion.jpg";

function AddAppointmentForm(props) {

    const token = useSelector(getToken);

    const { inqueryId } = useParams()
    console.log(Number(inqueryId));
    const inquery = useSelector((state) => selectInqueryById(state, Number(inqueryId)))
    console.log("In the add appointment form with inquery: " + inquery.users.accountName + inquery.lawyerName)
    const lawyer = useSelector((state) => selectUserByEmail(state, String(inquery.lawyerName)))
    console.log("Lawyer Email with user: " + lawyer.accountName)


    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [consultantFees, setConsultantFees] = useState('')
    // const [clientStatus, setClientStatus] = useState('');
    // const [lawyerStatus, setLawyerStatus] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')



    const onNameChange = e => setName(e.target.value);
    const onConsultantFeesChange = e => setConsultantFees(e.target.value);
    // const onClientStatusChange = e => setClientStatus(e.target.value);
    // const onLawyerStatusChange = e => setLawyerStatus(e.target.value);
    const onDateChange = e => setDate(e.target.value);
    const onTimeChange = e => setTime(e.target.value);
    const canSave = [name, consultantFees, date, time].every(Boolean) && addRequestStatus === 'idle'



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
                            // clientStatus,
                            // lawyerStatus,
                            date,
                            time
                        }, inqueryId, token


                    })
                ).unwrap();
                navigate('/appointment')
            } catch (error) {
                console.log(error)

            } finally {
                setAddRequestStatus('idle')
            }


            setName('')
            setConsultantFees('')
            // setLawyerStatus('')
            // setClientStatus('')
            setDate('')
            setTime('')

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
                                    <h1 className="h4 text-gray-900 mb-4">Create An Appointment!</h1>
                                </div>
                                <form onSubmit={onSubmit} className="user">
                                    <div className="form-group row mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label className="form-label">User Name: {inquery.users.accountName}</label>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label">Lawyer Name: {lawyer.accountName}</label>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control " id="exampleLastName"
                                                placeholder="Appointment Name"
                                                value={name}
                                                onChange={onNameChange}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control " id="exampleLastName"
                                                placeholder="Consultant Fees"
                                                value={consultantFees}
                                                onChange={onConsultantFeesChange}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="form-group row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <select
                                            className="form-control "
                                            value={clientStatus}
                                            onChange={onClientStatusChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Agree">Agree</option>
                                            <option value="Disagree">Disagree</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                    <select
                                            className="form-control "
                                            value={lawyerStatus}
                                            onChange={onLawyerStatusChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Agree">Agree</option>
                                            <option value="Disagree">Disagree</option>
                                        </select>
                                    </div>
                                </div> */}
                                    <div className="form-group row mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label className="form-label">Appointment Date</label>
                                            <input type="date" className="form-control " id="exampleLastName"
                                                placeholder="Appointment Date"
                                                value={date}
                                                onChange={onDateChange}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label">Appointment Time</label>
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

                                                value={'Make An Appointment'}
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
export default AddAppointmentForm;