import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getToken, getUser } from "../auth/authSlice"
import Appointment from "./Appointment"
import { fetchAppointment, fetchAppointmentAdmin, getAppointmentError, getAppointmentStatus, selectAllIAppointment, selectAppointmentByContractStatus, selectAppointmentByLawyerName, selectAppointmentByUsername } from "./appointmentSlice"

function ToDoAppointmentList(){

    const dispatch = useDispatch()
    const token = useSelector(getToken)
   console.log("In the appointment List Token :"+token)
   const user = useSelector(getUser)
   console.log("In the appointmet List : user is"+user.username)

   const appointmentStatus = useSelector(getAppointmentStatus)
   console.log("In the appointment List : appointmetn status is"+ appointmentStatus)

   const appointmetsAll = useSelector((state)=>selectAppointmentByContractStatus(state,'NO_CREATE'))
 
    console.log("Appointment List SelectAll Appointmet: "+appointmetsAll)
   const appointmentsUsername=useSelector((state)=>selectAppointmentByUsername(state,user.username))
//    console.log("In the appointmet List , appointmentsUsername by user name is"+appointmentsUsername);
   const appointmentsLawyername=useSelector((state)=>selectAppointmentByLawyerName(state,user.username))
//    console.log("In the inquery List , appointmentsLawyername is"+appointmentsLawyername);



    useEffect(() => {
        console.log("Appointment List Token:"+token)
        if(appointmentStatus === 'idle'){
           
                console.log("Admin see Appointment List")
                dispatch(fetchAppointmentAdmin())
        }
        },[appointmentStatus,dispatch,token])

        let content, appointments;
        let index=1;
        if(user.role==='Admin')
            appointments=appointmetsAll
        else if(user.role==='User')
            appointments=appointmentsUsername
        else
            appointments=appointmentsLawyername

        if(appointmentStatus === 'loading'){
            content = (<p>Loading....</p>)
        }
        if(appointmentStatus === 'succeeded'){
            console.log(appointmentStatus)
            content = appointments.map(
                (appointment) => (
                    <Appointment
                       no={index++}
                       id={appointment.id}
                        name={appointment.name} 
                        username={appointment.username}
                        lawyerName={appointment.lawyerName}
                        consultantFees={appointment.consultantFees} 
                        clientStatus={appointment.clientStatus}
                        lawyerStatus={appointment.lawyerStatus}
                        contractStatus={appointment.contractStatus}
                        date={appointment.date}
                        time={appointment.time}
                        inqueryId={appointment.inqueryForm.id}
                    />
                )
            );
        }
        if(appointmentStatus === 'failed'){
            content = (<p>error</p>);
        }
 

    return content;
}
export default ToDoAppointmentList;