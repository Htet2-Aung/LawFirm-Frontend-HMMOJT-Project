import { addNewCase } from "./casesSlice";
import { useDispatch } from "react-redux";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from '../ui/Card'


function AddCaseForm(props) {
    const  {contractId } = useParams()
    const conId=Number(contractId)
    const navigate = useNavigate()
    console.log(contractId)
    console.log(typeof Number(contractId))
    console.log(conId)
    console.log (typeof conId)
       
    const [caseTitle, setCaseTitle] = useState(''); 
    const [attenCourtRoom, setAttenCourtRoom] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');   
    const [addRequestStatus, setAddRequestStatus] = useState('idle')



    const onCaseTitleChange = e => setCaseTitle(e.target.value);
    const onAttenCourtRoomChange = e => setAttenCourtRoom(e.target.value);
    const onStartDateChange = e => setStartDate(e.target.value);
    const onStartTimeChange = e => setStartTime(e.target.value);
    const onEndDateChange = e => setEndDate(e.target.value);
    const onEndTimeChange = e => setEndTime(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
    
    


    
    
    // const token = useSelector(getToken)

    

    const dispatch = useDispatch();

    

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(token)

       
            

                setAddRequestStatus('pending');
                console.log(addRequestStatus);

                dispatch(
                    
                    addNewCase({
                        lawCase: {
                            
                            caseTitle,
                            attenCourtRoom,
                            startDate,
                            startTime,
                            endDate,
                            endTime,
                            description
                            
                        },conId
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
        <Card>

            <div className="container-fluid py-5">

                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-3 mb-5 mb-lg-0">
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">

                            <h1 className="text-primary text-center mb-4">Make Case</h1>
                            <div className="bg-light text-center rounded p-5">

                                <form onSubmit={onSubmit}>
                                    <div className="row g-3">
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
                                            value={endDate}
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
                                                className="btn btn-primary btn-block mt-4"
                                                
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
export default AddCaseForm;