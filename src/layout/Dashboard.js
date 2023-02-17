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
             <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Inquiry</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{inquerys.length}</div>
                                        </div>
                                        <div class="col-auto">
                                        <i class='far fa-file-alt fa-2x text-primary'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Appointment</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{appointments.length}</div>
                                        </div>
                                        <div class="col-auto">
                                        <i class='fas fa-paste fa-2x text-primary'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Contract</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{contracts.length}</div>
                                        </div>
                                        <div class="col-auto">
                                           <i className="fas fa-2x fa-scroll text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total Case</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{cases.length}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                
        </div>
    );
}
export default Dashboard;