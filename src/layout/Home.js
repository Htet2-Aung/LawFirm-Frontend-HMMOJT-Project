import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../component/auth/authSlice";
import Dashboard from "./Dashboard";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';


function Home(){
    const user = useSelector(getUser)
    const role = user.role
    console.log(role)
    const dispatch = useDispatch();
   
  const logout = useCallback(() => {
    dispatch(logout())
  },[dispatch])

    let view;
  
    if(role === 'Admin'){
        view =(
            
        <div className="container home">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <Link to="/" className="navbar-brand">
                    <h1 className="ms-0 text-uppercase text-primary">
                    <i className='fas fa-balance-scale' ></i>Lawyer Landing</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
               
                <div className="nav-item ">
                    <Link to="/userLog" className="nav-link">User</Link>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">I & A</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="/inquery" className="text-primary dropdown-item">Inquery List</Link>
                        {/* as={Link} */}
                        <Link to="/appointment" className="text-primary dropdown-item">Appointment List</Link>
                    </div>
                </div> 
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">C & C </Link>
                    <div className="dropdown-menu m-0">
                        <Link to="/contract" className="text-primary dropdown-item">Contract List</Link>
                        <Link to="/case" className="text-primary dropdown-item">Case List</Link>
                    </div>
                </div>         
                <div className="nav-item ">
                    <Link to="/payment/paymentTable" className="nav-link">Payment</Link>
                </div>      
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class='fas fa-primary fa-user-check'></i>{user.role}</Link>
                    <div className="dropdown-menu m-0">
                    <Link onClick={logout} to="/login" className="text-primary dropdown-item">Logout</Link>
                        
                    </div>
                </div>                        
            </div>

                </div>
            </nav>
            {/* <NavigationBar/> */}
            <Dashboard/>
        </div>
        

        )
    }
    else if(role === 'User'){
        
        view =(
        
        <div className="container home">
            <nav className="navbar navbar-expand-lg  bg-white navbar-light py-3 py-lg-0">
          
                <Link  to="/" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary">
                    <i className='fas fa-balance-scale' ></i>Lawyer Landing</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
                <div className="nav-item ">
                    <Link to={`/user/info/${user.id}`} className="nav-link">Profile</Link>
                </div>
                <div className="nav-item ">
                <Link to="/inquery/create" className="nav-link">Make Inquiry</Link>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">View</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="/inquery" className="text-primary dropdown-item">View Inquiry</Link>
                        {/* as={Link} */}
                        <Link to="/appointment" className="text-primary dropdown-item">View Appointment</Link>
                        <Link to="/contract" className="text-primary dropdown-item">View Contract</Link>
                        <Link to="/case" className="text-primary dropdown-item">View Case</Link>
                        <Link to="/payment/paymentTable" className="text-primary dropdown-item">View Payment</Link>
                    </div>
                </div>               
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class='fas fa-primary fa-user-check'></i>{user.accountName}</Link>
                    <div className="dropdown-menu m-0">
                    <Link onClick={logout} to="/login" className="text-primary dropdown-item">Logout</Link>
                        
                    </div>
                </div> 
                                                      
            </div>
                </div>
            </nav>
        </div>
        
  )
    }
    else if(role === 'Lawyer'){
        view =(
        
        <div className="container home">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <Link to="/" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary">
                    <i className='fas fa-balance-scale' ></i>Lawyer Landing</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
                <div className="nav-item ">
                <Link to={`/user/info/${user.id}`} className="nav-link">Profile</Link>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">View</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="/inquery" className="text-primary dropdown-item">View Inquiry</Link>
                        {/* as={Link} */}
                        <Link to="/appointment" className="text-primary dropdown-item">View Appointment</Link>
                        <Link to="/contract" className="text-primary dropdown-item">View Contract</Link>
                        <Link to="/case" className="text-primary dropdown-item">View Case</Link>
                        <Link to="/payment/paymentTable" className="text-primary dropdown-item">View Payment</Link>
                    </div>
                </div>   
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class='fas fa-primary fa-user-check'></i>{user.accountName}</Link>
                    <div className="dropdown-menu m-0">
                    <Link onClick={logout} to="/login" className="text-primary dropdown-item">Logout</Link>
                        
                    </div>
                </div> 
                                                      
            </div>
                </div>
            </nav>
        </div>
        
  )
    }
    else{view =(
       
        <div className="container home">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <Link to="/" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary">
                    <i className='fas fa-balance-scale' ></i>Lawyer Landing</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
                <div className="nav-item">
                        <Link to="/login" className=" nav-link">Make Inquiry</Link>
                </div> 
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Register</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="/register" className="text-primary dropdown-item">Sign Up</Link>
                        <Link to="/login"className="text-primary dropdown-item">Sign In</Link>
                    </div>
                </div> 
               
                                                      
            </div>
                </div>
            </nav>
        </div>
        
 
    );
    }

    return view;
}
export default Home;