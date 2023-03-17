import { Route, Routes } from "react-router-dom";
import AddAppointmentForm from "./component/appointment/AddAppointmentForm";
import EditAppointmentForm from "./component/appointment/EditAppointmentForm";
import AddCaseForm from "./component/case/AddCaseForm";
import EditCaseForm from "./component/case/EditCaseForm";
import AddContractForm from "./component/contract/AddContractForm";
import EditContractForm from "./component/contract/EditContractForm";

import AddInqueryForm from "./component/inquery/AddInqueryForm";
import EditInqueryForm from "./component/inquery/EditInqueryForm";

import AppTable from "./component/table/AppTable";

import InqTable from "./component/table/InqTable";
import AdminPage from "./layout/AdminPage";
import TopHeader from "./layout/TopHeader";
import UserPage from "./layout/UserPage";
import Footer from "./component/footer/Footer";
import Register from "./component/user/Register";
import Login from "./component/user/Login";
import Banner from "./layout/Banner";
//npm sBootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import UsersTable from "./component/table/UsersTable";
import AddUserForm from "./component/user/AddUserForm";
import EditUserForm from "./component/user/EditUserForm";
import AdminUserInfo from "./component/user/AdminUserInfo";
import { getToken, getUser } from "./component/auth/authSlice";
import { useSelector } from "react-redux";
import PrivateRoute from "./component/auth/PrivateRoute";
import InqueryInfo from "./component/inquery/InqueryInfo";
import ViewContractForm from "./component/contract/ViewContractForm";
import UserInfoForAdmin from "./component/user/UserInfoForAdmin";
import ToDoInqTable from "./component/table/ToDoInqTable";
import ContractTable from "./component/contract/ContractTable";
import AddPaymentForm from "./component/payment/AddPaymentForm";
import PaymentTable from "./component/payment/PaymentTable";
import CaseTable from "./component/case/CaseTable";
import ViewCaseForm from "./component/case/ViewCaseForm";
import ToDoAppTable from "./component/table/ToDoAppTable";
import ToDoContractTable from "./component/contract/ToDoContractTable";
import UpdatePaymentForm from "./component/payment/UpdatePaymentForm copy";
import EditLawyerForm from "./component/user/EditLawyerForm";
import LawyerInfo from "./component/user/LawyerInfo";
import AddCategoryForm from "./component/category/AddCategoryForm";
import UpdateCategoryForm from "./component/category/UpdateCategoryForm";
import CategoryTable from "./component/category/CategoryTable";
import LawyerInfo1 from "./component/user/LawyerInfo 1";
import UserInfo from "./component/user/UserInfo";
import CourtTable from "./component/court/CourtTable";
import AddCourtForm from "./component/court/AddCourtForm";
import UpdateCourtForm from "./component/court/UpdateCourtForm";
import ViewCourtForm from "./component/court/ViewCourtForm";
import ViewCategoryForm from "./component/category/ViewCategoryForm";



function App() {
  const user = useSelector(getUser)
  console.log("In the App :"+user.role)

  let content;

  if(user.role === 'Admin'){
    content = (
      <div className="row">
      <TopHeader />


      <Routes>
        <Route path="/">
          <Route index element={<UserPage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<AdminPage />} />

          <Route path="banner" element={<Banner />} />

          <Route path='userLog' element={<UsersTable />} />
          <Route path="inquery" element={<InqTable />} />
          <Route path="inquery/todo" element={<ToDoInqTable />} />


          <Route path='user'>
            <Route path='create' element={<AddUserForm />} />
            <Route path='infoAdmin/:userId' element={<UserInfoForAdmin/>} />
            <Route path='info/:userId' element={<AdminUserInfo />} />
            <Route path='edit/:userId' element={<EditUserForm />} />
            <Route path='editLawyer/:userId' element={<EditLawyerForm/>} />
            <Route path='userInfo/:userId' element={<UserInfo />}/>
            <Route path='lawyerInfo/:userId' element={<LawyerInfo />}/>
            <Route path="viewLawyer/:lawyerId" element={<LawyerInfo1 />} />
          </Route>
          <Route path='inquery'>

            <Route path='create' element={
              <PrivateRoute user={user}>
                <AddInqueryForm />
              </PrivateRoute>
            } />
            {/* <Route path='create' element={<AddInqueryForm />} /> */}
            <Route path='info/:inqueryId' element={<InqueryInfo />} />
            <Route path='todo/info/:inqueryId' element={<InqueryInfo />} />
            <Route path="edit/:inqueryId" element={<EditInqueryForm />} />
          </Route>

          <Route path="appointment" element={<AppTable />} />
          <Route path="appointment/todo" element={<ToDoAppTable />} />

          <Route path="appointment">
            <Route path="create/:inqueryId" element={<AddAppointmentForm />} />
            <Route path="edit/:appointmentId/:inqueryId" element={<EditAppointmentForm />} />
          </Route>

          <Route path='contract' element={<ContractTable />} />
          <Route path='contract/todo' element={<ToDoContractTable />} />

          <Route path='contract'>
            <Route path='create/:appointmentId' element={<AddContractForm />} />
            <Route path='edit/:contractId' element={<EditContractForm />} />
            <Route path='view/:contractId' element={<ViewContractForm />} />
          </Route>

          <Route path='case' element={<CaseTable />} />
          <Route path='case'>
            <Route path='create/:contractId' element={<AddCaseForm />} />
            <Route path='edit/:caseId' element={<EditCaseForm />} />
            <Route path='info/:caseId' element={<ViewCaseForm />} />
          </Route>
        </Route>

        <Route path='payment'>
          <Route path='create/:contractId' element={<AddPaymentForm />} />
          <Route path='edit/:paymentId' element={<UpdatePaymentForm />} />
          <Route path='paymentTable' element={<PaymentTable />} />
        </Route>

        <Route path='court' element={<CourtTable />} />
            <Route path='court/create' element={<AddCourtForm />} />
            <Route path='court/edit/:courtId' element={<UpdateCourtForm />} />
            <Route path='court/view/:courtId' element={<ViewCourtForm />} />

           

          <Route path='category' element={<CategoryTable />} />
            <Route path='category/create' element={<AddCategoryForm />} />
            <Route path='category/edit/:categoryId' element={<UpdateCategoryForm />} />
            <Route path='category/view/:categoryId' element={<ViewCategoryForm />} />
            
      </Routes>
    
    </div>
    )}
  else{
      content = (
        <div className="row">
        <TopHeader />
  
  
        <Routes>
          <Route path="/">
            <Route index element={<UserPage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<AdminPage />} />
  
            <Route path="banner" element={<Banner />} />
  
            <Route path='userLog' element={<UsersTable />} />
            <Route path="inquery" element={<InqTable />} />
            <Route path="inquery/todo" element={<ToDoInqTable />} />
  
  
            <Route path='user'>
              <Route path='create' element={<AddUserForm />} />
              <Route path='infoAdmin/:userId' element={<UserInfoForAdmin/>} />
              <Route path='info/:userId' element={<AdminUserInfo />} />
              <Route path='edit/:userId' element={<EditUserForm />} />
              <Route path='editLawyer/:userId' element={<EditLawyerForm/>} />
              <Route path='userInfo/:userId' element={<UserInfo />}/>
              <Route path='lawyerInfo/:userId' element={<LawyerInfo />}/>
              <Route path="viewLawyer/:lawyerId" element={<LawyerInfo1 />} />
            </Route>
            <Route path='inquery'>
  
              <Route path='create' element={
                <PrivateRoute user={user}>
                  <AddInqueryForm />
                </PrivateRoute>
              } />
              {/* <Route path='create' element={<AddInqueryForm />} /> */}
              <Route path='info/:inqueryId' element={<InqueryInfo />} />
              <Route path='todo/info/:inqueryId' element={<InqueryInfo />} />
              <Route path="edit/:inqueryId" element={<EditInqueryForm />} />
            </Route>
  
            <Route path="appointment" element={<AppTable />} />
            <Route path="appointment/todo" element={<ToDoAppTable />} />
  
            <Route path="appointment">
              <Route path="create/:inqueryId" element={<AddAppointmentForm />} />
              <Route path="edit/:appointmentId/:inqueryId" element={<EditAppointmentForm />} />
            </Route>
  
            <Route path='contract' element={<ContractTable />} />
            <Route path='contract/todo' element={<ToDoContractTable />} />
  
            <Route path='contract'>
              <Route path='create/:appointmentId' element={<AddContractForm />} />
              <Route path='edit/:contractId' element={<EditContractForm />} />
              <Route path='view/:contractId' element={<ViewContractForm />} />
            </Route>
  
            <Route path='case' element={<CaseTable />} />
            <Route path='case'>
              <Route path='create/:contractId' element={<AddCaseForm />} />
              <Route path='edit/:caseId' element={<EditCaseForm />} />
              <Route path='info/:caseId' element={<ViewCaseForm />} />
            </Route>
          </Route>
  
          <Route path='payment'>
            <Route path='create/:contractId' element={<AddPaymentForm />} />
            <Route path='edit/:paymentId' element={<UpdatePaymentForm />} />
            <Route path='paymentTable' element={<PaymentTable />} />
          </Route>
  
          <Route path='court' element={<CourtTable />} />
              <Route path='court/create' element={<AddCourtForm />} />
              <Route path='court/edit/:courtId' element={<UpdateCourtForm />} />
              <Route path='court/view/:courtId' element={<ViewCourtForm />} />
  
             
  
            <Route path='category' element={<CategoryTable />} />
              <Route path='category/create' element={<AddCategoryForm />} />
              <Route path='category/edit/:categoryId' element={<UpdateCategoryForm />} />
              <Route path='category/view/:categoryId' element={<ViewCategoryForm />} />
              
        </Routes>
        <Footer />
      </div>
      )
  }

  return content;
}

export default App;