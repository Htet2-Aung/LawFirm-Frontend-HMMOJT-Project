import { useSelector} from "react-redux";
import { fetchCases, getCaseStatus, selectAllCase, selectCasesByLawyername, selectCasesByUsername } from "./casesSlice";
import CaseItem from "./CaseItem";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken, getUser } from "../auth/authSlice";
import { fetchContracts } from "../contract/contractSlice";
import { fetchAppointmentAdmin } from "../appointment/appointmentSlice";
import { fetchUser } from "../user/usersSlice";

function CaseList(props) {
    const dispatch = useDispatch()
    const token = useSelector(getToken)
    console.log("In the Contract List Token :" + token)

    const user = useSelector(getUser)
    console.log("In the cases List : user is" + user.username)

    const caseStatusfun = useSelector(getCaseStatus)
    console.log("In the cases List : contract status is" + caseStatusfun)

    const casesAll = useSelector(selectAllCase)
    console.log("cases List SelectAll Cases: " + casesAll)

    const casesUsername = useSelector((state) => selectCasesByUsername(state, user.username))
    console.log("In the cases List , casesUsername by user name is" + casesUsername);

    const casesLawyername = useSelector((state) => selectCasesByLawyername(state, user.username))
    console.log("In the cases List , contractsLawyername is" + casesLawyername);

    useEffect(() => {
        console.log("cases List Token:"+token)
        if(caseStatusfun === 'idle'){
           
                console.log("Admin see Cases List")
                dispatch(fetchCases())
                dispatch(fetchContracts())
                dispatch(fetchAppointmentAdmin())
                dispatch(fetchUser())
        }
        },[caseStatusfun,dispatch,token])

        let content,lawCase; 
        let index=1;
        

        if(user.role==='Admin')
            lawCase=casesAll
        else if(user.role==='User')
            lawCase=casesUsername
        else
            lawCase=casesLawyername

        if(caseStatusfun === 'loading'){
            content = (<p>Loading....</p>)
        }
     
        content = lawCase.map(
            (lawCase) => (
                <CaseItem                    
                    id={lawCase.id}
                    no={index++}
                    caseTitle={lawCase.caseTitle}
                    courtId={lawCase.courtId}
                    attenCourtRoom={lawCase.attenCourtRoom}
                    startDate={lawCase.startDate}
                    startTime={lawCase.startTime}
                    endDate={lawCase.endDate}
                    endTime={lawCase.endTime}
                    description={"Case description..."} 
                    caseStatus= {lawCase.caseStatus}
                    username={lawCase.username}
                    lawyerName={lawCase.lawyerName}
                        
                />));
    
   
    useEffect(()=>{
        dispatch(fetchContracts())
    
    },[dispatch])
    return content;

}

export default CaseList;