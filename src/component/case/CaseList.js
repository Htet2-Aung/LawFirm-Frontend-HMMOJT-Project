import { useSelector} from "react-redux";
import { fetchCases, getCaseStatus, selectAllCase } from "./casesSlice";
import CaseItem from "./CaseItem";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function CaseList() {
    const cases = useSelector(selectAllCase);
    const dispatch = useDispatch();    
    const caseStatus = useSelector(getCaseStatus);
    //const error=useSelector(getCaseError);
    
    console.log(cases)
    console.log(caseStatus)
    useEffect(()=>{
        
            dispatch(fetchCases())
            
        
    },[dispatch]);
    
    
     
    
         
    
    let content;

    

    

   
        
        content = cases.map(
            (lawCase) => (
                <CaseItem                    
                    id={lawCase.id}
                    caseTitle={lawCase.caseTitle}
                    attenCourtRoom={lawCase.attenCourtRoom}
                    startDate={lawCase.startDate}
                    startTime={lawCase.startTime}
                    endDate={lawCase.endDate}
                    endTime={lawCase.endTime}
                    description={lawCase.description}  
                        
                />));
    
   
    
    return content;

}

export default CaseList;