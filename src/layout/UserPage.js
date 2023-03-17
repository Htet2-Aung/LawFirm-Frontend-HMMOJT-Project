import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getError, getUser} from "../component/auth/authSlice";
import Banner from "./Banner";
import CaseInfoList from "./CaseInfoList";
import LawyerProfile from "./LawyerProfile";

function UserPage(){
;
    const navigate=useNavigate();
    const errorText=useSelector(getError)
    console.log("Error Text in home : "+errorText)
    if(errorText === '*Invalid username or password')
    navigate('/login')

    const user = useSelector(getUser)
    console.log("In the userPage :"+user.role)
    let content;

    if(user.role === 'Admin'){
        content =(
            <span></span>
        )
    }else{
        content = (
            <div>
            <Banner/>
                <div class="section-header">
                    <h2>Our Expert Attorneys</h2>
                </div>
            <LawyerProfile/>
    
            <CaseInfoList/>
    
    
            </div>
        )
    }

    return content;
       
 
}
export default UserPage;