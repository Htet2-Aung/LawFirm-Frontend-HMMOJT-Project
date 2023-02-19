import { Route, Routes } from "react-router-dom";
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
// import Layout from "./component/layout/Layout"
//import Dashboard from "./layout/Dashboard";
// import Home from "./layout/Home";
//import NavigationBar from "./layout/NavigationBar";
import TopHeader from "./layout/TopHeader";
import UserPage from "./layout/UserPage";
import Footer from "./component/footer/Footer";


function App() {
  return (
    <div>
      <TopHeader />
      
      <Routes>
      
        <Route path="user" element={<UserPage/>} />
        <Route path="admin" element={<AdminPage/>}/>
        
      </Routes>
      <Footer />
    </div>







  );
}

export default App;