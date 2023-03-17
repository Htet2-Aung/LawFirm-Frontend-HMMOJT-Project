import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAppointment, fetchAppointmentAdmin, selectAllIAppointment, selectAppointmentByContractStatus } from "../component/appointment/appointmentSlice";
import { fetchCases, selectAllCase } from "../component/case/casesSlice";
import { fetchContracts, selectAllContract, selectContractsByCaseStatus } from "../component/contract/contractSlice";
import { fetchInquery, fetchInqueryAdmin, selectAllInquery, selectInqueryByStatus } from "../component/inquery/inquerySlice";
import { fetchPayments, selectAllPayments } from "../component/payment/paymentSlice";
import { fetchUser, selectAllUser } from "../component/user/usersSlice";

function Dashboard(){
    const dispatch = useDispatch()
    const users = useSelector(selectAllUser)
    const inquerys = useSelector((state)=>selectInqueryByStatus(state,'NO_CREATE'))
    console.log("InqueryList: "+inquerys.length)
    const appointments = useSelector((state)=>selectAppointmentByContractStatus(state,'NO_CREATE'))
    const contracts = useSelector((state)=>selectContractsByCaseStatus(state,'NO_CREATE'))
    console.log("app list: "+appointments.length)
    console.log("contract list: "+contracts.length)
    const cases = useSelector( selectAllCase )
    const payments = useSelector( selectAllPayments );

  
        let sum=0;
        payments.map(
            (pay)=>(sum=sum+pay.totalCost));

        console.log("Sum is ::::::"+sum)
      

   
    useEffect(() => {
            dispatch(fetchUser())
            dispatch(fetchInqueryAdmin())
            dispatch(fetchAppointmentAdmin())
            dispatch(fetchContracts())
            dispatch(fetchCases())
            dispatch(fetchPayments())
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
                                            <div className="h5 mb-0 font-weight-bold text-gray-800 text-danger">{users.length}</div>
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
                                           Inquiry</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800 text-danger">{inquerys.length}</div>
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
                        <Link to="/appointment/todo">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Appointment</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800 text-danger">{appointments.length}</div>
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
                        <Link to="/contract/todo">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Contract</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800 text-danger">{contracts.length}</div>
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
                                            <div className="h5 mb-0 font-weight-bold text-gray-800 text-danger">{cases.length}</div>
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
                        <Link to="/payment/paymentTable">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Payment ({payments.length})</div>
                                            <div className="h6 mb-0 font-weight-bold text-gray-800">{sum} MMK</div>
                                        </div>
                                        <div className="col-md-3">
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