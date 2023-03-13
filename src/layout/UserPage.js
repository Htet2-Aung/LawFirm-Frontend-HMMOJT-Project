import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getError} from "../component/auth/authSlice";
import Banner from "./Banner";
import CaseInfo from "./CaseInfo";
import LawyerProfile from "./LawyerProfile";

function UserPage(){
;
    const navigate=useNavigate();
    const errorText=useSelector(getError)
    console.log("Error Text in home : "+errorText)
    if(errorText === '*Invalid username or password')
    navigate('/login')
    return(
        <div>
        <Banner/>
            <div class="section-header">
                <h2>Our Expert Attorneys</h2>
            </div>
        <LawyerProfile/>

        <CaseInfo/>


        </div>
    );
}
export default UserPage;