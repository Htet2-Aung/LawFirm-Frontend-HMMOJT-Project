import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewInquery } from "./inquerySlice";
import lawyerImage from "./lawyer.jpg";
function AddInqueryForm(props) {

    const [phoneNo, setPhoneNo] = useState('');
    const [lawyerName, setLawyerName] = useState('');
    const [description, setDescription] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onPhoneNoChange = e => setPhoneNo(e.target.value);
    const onLawyerNameChange = e => setLawyerName(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);

    const canSave = [phoneNo, description].every(Boolean) && addRequestStatus === 'idle'

    //const isEdit = props.mode === 'edit'

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();


        if (canSave) {
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

            } finally {
                setAddRequestStatus('idle')
            }

            setPhoneNo('')
            setLawyerName('')
            setDescription('')

        }
        console.log(canSave)

    }
    return (

        <div class="container bg-gradient-primary">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">

                    <div class="row">
                        <div class="col-lg-5 d-none d-lg-block">
                            <img src={lawyerImage} className="w-100" />
                        </div>
                        <div class="col-lg-7">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Inquery!</h1>
                                </div>
                                <form onSubmit={onSubmit} class="user">
                                    <div class="form-group row mb-3">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                        <select
                                            className="form-control"
                                            value={lawyerName}
                                            onChange={onLawyerNameChange}
                                        >
                                            <option value="">Select LawyerName</option>
                                            <option value="Myat Thu">Myat Thu</option>
                                            <option value="ThuRai">ThuRai</option>
                                        </select>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control form-control-user" id="exampleLastName"
                                                placeholder="Phone Number"
                                                value={phoneNo}
                                                onChange={onPhoneNoChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                        <div class="mb-3">
                                            <textarea type="text" class="form-control form-control-user"
                                                rows={7}
                                                id="exampleRepeatPassword" placeholder="Description"
                                                value={description}
                                                onChange={onDescriptionChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input
                                            type="submit"
                                            className="btn btn-primary w-100 py-3"

                                            value={'Make An Inquiry'}
                                        />
                                        </div>
                                        <div class="col-sm-6 mb-3 mb-sm-0">
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
export default AddInqueryForm;

