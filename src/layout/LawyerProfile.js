import { Link } from "react-router-dom";
import lawyer from "./lawyer1.jpg";
import lawyer2 from "./lawyer2.jpg";
import lawyer1 from "./lawyer2.png";
import lawyer3 from "./lawyer3.png";
import lawyer4 from "./lawyer4.png";
import lawyer5 from "./lawyer5.jpg";
import classes from "./LawyerProfile.module.css";
function LawyerProfile() {
    return (
        <div className="container my-5">
            <div className="col-xl-10 offset-xl-1 text-center text-primary">
                <h1>Our Lawyers</h1>
            </div>
            <div className="row">
                
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div >
                        <div >
                            <img src={lawyer}></img>
                        </div>
                        <div className="lawyer-content bg-white">
                            <h4><Link>Yixing Liu</Link></h4>
                            <div className="skill">
                                <p>International Dispute Resolution</p>
                                <p>Email: <span>nanjing@landinglawyer.com</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div >
                        <div >
                            <img src={lawyer1}></img>
                        </div>
                        <div className="lawyer-content bg-white">
                            <h4><Link>Yixing Liu</Link></h4>
                            <div className="skill">
                                <p>International Dispute Resolution</p>
                                <p>Email: <span>nanjing@landinglawyer.com</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div >
                        <div >
                            <img src={lawyer4}></img>
                        </div>
                        <div className="lawyer-content bg-white">
                            <h4><Link>Yixing Liu</Link></h4>
                            <div className="skill">
                                <p>International Dispute Resolution</p>
                                <p>Email: <span>nanjing@landinglawyer.com</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div >
                        <div >
                            <img src={lawyer3}></img>
                        </div>
                        <div className="lawyer-content bg-white">
                            <h4><Link>Yixing Liu</Link></h4>
                            <div className="skill">
                                <p>International Dispute Resolution</p>
                                <p>Email: <span>nanjing@landinglawyer.com</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div >
                        <div >
                            <img src={lawyer2}></img>
                        </div>
                        <div className="lawyer-content bg-white">
                            <h4><Link>Yixing Liu</Link></h4>
                            <div className="skill">
                                <p>International Dispute Resolution</p>
                                <p>Email: <span>nanjing@landinglawyer.com</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div >
                        <div >
                            <img src={lawyer5}></img>
                        </div>
                        <div className="lawyer-content bg-white">
                            <h4><Link>Yixing Liu</Link></h4>
                            <div className="skill">
                                <p>International Dispute Resolution</p>
                                <p>Email: <span>nanjing@landinglawyer.com</span></p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}
export default LawyerProfile;