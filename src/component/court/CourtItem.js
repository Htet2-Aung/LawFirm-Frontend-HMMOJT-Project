import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCourt } from "./courtSlices";


function CourtItem(props){
    console.log("In the court Item : Id is : :::::::::: "+props.id)

    const dispatch = useDispatch()
    return(
        
                // <div class="col-lg-4 col-md-6">
                //     <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                //         <div class="service-icon mb-4">
                //             <i class="fa  fa-user-md text-white"></i>
                //         </div>
                //       {/* <h4 class="mb-2">CourtId : {props.id}</h4> */}
                //         <h5 class="mb-2">CourtName : {props.courtName}</h5>
                //         <p class="mb-2">Address : {props.address}</p>
                //         <p class="mb-2">Township : {props.township}</p>
                //         <p class="mb-2">City : {props.city}</p>
                //         <a class="btn btn-lg btn-primary rounded-pill" href="">
                //             <i class="bi bi-arrow-right"></i>
                //         </a>
                //         <div >  
                //         <Link to={`/court/edit/${props.id}`} >
                //         <button className="btn btn-success mx-3">Edit</button>
                //       </Link>
                //         <a onClick={()=>{dispatch(deleteCourt(props.id))}}>
                //         <button className="btn btn-danger">Delete</button></a></div>
                //     </div>
                // </div>

                <tr>
        
                <td> {props.id}</td>
                     
                     <td>{props.courtName}</td>
                     <td>{props.address}</td>
                     
                     <td>{props.township}</td>
                     <td>{props.city}</td>
                     <td className="text-center">

                        <Link to={`/court/view/${props.id}`}>
                        <i title="View Court" className="bi bi-info-circle text-info"></i>
                         </Link>
     
                         <Link to={`/court/edit/${props.id}`}>
                         <i title="Update Court" className="fa fa-edit pr-1 mx-2"></i>
                         </Link>
                        
                       
                        
                     </td>
                     
             </tr>
               
           
      
        );
        }
        
        export default CourtItem;
    
 
