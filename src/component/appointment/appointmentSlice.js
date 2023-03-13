import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_Appointment = "http://localhost:8585/api/appointment/all";
const GET_ALL_AppointmentByID = "http://localhost:8585/api/appointment/all1";
const POST_NEW_Appointment = "http://localhost:8585/api/appointment/create/";
const UPDATE_Appointment = "http://localhost:8585/api/appointment/update/";
const DELETE_Appointment = "http://localhost:8585/api/appointment/id/";

export const fetchAppointment= createAsyncThunk('appointments/fetchAppointment', async (data) => {
    console.log("In the Appointment Slice Token:"+data.token)
    // console.log("In the Appointment Slice User:"+data.user)
    const response = await axios.get(GET_ALL_AppointmentByID,{
        headers:{
            'Authorization':data.token,
        }
    });
    return response.data;
});

export const fetchAppointmentAdmin = createAsyncThunk('inquerys/fetchAppointmentAdmin', async () => {
    const response = await axios.get(GET_ALL_Appointment);
    return response.data;
});

export const addNewAppointment = createAsyncThunk('appointments/addNewAppointment', async(data)=>{
    const response = await axios.post(`${POST_NEW_Appointment}${data.inqueryId}`,data.appointment,{
        headers:{
            
        'Authorization':data.token,
    }
})
    return response.data;
})

// export const updateAppointment= createAsyncThunk('appointments/updateAppointment',async (data) => {
//     const response = await axios.post(UPDATE_Appointment,data.appointmentUpdate);
//     return response.data
//  })

 export const updateAppointment = createAsyncThunk('inquerys/updateAppointment', async (data)=>{
    console.log("In the Appointment Update Slice:"+ data.appointment)
    console.log("In the Appointment Update Slice with inquery:"+ data.inqueryId)
    console.log("In the Appointment Update Slice:"+ data.token)
    const response = await axios.post( `${UPDATE_Appointment}${data.inqueryId}`,data.appointment,{
        headers:{
            
            'Authorization':data.token,
        },
    })
    return response.data
})

 export const deleteAppointment= createAsyncThunk('appointments/deleteAppointment', async (data) => {
    // await axios.delete(`${DELETE_Appointment}${data.appointmentId}`)
    // const response = await axios.get(GET_ALL_Appointment);
    const response = await axios.delete(`${DELETE_Appointment}${data.appointmentId}`,{
        headers:{
            
            'Authorization':data.token,
        }
    })
    return response.data
});

const initialState = {
    appointments: [],
    status: 'idle',
    error: null
}
export const appointmentSlice = createSlice({
    
    name: "apppointments",
    initialState,
    reducers: {
        addAppointment: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare( id,name, consultantFees, clientStatus,lawyerStatus,date,time,username,lawyerName) {
                return {
                    payload:{
                        id,
                        name, 
                        consultantFees, 
                        clientStatus,
                        lawyerStatus,
                        date,
                        time,
                        username,
                        lawyerName
                    }
                }
            },
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAppointment.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAppointment.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.appointments = action.payload
            })
            .addCase(fetchAppointment.rejected, (state, action) => {
                state.status = 'failed'

                state.error = action.error.message
            })
            .addCase(fetchAppointmentAdmin.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAppointmentAdmin.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.appointments = action.payload
            })
            .addCase(fetchAppointmentAdmin.rejected, (state, action) => {
                state.status = 'failed'

                state.error = action.error.message
            })
            .addCase(addNewAppointment.fulfilled,(state,action)=>{
                state.appointments.push(action.payload)
            })
            .addCase(updateAppointment.fulfilled, (state, action) => {

                const appointment = action.payload
                

                const appointments = state.appointments.filter(app => app.id !== appointment.id)

                state.appointments = [appointment, ...appointments]


            })
            .addCase(deleteAppointment.fulfilled,(state,action)=>{
                // const appointments = state.appointments.filter(app => app.id !== Number(action.payload))
        
                // state.appointments = appointments
                state.status = 'succeeded';
                state.appointments = action.payload
            })
    }
});

export const selectAllIAppointment = (state) => state.appointments.appointments
export const getAppointmentStatus = (state) => state.appointments.status
export const getAppointmentError = (state) => state.appointments.error
export const selectAppointmentById = (state, appointmentId) => state.appointments.appointments.find(appointment => appointment.id === appointmentId)
export const selectAppointmentByUsername = (state, email) => state.appointments.appointments.filter(appointment => appointment.username === email)
export const selectAppointmentByLawyerName = (state, email) => state.appointments.appointments.filter(appointment => appointment.lawyerName === email)
export const selectAppointmentByContractStatus = (state, conStatus) => state.appointments.appointments.filter(appointment => appointment.contractStatus === conStatus)



export const { addAppointment} = appointmentSlice.actions;

export default appointmentSlice.reducer