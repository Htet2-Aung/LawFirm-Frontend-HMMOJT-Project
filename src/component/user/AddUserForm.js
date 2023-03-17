import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewLawyer } from "./usersSlice";

function AddUserForm(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [accountName, setAccountName] = useState('');
    const [gender, setGender] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [cost, setCost] = useState('');
    const [address, setAddress] = useState('');
    const [nrc, setNrc] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [statuss, setStatuss] = useState('');
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [field, setField] = useState('');
    const [certificate, setCertificate] = useState('');
    const [description, setDescription] = useState('');
    const [licenseNo, setLicenseNo] = useState('');
    const [licenseExpireDate, setLicenseExpireDate] = useState('');

    const [addRequestStatus, setAddRequestStatus] = useState('idle')


    const onFirstNameChange = e => setFirstName(e.target.value);
    const onLastNameChange = e => setLastName(e.target.value);
    const onAccountNameChange = e => setAccountName(e.target.value);
    const onGenderChange = e => setGender(e.target.value);
    const onCostChange = e => setCost(e.target.value);
    const onAddressChange = e => setAddress(e.target.value);
    const onNrcChange = e => setNrc(e.target.value);
    const onPhoneNoChange = e => setPhoneNo(e.target.value);
    const onStatussChange = e => setStatuss(e.target.value);
    const onImageChange = e => setImageURL(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    const onConfirmPasswordChange = e => setConfirmPassword(e.target.value);
    const onFieldChange = e => setField(e.target.value);
    const onCertificateChange = e => setCertificate(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
    const onLicenseNoChange = e => setLicenseNo(e.target.value);
    const onLicenseExpireDateChange = e => setLicenseExpireDate(e.target.value);

    const canSave = [firstName, lastName, accountName, password, nrc, address, phoneNo].every(Boolean) && addRequestStatus === 'idle'

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();


        if (canSave) {
            try {
                setAddRequestStatus('pending')


                dispatch(
                    addNewLawyer({
                        lawyer: {
                            firstName,
                            lastName,
                            gender,
                            imageURL,
                            address,
                            cost,
                            nrc,
                            phoneNo,
                            statuss,
                            accountName,
                            username,
                            password,
                            description,
                            certificate,
                            field,
                            licenseNo,
                            licenseExpireDate,
                            confirmPassword
                        }
                    })
                ).unwrap();
                navigate("/userLog")
            } catch (error) {
                console.log(error)

            } finally {
                setAddRequestStatus('idle')
            }

            setFirstName('')
            setLastName('')
            setAccountName('')
            setGender('')
            setCost('')
            setAddress('')
            setPassword('')
            setConfirmPassword('')
            setNrc('')
            setPhoneNo('')
            setStatuss('')
            setImageURL('')
            setEmail('')
            setPassword('')
            setField('')
            setCertificate('')
            setDescription('')
            setLicenseNo('')
            setLicenseExpireDate('')

        }
        console.log(canSave)

    }
    return (

        <div class="container">
                <div class="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4 mt-3">Register Form</h1>
                                </div>
                                <div className="row ms-2 me-2">
                                    <form onSubmit={onSubmit} class="user">
                                        <div class="form-group row mb-3">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Your First Name"
                                                    value={firstName}
                                                    onChange={onFirstNameChange}
                                                    required
                                                />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Your Last Name"
                                                    value={lastName}
                                                    onChange={onLastNameChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div class="form-group row mb-3">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Image URL"
                                                    value={imageURL}
                                                    onChange={onImageChange}
                                                    required
                                                />
                                            </div>
                                            <div class="col-sm-6">
                                                <select
                                                    className="form-control "
                                                    value={gender}
                                                    onChange={onGenderChange}
                                                >
                                                    <option value="">Choose Gender</option>
                                                    <option value="MALE">MALE</option>
                                                    <option value="FEMALE">FEMALE</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Your Profile Name"
                                                    value={accountName}
                                                    onChange={onAccountNameChange}
                                                    required
                                                />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Your NRC"
                                                    value={nrc}
                                                    onChange={onNrcChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-sm-6">
                                                <input type="email" class="form-control " id="exampleLastName"
                                                    placeholder="Your Email"
                                                    value={username}
                                                    onChange={onEmailChange}
                                                    required
                                                />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Your Phone Number"
                                                    value={phoneNo}
                                                    onChange={onPhoneNoChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Your Cost"
                                                    value={cost}
                                                    onChange={onCostChange}
                                                    required
                                                />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Your Address"
                                                    value={address}
                                                    onChange={onAddressChange}
                                                    required
                                                />
                                            </div>

                                        </div>
                                        <div class="form-group row mb-3">

                                            <div class="col-sm-6">
                                                <select
                                                    className="form-control "
                                                    value={statuss}
                                                    onChange={onStatussChange}
                                                    required
                                                >
                                                    <option value="">Select Your Status</option>
                                                    <option value="FOLLOW_THE_CASE">Follow The Case</option>
                                                    <option value="BUSY_NOW">Busy Now</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Your Field"
                                                    value={field}
                                                    onChange={onFieldChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control " id="exampleLastName"
                                                    placeholder="Your Password"
                                                    value={password}
                                                    onChange={onPasswordChange}
                                                />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control " id="exampleLastName"
                                                    placeholder="Your Confirm Password"
                                                    value={confirmPassword}
                                                    onChange={onConfirmPasswordChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-sm-6">
                                                <label className="form-label">License Number</label>
                                                <input type="text" class="form-control " id="exampleLastName"
                                                    placeholder="Your License Number"
                                                    value={licenseNo}
                                                    onChange={onLicenseNoChange}
                                                    required
                                                />
                                            </div>
                                            <div class="col-sm-6">
                                                <label className="form-label">License Expire Date</label>
                                                <input type="date" class="form-control " id="exampleLastName"
                                                    placeholder="Your license Expire Date"
                                                    value={licenseExpireDate}
                                                    onChange={onLicenseExpireDateChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-sm-6">
                                                <textarea type="text" className="form-control"
                                                    rows={5}
                                                    id="exampleRepeatPassword" placeholder="Your Certificate"
                                                    value={certificate}
                                                    onChange={onCertificateChange}
                                                    required
                                                />
                                            </div>
                                            <div class="col-sm-6">
                                                <textarea type="text" className="form-control"
                                                    rows={5}
                                                    id="exampleRepeatPassword" placeholder="Your Description"
                                                    value={description}
                                                    onChange={onDescriptionChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary w-100 py-3"

                                                    value={'Register'}
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
                    <div className="col-md-2"></div>
                </div>
        </div>



    );
}
export default AddUserForm;

