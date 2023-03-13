import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAppointment, fetchAppointmentAdmin, selectAllIAppointment } from "../component/appointment/appointmentSlice";
import { selectAllCase } from "../component/case/casesSlice";
import { selectAllContract } from "../component/contract/contractSlice";
import { fetchInquery, fetchInqueryAdmin, selectAllInquery, selectInqueryByStatus } from "../component/inquery/inquerySlice";
import { fetchUser, selectAllUser } from "../component/user/usersSlice";

function Dashboard(){
    const dispatch = useDispatch()
    const users = useSelector(selectAllUser)
    const inquerys = useSelector((state)=>selectInqueryByStatus(state,'NO_CREATE'))
    console.log("InqueryList: "+inquerys.length)
    const appointments = useSelector(selectAllIAppointment)
    const contracts = useSelector(selectAllContract)
    const cases = useSelector( selectAllCase )
   
    useEffect(() => {
            dispatch(fetchUser())
            dispatch(fetchInqueryAdmin())
            dispatch(fetchAppointmentAdmin())
        },[dispatch]
        )

   
    return(
        <div className="row">
        <div className="col-xl-2 col-md-6 mb-4">
                            <Link to="/userLog">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total User</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{users.length}</div>
                                        </div>
                                        <div className="col-auto">
                                        <i className='fas fa-2x fa-user-alt text-primary'></i>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-md-6 mb-4">
                        <Link to="/inquery/todo">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            ToDo Inquiry</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{inquerys.length}</div>
                                        </div>
                                        <div className="col-auto">
                                        <i className='far fa-file-alt fa-2x text-primary'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-md-6 mb-4">
                        <Link to="/appointment">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Appointment</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{appointments.length}</div>
                                        </div>
                                        <div className="col-auto">
                                        <i className='fas fa-paste fa-2x text-primary'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-md-6 mb-4">
                        <Link to="/contract">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Contract</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{contracts.length}</div>
                                        </div>
                                        <div className="col-auto">
                                           <i class='fas fa-2x fa-handshake text-primary'></i>
                                           {/* <i className="fas fa-2x fa-scroll text-primary"></i> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-md-6 mb-4">
                        <Link to="/case">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Case</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cases.length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-md-6 mb-4">
                        <Link to="/payment">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Payment</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                                        </div>
                                        <div className="col-auto">
                                        <i className='fas fa-2x fa-hand-holding-usd text-primary'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link> 
                        </div>
                        
                
        </div>
    );
}
export default Dashboard;