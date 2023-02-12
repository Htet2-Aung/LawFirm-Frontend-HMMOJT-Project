import { Route, Routes } from "react-router-dom";
import AddAppointmentForm from "./component/appointment/AddAppointmentForm";
import EditAppointmentForm from "./component/appointment/EditAppointmentForm";
import AddContractForm from "./component/contract/AddContractForm";
import Footer from "./component/footer/Footer";
import AddInqueryForm from "./component/inquery/AddInqueryForm";
import EditInqueryForm from "./component/inquery/EditInqueryForm";
import Layout from "./component/layout/Layout"
import AppTable from "./component/table/AppTable";
import InqTable from "./component/table/InqTable";

function App() {
  return (

    <div>
      <Layout />
      <Routes>
       
        <Route path='/inquery' element={<AddInqueryForm />} />
        <Route path='/inquery'>
          <Route path="list" element={<InqTable />} />
          <Route path="edit/:inqueryId" element={<EditInqueryForm />} />
        </Route>
        <Route path='/contract' element={<AddContractForm />} />

        <Route path="/appointment" element={<AddAppointmentForm />}/>
          <Route path="/appointment">
            <Route path="list" element={<AppTable />}/>
            <Route path="edit/:appointmentId" element={<EditAppointmentForm />} />
          </Route>
        
     
      </Routes>
      <Footer />
    </div>







  );
}

export default App;
