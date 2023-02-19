import { Link } from "react-router-dom";
import lawfirm from "./law_house.jpg"


function Home(){
    return(
        <div>
        <div className="container">
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
                            <Link to="/inquery" className="nav-link" data-bs-toggle="dropdown">Home</Link>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="/appointment/list" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Register</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/appointment/list" className="text-primary dropdown-item">Sign Up</Link>
                                <Link to="/appointment/list" className="text-primary dropdown-item">Sign In</Link>
                            </div>
                        </div>                                         
                    </div>
                </div>
            </nav>
        </div>
        <section className="hero-header">
              
               
               <img src={lawfirm}></img>
              
         
         </section>
    </div>

    );
}
export default Home;