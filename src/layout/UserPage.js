import CaseInfo from "./CaseInfo";
import Home from "./Home";
import LawyerProfile from "./LawyerProfile";

function UserPage(){
    return(
        <div>
            <Home/>
           <LawyerProfile/>
           <CaseInfo/>


        </div>
    );
}
export default UserPage;