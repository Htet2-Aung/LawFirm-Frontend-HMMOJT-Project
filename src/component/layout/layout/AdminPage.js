
import React from 'react';
import Dashboard from "./Dashboard";
import NavigationBar from "./NavigationBar";



// import UsersTable from "../component/table/UsersTable";
// import InqTable from "../component/table/InqTable";
// import AddUserForm from "../component/user/AddUserForm";
// import UserInfo from "../component/user/UserInfo";
// import EditUserForm from "../component/user/EditUserForm";
// import AddInqueryForm from "../component/inquery/AddInqueryForm";
// import EditInqueryForm from "../component/inquery/EditInqueryForm";
// import AppTable from "../component/table/AppTable";
// import AddAppointmentForm from "../component/appointment/AddAppointmentForm";
// import EditAppointmentForm from "../component/appointment/EditAppointmentForm";
// import ConTable from "../component/table/ConTable";
// import AddContractForm from "../component/contract/AddContractForm";
// import EditContractForm from "../component/contract/EditContractForm";
// import CaseList from "../component/case/CaseList";
// import AddCaseForm from "../component/case/AddCaseForm";
// import EditCaseForm from "../component/case/EditCaseForm";






function AdminPage() {
  return (
    <div>
    <div className="row">
      <div className="col-md-4">
      <NavigationBar/>
      </div>
      <div className="col-md-8">
      <Dashboard />
     
      </div>
    </div>
   
   
    </div>
  );

}
export default AdminPage;