import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Banner from "../../layout/Banner";
import {getError, login } from "../auth/authSlice";


function Login(props) {
    const errorText=useSelector(getError)
    console.log("Error Text in home : "+errorText)
    
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const [requestStatus,setRequestStatus] = useState('idle')
    const navigate = useNavigate()

    const onEmailInputChange = e => setEmail(e.target.value)
    const onPasswordInputChange = e => setPassword(e.target.value)

   

    const canLogin = [email,password].every(Boolean) && requestStatus === 'idle'

    const dispatch = useDispatch()

    const onLoginSubmit = (event) => {
        event.preventDefault()

        if(canLogin){
            setRequestStatus('pending')
            try {
                dispatch(login({
                    username:email,
                    password
                })).unwrap()
                
                navigate('/')
                
    
               
            } catch (error) {
                console.error(error)
                // errorText='Invalid user name or password'
            }finally{
                setRequestStatus('idle')

                setEmail('')
                setPassword('')
                
          
            }
        }
    }


    return (
        <div>
           
            <div className="hero-header">
                <Banner/>
            </div>
        
        <div class="contact row mt-5">
            <div className="col-md-4 form-group"></div>
            <div className="col-md-4 form-group contact-form  bg-light">
            <h4 className="text-center mt-3 text-primary">Please Login</h4>
                <form onSubmit={onLoginSubmit}>
                    <div className="form-group">
                        <label className="text-danger">{errorText}</label>
                        <input type="email" class="form-control" placeholder="Your Email" required="required"
                         value={email}
                        onChange={onEmailInputChange} />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">{errorText}</label>
                        <input type="password" class="form-control" placeholder="Your Password" required="required"
                          value={password}
                          onChange={onPasswordInputChange} />
                    </div>
                    <div className="row">
                        <div className="col-md-2 form-group"></div>
                        <div className="col-md-8 form-group">
                            <div className="row">
                            <div className="col-md-2 form-group "></div>
                                <div className="col-md-8 form-group ">
                                    <button class="btn" type="submit" disabled={!canLogin}>Login</button>
                                </div>
                                <div className="col-md-2 form-group "></div>
                               
                            </div>
                            
                            <div className="text-danger form-group">
                                <h5>Don't have an account?
                                   <Link to="/register"><span className="text-info">Register</span></Link></h5>
                                </div>
                        </div>
                        <div className="col-md-2 form-group"></div>
                    </div>

                </form>
            </div>
            <div className="col-md-4 form-group"></div>
        </div>
        </div>
    );
}
export default Login;