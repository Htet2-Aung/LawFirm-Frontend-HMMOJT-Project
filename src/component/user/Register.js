import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../../layout/Banner";
import Home from "../../layout/Home";
import { addNewUser } from "./usersSlice";

function Register(props) {
    console.log("hello")
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [accountName, setAccountName] = useState('');
    const [address, setAddress] = useState('');
    const [nrc, setNrc] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onFirstNameChange = e => setFirstName(e.target.value);
    const onMiddleNameChange = e => setMiddleName(e.target.value);
    const onLastNameChange = e => setLastName(e.target.value);
    const onGenderChange = e => setGender(e.target.value);
    const onImageChange = e => setImageURL(e.target.value);
    const onAccountNameChange = e => setAccountName(e.target.value);
    const onAddressChange = e => setAddress(e.target.value);
    const onNrcChange = e => setNrc(e.target.value);
    const onPhoneNoChange = e => setPhoneNo(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    const onConfirmPasswordChange = e => setConfirmPassword(e.target.value);
    const canSave = [firstName, middleName, lastName, accountName, password, nrc, address, phoneNo].every(Boolean) && addRequestStatus === 'idle'

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();


        if (canSave) {
            try {
                setAddRequestStatus('pending')


                dispatch(
                    addNewUser({
                        user: {
                            firstName,
                            middleName,
                            lastName,
                            gender,
                            imageURL,
                            address,
                            nrc,
                            phoneNo,
                            accountName,
                            username,
                            password,
                            confirmPassword
                           
                        
                        }
                    })
                ).unwrap();
                    navigate('/login')
            } catch (error) {
                console.log(error)

            } finally {
                setAddRequestStatus('idle')
            }

            setFirstName('')
            setMiddleName('')
            setLastName('')
            setAccountName('')
            setGender('')
            setAddress('')
            setPassword('')
            setNrc('')
            setPhoneNo('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
         

        }
        console.log(canSave)

    }
    return (
        <div>
            
            <div className="hero-header">
                <Banner/>
            </div>
            <div class="contact">
                <div class="container">
                    <div class="section-header">
                        <h2>Register Form</h2>
                    </div>
                    <div class="row ">
                        <div class="col-md-6">
                            <div class="contact-info bg-primary">
                                <div class="contact-item">
                                    <i class="fa fa-map-marker-alt"></i>
                                    <div class="contact-text ">
                                        <h2>Location</h2>
                                        <p>73(A) Street, Mandalay</p>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <i class="fa fa-phone-alt"></i>
                                    <div class="contact-text">
                                        <h2>Phone</h2>
                                        <p>+959404060366</p>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <i class="fa fa-envelope"></i>
                                    <div class="contact-text">
                                        <h2>Email</h2>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-form">
                                <form onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col-md-4 form-group">
                                            <input type="text" class="form-control" placeholder="Your First Name" required="required"
                                             value={firstName}
                                             onChange={onFirstNameChange} 
                                             />
                                        </div>
                                        <div className="col-md-4 form-group">
                                            <input type="text" class="form-control" placeholder="Your Middle Name" required="required" 
                                            value={middleName}
                                            onChange={onMiddleNameChange}
                                            

                                            />
                                        </div>
                                        <div className="col-md-4 form-group">
                                            <input type="text" class="form-control" placeholder="Your Last Name" required="required"
                                            value={lastName}
                                            onChange={onLastNameChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" placeholder="Your Image URL" required="required"
                                            value={imageURL}
                                            onChange={onImageChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" className="form-control" placeholder="Your Profile Name" required="required"
                                            value={accountName}
                                            onChange={onAccountNameChange} />
                                        </div>
                                        <div className="col-md-6 form-group">
                                        <select
                                            className="form-control h-100"
                                            value={gender}
                                            onChange={onGenderChange}
                                        >
                                            <option value="">Choose Gender</option>
                                            <option value="MALE">MALE</option>
                                            <option value="FEMALE">FEMALE</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-6 form-group">
                                            <input type="text" class="form-control" placeholder="Your NRC" required="required"
                                            value={nrc}
                                            onChange={onNrcChange} />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="email" class="form-control" placeholder="Your Email" required="required"
                                            value={username}
                                            onChange={onEmailChange} />
                                        </div>
                                       
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" class="form-control" placeholder="Your Address" required="required"
                                            value={address}
                                            onChange={onAddressChange} />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="text" class="form-control" placeholder="Your Phone Number" required="required" 
                                             value={phoneNo}
                                            onChange={onPhoneNoChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-6 form-group">
                                            <input type="password" class="form-control" placeholder="Your Password" required="required"
                                            value={password}
                                            onChange={onPasswordChange} />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="password" class="form-control" placeholder="Your Confirm Password" required="required"
                                            value={confirmPassword}
                                            onChange={onConfirmPasswordChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-3 form-group"></div>
                                    <div className="col-md-7 form-group">
                                    <h5><span className="text-danger">Already a member? </span><Link to="/login">Login</Link></h5>
                                    </div>
                                    <div className="col-md-2 form-group"></div>
                                      
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 form-group"></div>
                                        <div className="col-md-8 form-group">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-4 form-group">
                                                    <button class="btn" type="submit">Register</button>
                                                </div>
                                                <div className="col-md-2 col-sm-4 form-group"></div>
                                                <div className="col-md-5 col-sm-4 form-group">
                                                    <button class="btn" type="reset">Reset</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 form-group"></div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </div >
    );
}
export default Register;