import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUserById, updateLawyer } from "./usersSlice";
function EditLawyerForm(props){
    const {userId} = useParams()
    const navigate = useNavigate()
    const user = useSelector((state) => selectUserById(state, Number(userId)))
    console.log(userId)

    const [id, setId] = useState(user?.id);
    const [firstName, setFirstName] = useState(user?.firstName);
    const [middleName, setMiddleName] = useState(user?.middleName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [accountName, setAccountName] = useState(user?.accountName);
    const [imageURL, setImageURL] = useState(user?.imageURL);
    const [cost, setCost] = useState(user?.cost);
    const [gender, setGender] = useState(user?.gender);
    const [address, setAddress] = useState(user?.address);
    const [nrc, setNrc] = useState(user?.nrc);
    const [phoneNo, setPhoneNo] = useState(user?.phoneNo);
    const [statuss, setStatuss] = useState(user?.statuss);
    const [role, setRole] = useState(user?.role);
    const [username, setEmail] = useState(user?.username);
    const [password, setPassword] = useState(user?.password);
    const [confirmPassword, setConfirmPassword] = useState(user?.confirmPassword);
    const [field, setField] = useState(user?.field);
    const [certificate, setCertificate] = useState(user?.certificate);
    const [description, setDescription] = useState(user?.description);
    const [licenseNo, setLicenseNo] = useState(user?.licenseNo);
    const [licenseExpireDate, setLicenseExpireDate] = useState(user?.licenseExpireDate);

   
    const onFirstNameChange = e => setFirstName(e.target.value);
    const onMiddleNameChange = e => setMiddleName(e.target.value);
    const onLastNameChange = e => setLastName(e.target.value);
    const onAccountNameChange = e => setAccountName(e.target.value);
    const onImageURLChange = e => setImageURL(e.target.value);
    const onCostChange = e => setCost(e.target.value);
    const onGenderChange = e => setGender(e.target.value);
    const onAddressChange = e => setAddress(e.target.value);
    const onNrcChange = e => setNrc(e.target.value);
    const onPhoneNoChange = e => setPhoneNo(e.target.value);
    const onStatussChange = e => setStatuss(e.target.value);
    const onRoleChange = e => setRole(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    const onConfirmPasswordChange = e => setConfirmPassword(e.target.value);
    const onFieldChange = e => setField(e.target.value);
    const onCertificateChange = e => setCertificate(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
    const onLicenseNoChange = e => setLicenseNo(e.target.value);
    const onLicenseExpireDateChange = e => setLicenseExpireDate(e.target.value);
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const canSave = [firstName, middleName, lastName, accountName,imageURL, password, nrc, address, phoneNo].every(Boolean) && addRequestStatus === 'idle'

    console.log(canSave)
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();

        if (canSave) {
            console.log("In the cansave")
            console.log(userId)
            try {
                setAddRequestStatus('pending')

                dispatch(
                    updateLawyer({
                    
                        user:{
                        id,
                        firstName,
                        middleName,
                        lastName,
                        address,
                        cost,
                        gender,
                        nrc,
                        phoneNo,
                        statuss,
                        accountName,
                        imageURL,
                        role,
                        username,
                        password,
                        confirmPassword,
                        description,
                        certificate,
                        field,
                        licenseNo,
                        licenseExpireDate
                        
                    }
                    }),
                ).unwrap();

            } catch (error) {
                console.log(error)

            } finally {
                setAddRequestStatus('idle')
            }

            setId('')
            setFirstName('')
            setMiddleName('')
            setLastName('')
            setAccountName('')
            setImageURL('')
            setGender('')
            setCost('')
            setAddress('')
            setPassword('')
            setNrc('')
            setPhoneNo('')
            setStatuss('')
            setRole('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setField('')
            setCertificate('')
            setDescription('')
            setLicenseNo('')
            setLicenseExpireDate('')
            navigate(`/user/lawyerInfo/${user.id}`)
        }
        console.log(canSave)
      
    }
        return (

            <div class="container bg-gradient-primary">
                <div class="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
    
                            <div class="row mt-3 ms-3 me-3">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4 cardInfo">Register Form</h1>
                                </div>
                                <form onSubmit={onSubmit} class="user">
                                    <div class="form-group row mb-3">
                                        <div class="col-sm-4">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your First Name"
                                                value={firstName}
                                                onChange={onFirstNameChange}
                                            />
                                        </div>
                                        <div class="col-sm-4">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your Middle Name"
                                                value={middleName}
                                                onChange={onMiddleNameChange}
                                            />
                                        </div>
                                        <div class="col-sm-4">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your Last Name"
                                                value={lastName}
                                                onChange={onLastNameChange}
                                               
                                            />
                                        </div>
                                    </div>
    
                                    <div class="form-group row mb-3">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your Profile Name"
                                                value={accountName}
                                                onChange={onAccountNameChange}
                                            />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your NRC"
                                                value={nrc}
                                                onChange={onNrcChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                    <div class="col-sm-6">
                                            <select
                                                className="form-control "
                                                value={gender}
                                                onChange={onGenderChange}
                                            >
                                                <option value="">Select Your Gender</option>
                                                <option value="MALE">MALE</option>
                                                <option value="FEMALE">FEMALE</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your Phone Number"
                                                value={phoneNo}
                                                onChange={onPhoneNoChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                    <div class="col-sm-6">
                                            <select
                                                className="form-control "
                                                value={role}
                                                onChange={onRoleChange}
                                                disabled
                                            >
                                                <option value="">Select Your Role</option>
                                                <option value="User">User</option>
                                                <option value="Lawyer">Lawyer</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your Address"
                                                value={address}
                                                onChange={onAddressChange}
                                            />
                                        </div>
                                        
                                    </div>
                                    <div class="form-group row mb-3">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your Cost"
                                                value={cost}
                                                onChange={onCostChange}
                                            />
                                        </div>
                                        <div class="col-sm-6">
                                            <select
                                                className="form-control "
                                                value={statuss}
                                                onChange={onStatussChange}
                                            >
                                                <option value="">Select Your Status</option>
                                                <option value="FOLLOW_THE_CASE">Follow The Case</option>
                                                <option value="BUSY_NOW">Busy Now</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your Field"
                                                value={field}
                                                onChange={onFieldChange}
                                            />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your Image"
                                                value={imageURL}
                                                onChange={onImageURLChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your License Number"
                                                value={licenseNo}
                                                onChange={onLicenseNoChange}
                                            />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control " id="exampleLastName"
                                                placeholder="Your license Expire Date"
                                                value={licenseExpireDate}
                                                onChange={onLicenseExpireDateChange}
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
                                            />
                                        </div>
                                        <div class="col-sm-6">
                                            <textarea type="text" className="form-control"
                                                rows={5}
                                                id="exampleRepeatPassword" placeholder="Your Description"
                                                value={description}
                                                onChange={onDescriptionChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                       <div className="text-center">
                                            <input
                                                type="submit"
                                                className="btn btn-primary w-50 py-3"
    
                                                value={'Update '}
                                            />
                                            </div>
                                       
                                    </div>
    
    
                                </form>
    
                            </div>
    
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                </div>
    
            </div>
    
    
    
        );
}
export default EditLawyerForm;