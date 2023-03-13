import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../component/auth/authSlice";
import Dashboard from "./Dashboard";

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
                <div className="nav-item ">
                    <Link to="/inquery" className="nav-link">Inquiry</Link>
                </div>
                <div className="nav-item ">
                    <Link to="/appointment" className="nav-link">Appointment</Link>
                </div>
                <div className="nav-item ">
                    <Link to="/contract" className="nav-link">Contract</Link>
                </div>
                <div className="nav-item ">
                    <Link to="/payment" className="nav-link">Payment</Link>
                </div>      
                <div className="nav-item ">
                    <Link onClick={logout} to="/login" className="nav-link">Logout</Link>
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
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Inquiry</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="/inquery/create" className="text-primary dropdown-item">Make Inquiry</Link>
                        <Link to="/inquery" className="text-primary dropdown-item">View Inquiry</Link>
                    </div>
                </div> 
                <div className="nav-item ">
                    <Link as={Link} to="/appointment" className="nav-link">Appointment</Link>
                </div>
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Contract</Link>
                </div>
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Payment</Link>
                </div>
              
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class='fas fa-primary fa-user-check'></i>{user.accountName}</Link>
                    <div className="dropdown-menu m-0">
                    <Link onClick={logout} to="/login" className="text-primary dropdown-item">Logout</Link>
                        
                    </div>
                </div> 

                <div className="nav-item ">
              
              
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
                    <Link to="/" className="nav-link">Profile</Link>
                </div>
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Inquiry</Link>
                </div>
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Appointment</Link>
                </div>
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Contract</Link>
                </div>
                <div className="nav-item ">
                    <Link to="/" className="nav-link">Payment</Link>
                </div>
                <div className="nav-item ">
            
                <Link onClick={logout} to="/login" className="nav-link">Logout</Link>
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