import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewInquery } from "./inquerySlice";

function  AddInqueryForm(props){
  
    const [phoneNo, setPhoneNo] = useState('');
    const [lawyerName, setLawyerName] = useState('');
    const [description, setDescription] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onPhoneNoChange = e => setPhoneNo(e.target.value);
    const onLawyerNameChange = e => setLawyerName(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
 
   const canSave = [ phoneNo, description].every(Boolean) && addRequestStatus === 'idle'

    //const isEdit = props.mode === 'edit'

    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();

         
           if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log("In the can save")

                dispatch(
                    addNewInquery({
                        phoneNo,
                        lawyerName,
                        description
        
                }),
                    ).unwrap();
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

            setPhoneNo('')
            setLawyerName('')
            setDescription('')
       
           }
           console.log(canSave)
        
        }
    return (
        <div className="container-fluid bg-primary py-5">

            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="text-center mx-auto mb-5">
                            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Find A Lawyer</h5>
                            <h1 className="display-4 mb-4">Find A Lawyer Professionals</h1>
                            <h5 className="text-white fw-normal">Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo</h5>
                        </div>
                        <div className="mx-auto">
                            <div className="input-group">
                                <select className="form-select border-primary w-25">
                                    <option value="0">Lawyer</option>
                                    <option value="1">Lawyer 1</option>
                                    <option value="2">Lawyer 2</option>
                                    <option value="3">Lawyer 3</option>
                                </select>
                                <input type="text" class="form-control border-primary w-50" placeholder="Keyword" />
                                <button className="btn btn-dark border-0 w-25">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">

                        <h1 className="text-dark text-center mb-4">Make Inquery Form</h1>
                        <div className="bg1-light text-center rounded p-5">

                            <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-12">

                                        <input
                                            type="text"
                                            className="form-control bg-white border-0"
                                            placeholder="Phone Number"
                                            value={phoneNo}
                                            onChange={onPhoneNoChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <input
                                            type="text"
                                            className="form-control bg-white border-0"
                                            placeholder="Lawyer Name"
                                            value={lawyerName}
                                            onChange={onLawyerNameChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <textarea type="text"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            rows={10}
                                            placeholder="Your Description" data-target="#time" data-toggle="datetimepicker"
                                            value={description}
                                            onChange={onDescriptionChange}
                                        />

                                    </div>
                                    
                                    <div className="col-12">
                                            <input 
                                            type="submit" 
                                            className="btn btn-primary w-100 py-3" 
        
                                            value={'Make A Inquery'}
                                            />
                                            
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default AddInqueryForm;

