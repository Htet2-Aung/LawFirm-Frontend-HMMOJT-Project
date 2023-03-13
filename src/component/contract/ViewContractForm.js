import { selectContractById } from "./contractSlice"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import contractImg from "./img/contractImg.jpg";
import UserInfo from "../user/UserInfo";
import ViewCaseForm from "../case/ViewCaseForm";
import ViewAppointmentForm from "../appointment/ViewAppointmentForm";
import { fetchAppointmentAdmin, selectAppointmentById } from "../appointment/appointmentSlice";
import { useEffect } from "react";
import ViewInqueryForm from "../inquery/ViewInqueryForm";
import ViewUser from "../user/ViewUser";
import { fetchUser, selectUserByEmail } from "../user/usersSlice";
function ViewContractForm(props) {
    const { contractId } = useParams()
    console.log("In the view contract Form " + contractId)
    console.log(typeof contractId)



    const contract = useSelector((state) => selectContractById(state, Number(contractId)))
    const id = useState(contract.id);
    const contractDate = useState(contract.contractDate);
    const conDescription = useState(contract.conDescription);

    //appointment data
    const [appointmentId] = useState(contract.appointment.id);
    console.log("In the view contract From appointmet id is :::: " + appointmentId)
    console.log(typeof appointmentId)
    const appointmentName = useState(contract.appointment.name);
    const appointmentFees = useState(contract.appointment.consultantFees);
    const contractStatus = useState(contract.appointment.contractStatus)
    const appointmetDate = useState(contract.appointment.date);
    const appointmentTime = useState(contract.appointment.time);
    const lawyerStatus = useState(contract.appointment.lawyerStatus);
    const clientStatus = useState(contract.appointment.clientStatus);

    const appointment1 = useState(contract.appointment);

    console.log("appointment is ::::::::::::::::::"+appointment1)

    const appointment = useSelector((state) => selectAppointmentById(state, appointmentId))
    const dispatch = useDispatch();
    console.log("extracted appointment is ::::::::::::::::"+appointment)
   // console.log("In the view contract form , extract appointmet is ::: " + appointment.id)


    //inquiry data
    const [inquiryId] = useState(appointment.inqueryForm.id);
    console.log("In the view inquiry form , extract appointmet is ::: " + inquiryId)
    const description = useState(appointment.inqueryForm.description);

    //client data
    const [username] = useState(appointment.username);
    console.log("In the view username form , extract appointmet is ::: " + username)
    const client = useSelector((state) => selectUserByEmail(state, username));
    console.log("In the contract view, the client obj is" + client.id);


    //lawyer data
    const [lawyerName] = useState(appointment.lawyerName);
    console.log("In the view lawyerName form , extract appointmet is ::: " + lawyerName)
    const lawyer = useSelector((state) => selectUserByEmail(state, lawyerName));
    console.log("In the contract view, the client obj is" + lawyer.id);



    useEffect(() => {


        dispatch(fetchAppointmentAdmin())
        dispatch(fetchUser())

    }, [dispatch])


    return (




        <div className="row container bg-light">
            <div className="col-md-1"></div>
            <div className="col-md-10 card">

                <div className="row">
                    <img src={contractImg} className="my-3" />
                </div>
                <div className="row my-3 mx-5">

                    <div className="row">

                        <div className="row">
                            <center><h3 > Contract Information</h3></center>

                            <div className="row my-3">
                                <div className="col-4"><label>Contract Date</label></div>
                                <div className="col-8"><label>{contractDate}</label></div>
                            </div>
                            <div className="row my-3">
                                <div className="col-4"><label>Description</label></div>
                                <div className="col-8"><label>{conDescription}</label></div>
                            </div>

                        </div>

                        <div ><ViewAppointmentForm
                            appointmentName={appointmentName}
                            appointmentFees={appointmentFees}
                            contractStatus={contractStatus}
                            appointmetDate={appointmetDate}
                            appointmentTime={appointmentTime}
                            lawyerStatus={lawyerStatus}
                            clientStatus={clientStatus}


                        />
                        </div>
                        <div className="my-5">
                            <ViewInqueryForm
                                description={description}
                            /></div>

                        <div className="row">
                            <div className="col"><ViewUser
                                role={client.role}
                                firstName={client.firstName}
                                middleName={client.middleName}
                                lastName={client.lastName}
                                address={client.address}
                                gender={client.gender}
                                nrc={client.nrc}
                                phoneNo={client.phoneNo}
                            /></div>
                            <div className="col"><ViewUser
                                role={lawyer.role}
                                firstName={lawyer.firstName}
                                middleName={lawyer.middleName}
                                lastName={lawyer.lastName}
                                address={lawyer.address}
                                gender={lawyer.gender}
                                nrc={lawyer.nrc}
                                phoneNo={lawyer.phoneNo}
                            /></div>

                        </div>

                    </div>

                </div>
            </div>
            <div className="col-md-1"></div>


        </div>





    );
}
export default ViewContractForm;