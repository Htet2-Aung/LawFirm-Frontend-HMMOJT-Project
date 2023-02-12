import { updateCase, selectCaseById } from "./lawCaseSlice";
import { useDispatch } from "react-redux";
import { useState} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from '../ui/Card'



function EditCaseForm(props) {

    const { caseId } = useParams()
    console.log(caseId)
    console.log(typeof caseId)
    
    const caseLaw = useSelector((state) => selectCaseById(state, Number(caseId)))
    //const case = useSelector(
        //(caseId) =>cases.find(case => case.id === caseId)
   // )
    
    //console.log(case);
    const navigate = useNavigate()

    console.log(caseLaw)
    
    const [id,setId]=useState(caseLaw.id);
    const [caseTitle, setCaseTitle] = useState(caseLaw.caseTitle); 
    const [attenCourtRoom, setAttenCourtRoom] = useState(caseLaw.attenCourtRoom);
    const [startDate, setStartDate] = useState(caseLaw.startDate);
    const [startTime, setStartTime] = useState(caseLaw.startTime);
    const [endDate, setEndDate] = useState(caseLaw.endDate);
    const [endTime, setEndTime] = useState(caseLaw.endTime);
    const [description, setDescription] = useState(caseLaw.description);   
    const [addRequestStatus, setAddRequestStatus] = useState('idle')



    const onCaseTitleChange = e => setCaseTitle(e.target.value);
    const onAttenCourtRoomChange = e => setAttenCourtRoom(e.target.value);
    const onStartDateChange = e => setStartDate(e.target.value);
    const onStartTimeChange = e => setStartTime(e.target.value);
    const onEndDateChange = e => setEndDate(e.target.value);
    const onEndTimeChange = e => setEndTime(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);


    const canSave = [caseTitle, startDate, id].every(Boolean) && addRequestStatus === 'idle'
    console.log([caseTitle, startDate, id].every(Boolean))
    console.log(addRequestStatus)
    console.log(canSave)
    // const token = useSelector(getToken)

    //const isEdit = props.mode === 'edit'

    const dispatch = useDispatch();

    

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(token)

        if (canSave) {
            

                setAddRequestStatus('pending');

                dispatch(
                    
                    updateCase({
                        case:{
                            id,
                            caseTitle,
                            attenCourtRoom,
                            startDate,
                            startTime,
                            endDate,
                            endTime,
                            description
                            
                        }
                    })).unwrap();

                navigate('/case')

            
                
                


            
                setCaseTitle('');
                setAttenCourtRoom('');
                setStartDate('');
                setStartTime('');
                setEndDate('');
                setEndTime('');
                setDescription('');
                setId('');
                setAddRequestStatus('idle')

        }
    }


    return (
        <Card>

            <div className="container-fluid py-5">

                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-3 mb-5 mb-lg-0">
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">

                            <h1 className="text-primary text-center mb-4">Make Case</h1>
                            <div className="bg-primary text-center rounded p-5">

                            <form onSubmit={onSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-4">

                                        <input type="text"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            value={id}
                                            disabled={true}
                                            placeholder="Case Title" data-target="#time" data-toggle="datetimepicker" />

                                        </div>
                                        <div className="col-12 col-sm-4">
                                        <input type="text"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            value={caseTitle}
                                            onChange={onCaseTitleChange}
                                            
                                            placeholder="Case Title" data-target="#time" data-toggle="datetimepicker" />

                                        </div>
                                        <div className="col-12 col-sm-4">
                                        <input type="text"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            value={attenCourtRoom}
                                            onChange={onAttenCourtRoomChange}
                                            placeholder="Attendent Court Room" data-target="#time" data-toggle="datetimepicker" />

                                        </div>
                                        <div className="col-12 col-sm-4">
                                        <input type="date"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            value={startDate}
                                            onChange={onStartDateChange}
                                            placeholder="Start Date" data-target="#time" data-toggle="datetimepicker" />

                                        </div>
                                        <div className="col-12 col-sm-4">
                                        <input type="time"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            value={startTime}
                                            onChange={onStartTimeChange}
                                            placeholder="Start Time" data-target="#time" data-toggle="datetimepicker" />

                                        </div>
                                        <div className="col-12 col-sm-4">
                                        <input type="date"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            value={endDate}
                                            onChange={onEndDateChange}
                                            placeholder="End Date" data-target="#time" data-toggle="datetimepicker" />

                                        </div>
                                        <div className="col-12 col-sm-4">
                                        <input type="time"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            value={endTime}
                                            onChange={onEndTimeChange}
                                            placeholder="End Time" data-target="#time" data-toggle="datetimepicker" />

                                        </div>
                                                                                
                                        
                                        
                                        <div className="col-12">

                                            <textarea type="text"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                rows={10}
                                                value={description}
                                                onChange={onDescriptionChange}
                                                placeholder="Case Description" data-target="#time" data-toggle="datetimepicker" />

                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                className="btn btn-light text-primary btn-block mt-4"
                                                
                                                value={'Make Case'}
                                            />

                                        </div>
                                        </div>
                                    
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </Card>

    );
}
export default EditCaseForm;