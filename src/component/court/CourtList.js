import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import CourtItem from "./CourtItem";

import { getCourtError,getCourtStatus, fetchCourts,selectAllCourt} from "./courtSlices";



function CourtList(props){
    const dispatch = useDispatch();
    console.log("In the court List::::::::::::::")
    const searchValue = props.searchValue;

    //const courts = useSelector((s) 
    const courts = useSelector(selectAllCourt);
    console.log("All courts are ::::::::::"+courts)
    
    const courtStatus = useSelector(getCourtStatus);
    console.log("Court Status is "+courtStatus)
    const error = useSelector(getCourtError);

    useEffect(()=>{
        if(courtStatus === 'idle'){
            dispatch(fetchCourts())
        }
    },[courtStatus,dispatch]
    );

    let content;

    if(courtStatus === 'loading'){
        console.log("In the court loading to call court Item")
        content = (<p>Loading......</p>)
    }

    if(courtStatus === 'succeeded'){
        console.log("In the court succeded to call court Item")
        content = courts.map(
            (court)=>(
                
                    <CourtItem
                    id = {court.id}
                    courtName = {court.courtName}
                    address = {court.address}
                    township = {court.township}
                    city = {court.city}
                   
                  
                    />)
                   
    
    
                );
            }
        
    
    if(courtStatus === 'failed'){
        console.log("In the court fail to call court Item")
        content = (<p>{error}</p>)
    }

        
   

  
    return content;
}
export default CourtList;

