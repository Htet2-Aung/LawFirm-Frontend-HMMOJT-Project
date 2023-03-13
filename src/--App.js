import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddAppointmentForm from "./component/appointment/AddAppointmentForm";
import EditAppointmentForm from "./component/appointment/EditAppointmentForm";
import AddCaseForm from "./component/case/AddCaseForm";
import CaseList from "./component/case/CaseList";
import EditCaseForm from "./component/case/EditCaseForm";
import AddContractForm from "./component/contract/AddContractForm";
import EditContractForm from "./component/contract/EditContractForm";

import AddInqueryForm from "./component/inquery/AddInqueryForm";
import EditInqueryForm from "./component/inquery/EditInqueryForm";

import AppTable from "./component/table/AppTable";
import ConTable from "./component/table/ConTable";
import InqTable from "./component/table/InqTable";
import AdminPage from "./layout/AdminPage";
import TopHeader from "./layout/TopHeader";
import UserPage from "./layout/UserPage";
import Footer from "./component/footer/Footer";
import Register from "./component/user/Register";
import Home from "./layout/Home";
import Login from "./component/user/Login";
import Banner from "./layout/Banner";

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import AddUserForm from './component/user/AddUserForm';
import EditUserForm from './component/user/EditUserForm';
import UsersTable from './component/table/UsersTable';

import UserInfo from './component/user/UserInfo';



class App extends React.Component {
  componentDidMount() {

   
  }
 
  render() {
    //Datatable HTML
   
    return (
      <div className="row">
        <TopHeader />


        <Routes>
        <Route path="admin" element={<AdminPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="banner" element={<Banner />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path='userLog' element={<UsersTable />} />
          <Route path="inquery" element={<InqTable />} />

          <Route path='/user'>
            <Route path='create' element={<AddUserForm />} />
            <Route path='info/:userId' element={<UserInfo />}/>
            <Route path='edit/:userId' element={<EditUserForm />} />
          </Route>
          <Route path='/inquery'>
            <Route path='create' element={<AddInqueryForm />} />
            {/* <Route path='info/:inqueryId' element={<InqueryInfo />} />  */}
            <Route path="edit/:inqueryId" element={<EditInqueryForm />} />
          </Route>

          <Route path="/appointment" element={<AppTable />} />

          <Route path="/appointment">
            <Route path="create/:inqueryId" element={<AddAppointmentForm />} />
            <Route path="edit/:appointmentId" element={<EditAppointmentForm />} />
          </Route>
          <Route path='/contract' element={<ConTable />} />

          <Route path='/contract'>
            <Route path='create/:appointmentId' element={<AddContractForm />} />
            <Route path='edit/:contractId' element={<EditContractForm />} />
          </Route>

          <Route path='/case' element={<CaseList />} />
          <Route path='/case'>
            <Route path='create/:contractId' element={<AddCaseForm />} />
            <Route path='edit/:caseId' element={<EditCaseForm />} />
          </Route>
        </Routes>





        <Footer />
      </div>



    );
  }
}
export default App;