import { Route, Routes } from "react-router-dom";
import AddAppointmentForm from "./component/appointment/AddAppointmentForm";
import EditAppointmentForm from "./component/appointment/EditAppointmentForm";
import AddCaseForm from "./component/case/AddCaseForm";
import CaseList from "./component/case/CaseList";
import EditCaseForm from "./component/case/EditCaseForm";
import AddContractForm from "./component/contract/AddContractForm";
import EditContractForm from "./component/contract/EditContractForm";
import Footer from "./component/footer/Footer";
import AddInqueryForm from "./component/inquery/AddInqueryForm";
import EditInqueryForm from "./component/inquery/EditInqueryForm";
//import Layout from "./component/layout/Layout"
import AppTable from "./component/table/AppTable";
import ConTable from "./component/table/ConTable";
import InqTable from "./component/table/InqTable";
import TopHeader from "./layout/TopHeader";
import NavigationBar from "./layout/NavigationBar";
import Dashboard from "./layout/Dashboard";


function App() {
  return (

    <div>
      <TopHeader />
      <div className="row">
      <div className="col-md-3 col-xs-2">
            <NavigationBar/>
           </div>
           <div className="col-md-9 col-xs-10">
            <Dashboard/>
           
          <Routes>

            <Route path="/inquery" element={<InqTable />} />
            
            <Route path='/inquery'>
            <Route path='create' element={<AddInqueryForm />} />
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


        </div>
      </div>
      <Footer />
    </div>







  );
}

export default App;