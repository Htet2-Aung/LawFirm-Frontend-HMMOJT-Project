import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointment, selectAllIAppointment } from "../component/appointment/appointmentSlice";
import { selectAllCase } from "../component/case/casesSlice";
import { selectAllContract } from "../component/contract/contractSlice";
import { fetchInquery, selectAllInquery } from "../component/inquery/inquerySlice";

function Dashboard(){
    const dispatch = useDispatch()
    const inquerys = useSelector(selectAllInquery)
    console.log("InqueryList: "+inquerys.length)
    const appointments = useSelector(selectAllIAppointment)
    const contracts = useSelector(selectAllContract)
    const cases = useSelector( selectAllCase )
   
    useEffect(() => {
        
            dispatch(fetchInquery())
            dispatch(fetchAppointment())
        },dispatch
        )

   
    return(
        <div className="row">
             <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Inquiry</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{inquerys.length}</div>
                                        </div>
                                        <div className="col-auto">
                                        <i className='far fa-file-alt fa-2x text-primary'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
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
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Contract</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{contracts.length}</div>
                                        </div>
                                        <div className="col-auto">
                                           <i className="fas fa-2x fa-scroll text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
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
                        </div>
                        
                
        </div>
    );
}
export default Dashboard;