import { addNewCase, selectAllCase, fetchCases} from "./casesSlice";
import { useDispatch } from "react-redux";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import lawyerDiscussion from "./caseImg.jfif";
import { useSelector } from "react-redux";
import { selectAllCourt,fetchCourts } from "../court/courtSlices";
import { fetchCategories, selectAllCategory } from "../category/categorySlices";
import { useEffect } from "react";
import { selectCaseById} from "./casesSlice";
import { updateCase } from "./casesSlice";

function EditCaseForm(props) {
    const { caseId } = useParams()
    console.log(caseId)
    console.log(typeof caseId)
    
    const caseLaw = useSelector((state) => selectCaseById(state, Number(caseId)))
    const cases=useSelector(selectAllCase);
    console.log(cases);
    
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
    const [courtId, setCourtId] = useState(caseLaw.court.id);
    const [categoryId, setCategoryId] = useState(caseLaw.category.id);
    const [caseStatus, setCaseStatus] = useState('');




    const onCaseTitleChange = e => setCaseTitle(e.target.value);
    const onAttenCourtRoomChange = e => setAttenCourtRoom(e.target.value);
    const onStartDateChange = e => setStartDate(e.target.value);
    const onStartTimeChange = e => setStartTime(e.target.value);
    const onEndDateChange = e => setEndDate(e.target.value);
    const onEndTimeChange = e => setEndTime(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
    const onCourtNameChange = e => setCourtId(e.target.value);
    const onCategoryNameChange = e => setCategoryId(e.target.value);
    const onCaseStatusChange = e => setCaseStatus(e.target.value);
    
    


    
    
    // const token = useSelector(getToken)

    

const dispatch = useDispatch();

useEffect(()=>{
        
        dispatch(fetchCourts()) 
        dispatch(fetchCategories())
        dispatch(fetchCases())
        
    
},[dispatch]);

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(token)

       
            

                setAddRequestStatus('pending');
                console.log("id is"+id);
                console.log("Court id is"+courtId);
                console.log("categoryId is"+categoryId);

                dispatch(
                    
                    
                    updateCase({
                        lawCase: {
                            id,
                            caseTitle,
                            attenCourtRoom,
                            startDate,
                            startTime,
                            endDate,
                            endTime,
                            description,
                            caseStatus
                            
                        },categoryId,courtId
                    }),
                    
                ).unwrap();

                navigate('/case')

            
                setAddRequestStatus('idle')    


           
                setCaseTitle('');
                setAttenCourtRoom('');
                setStartDate('');
                setStartTime('');
                setEndDate('');
                setEndTime('');
                setDescription('');
            

        
    }


    return (

        <div className="container bg-gradient-primary">

        <div className="card o-hidden  shadow-lg my-5">
            <div className="card-body p-0">

                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block fluid ">
                        <img src={lawyerDiscussion} className="w-100 h-80 pt-5 my-5" />
                    </div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create A Case!</h1>
                            </div>
                            <form onSubmit={onSubmit} className="user">
                                <div className="form-group row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control text-primary bg-white datetimepicker-input"
                                            value={caseTitle}
                                            onChange={onCaseTitleChange}
                                            placeholder="Case Title"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="number" className="form-control text-primary bg-white datetimepicker-input"
                                            value={attenCourtRoom}
                                            onChange={onAttenCourtRoomChange}
                                            placeholder="Attendent Court Room"
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-group row mb-3">
                                    
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label>Start Date</label>
                                        <input type="date"
                                            className="form-control text-primary bg-white  datetimepicker-input"
                                            value={startDate}
                                            onChange={onStartDateChange}
                                            placeholder="Start Date" data-target="#time" data-toggle="datetimepicker" />
                                    </div>
                                    <div className="col-sm-6">
                                    <label>Start Time</label>
                                        <input type="time"
                                            className="form-control text-primary bg-white  datetimepicker-input"
                                            value={startTime}
                                            onChange={onStartTimeChange}
                                            placeholder="Start Time" data-target="#time" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <select
                                        className="form-control"
                                        value={courtId}
                                        onChange={onCourtNameChange}
                                    >
                                        <option value="">Add Court Name</option>
                                        {courts.map( (court) =>
                                                    
                                                        <option value={court.id}>
                                                            {court.courtName}
                                                        </option>
                                                    
                                                    )};
                                       
                                       
                                        
                                        
                                    </select>
                                    </div>
                                    <div className="col-sm-6">
                                    <select
                                        className="form-control"
                                        value={categoryId}
                                        onChange={onCategoryNameChange}
                                    >
                                        <option value="">Choose Category</option>
                                        {categories.map( (category) =>
                                                    
                                                        <option value={category.id}>
                                                            {category.categoryName}
                                                        </option>
                                                    
                                                    )};
                                       
                                         
                                        
                                        
                                    </select>
                                    </div>
                                </div>

                                <div className="form-group row mb-3">
                                        <div className="col-sm-6">
                                        <select
                                            className="form-control"
                                            value={caseStatus}
                                            onChange={onCaseStatusChange}
                                        required>
                                            <option value="">Choose Case Status</option>
                                            <option value="Current">Current</option>
                                            <option value="Fail">Fail</option>
                                            <option value="Success">Success</option>
                                        </select>
                                        </div>
                                        <div className="col-sm-6"></div>

                                </div>

                                <div className="form-group row mb-3">
                                
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <label>End Date</label>
                                        <input type="date"
                                            className="form-control text-primary bg-white  datetimepicker-input"
                                            value={endDate}
                                            onChange={onEndDateChange}
                                            placeholder="End Date" data-target="#time" data-toggle="datetimepicker" />
                                    </div>
                                    <div className="col-sm-6">
                                    <label>End Time</label>
                                        <input type="time"
                                            className="form-control text-primary bg-white  datetimepicker-input"
                                            value={endTime}
                                            onChange={onEndTimeChange}
                                            placeholder="End Time" data-target="#time" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                <textarea type="text"
                                                className="form-control text-primary bg-white  datetimepicker-input"
                                                rows={7}
                                                value={description}
                                                onChange={onDescriptionChange}
                                                placeholder="Case Description" data-target="#time" data-toggle="datetimepicker" />

                                </div>
                                <div className="form-group row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input
                                        type="submit"
                                        className="btn btn-primary w-100 py-3"

                                        value={'Make Case'}
                                    />
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input
                                        type="reset"
                                        className="btn btn-danger w-100 py-3"

                                        value={'Reset'}
                                    />
                                    </div>
                                </div>

                                </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

        



        

    );
}
export default EditCaseForm;