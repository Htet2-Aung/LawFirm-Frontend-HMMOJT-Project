import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAppointmentById, updateAppointment } from "./appointmentSlice";
import { useNavigate } from "react-router-dom";
import lawyerDiscussion from "./lawyerDiscussion.jpg";
import { getToken } from "../auth/authSlice";
//import { getToken } from "../../auth/authSlice";


function ViewAppointmentForm(props) {

    


    
    return (            
                                <div>
                                <center><h3 > Appointment Information</h3></center>
                                    <div className="row">
                                    <div className="col-6"></div>
                                    <div className="col-6">
                                    <div className="row my-3">
                                        <div className="col-4"><label>Appointmet Date</label></div>
                                        <div className="col-8"><label>{props.appointmetDate}</label></div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-4"><label>Appointmet Time</label></div>
                                        <div className="col-8"><label>{props.appointmentTime}</label></div>
                                    </div>
                                    </div>

                                    </div>
                                    <div>
                                        
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-4"><label>Appointmet Name</label></div>
                                        <div className="col-8"><label>{props.appointmentName}</label></div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-4"><label>Appointmet Fees</label></div>
                                        <div className="col-8"><label>{props.appointmentFees}</label></div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-4"><label>Contract Status</label></div>
                                        <div className="col-8"><label>{props.contractStatus}</label></div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-4"><label>Client Status</label></div>
                                        <div className="col-8"><label>{props.clientStatus}</label></div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-4"><label>Lawyer Status</label></div>
                                        <div className="col-8"><label>{props.lawyerStatus}</label></div>
                                    </div>
                                    


                                </div>


                            
    );
}
export default ViewAppointmentForm;