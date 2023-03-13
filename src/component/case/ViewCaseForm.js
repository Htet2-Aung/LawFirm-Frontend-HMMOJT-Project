import { addNewCase, selectAllCase, fetchCases} from "./casesSlice";
import { useDispatch } from "react-redux";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import lawyerDiscussion from "./caseImg.jfif";
import { useSelector } from "react-redux";
import { selectAllCourt,fetchCourts } from "../court/courtSlices";
import { fetchCategories, selectAllCategory } from "../category/categorySlices";
import { useEffect } from "react";
import { selectCaseById} from "./casesSlice";
import { updateCase } from "./casesSlice";
import { Button } from "bootstrap";
import { fetchContracts, selectContractsByUsername } from "../contract/contractSlice";

function ViewCaseForm(props) {
    const { caseId } = useParams()
    console.log("In the view ase form"+caseId)
    console.log(typeof caseId)

    
   
      
    const caseLaw = useSelector((state) => selectCaseById(state, Number(caseId)))
    const cases=useSelector(selectAllCase);
    console.log("In the view case extracted case is"+ caseLaw.caseTitle);
    
    const catId=useState(caseLaw.category); 
    console.log("case cat id obj is"+catId)
    const navigate = useNavigate()
    
    
   
    const courts=useSelector(selectAllCourt)
    const categories = useSelector(selectAllCategory );
    console.log("categories are"+ categories)
    console.log("courts are"+ courts)
    
    const [id,setId]=useState(caseLaw.id)
    const [caseTitle, setCaseTitle] = useState(caseLaw.caseTitle); 
    const [attenCourtRoom, setAttenCourtRoom] = useState(caseLaw.attenCourtRoom);
    const [startDate, setStartDate] = useState(caseLaw.startDate);
    const [startTime, setStartTime] = useState(caseLaw.startTime);
    const [endDate, setEndDate] = useState(caseLaw.endDate);
    const [endTime, setEndTime] = useState(caseLaw.endTime);
    const [description, setDescription] = useState(caseLaw.description);   
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const [courtId, setCourtId] = useState(caseLaw.court.courtName);
    const [categoryId, setCategoryId] = useState(caseLaw.category.categoryName);
     //contractId
     const [contractId, setContractId] = useState(caseLaw.contract.id);

     console.log("In the View Case Form case Title is "+caseTitle);


    
    
    // const token = useSelector(getToken)

    

const dispatch = useDispatch();

useEffect(()=>{
        
        dispatch(fetchCourts()) 
        dispatch(fetchCategories())
        dispatch(fetchCases())
        dispatch(fetchContracts())
        
    
},[dispatch]);

    
                                               
                                                    


    return (

        <div className="row container bg-gradient-primary">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <div className="card o-hidden  shadow-lg my-5">
            <div className="card-body p-0">

                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block fluid ">
                        <img src={lawyerDiscussion} className="w-100 h-80 pt-5 my-5" />
                    </div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">{caseTitle}</h1>
                            </div>
                          
                                <div className="form-group row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <label>{caseTitle}</label>
                                    
                                    </div>
                                    <div className="col-sm-6">
                                    <label>Attendent Court Room : {attenCourtRoom}</label>
                                    </div>
                                </div>
                                
                                <div className="form-group row mb-3">
                                    
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label>Start Date : {startDate}</label>
                                    </div>
                                    <div className="col-sm-6">
                                    <label>Start Time :{startTime}</label>
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <label>Court Name: {courtId}</label>
                                </div>
                                    <div className="col-sm-6">
                                    <label>Law Type: {categoryId}</label>
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label>End Date : {endDate}</label>
                                     </div>
                                    <div className="col-sm-6">
                                    <label>End Time : {endTime}</label>
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                <h4>Case Detail</h4>
                                <p>{description}</p>
                                </div>
                              
                                <div className="form-group row mb-3 text-center">
                                <Link to="/case">
                                    <button className="btn btn-primary">Close</button>
                                                                               
                                        
                                    
                                </Link>
                                    
                                </div>

                                <Link to={`/contract/view/${contractId}`}>
                                    View Contract
                                        {/* <button className="btn btn-success">View Contract</button> */}
                                    </Link>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="col-md-2"></div>
     

    </div>

        



        

    );
}
export default ViewCaseForm;