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

        <div class="team">
        <div class="container">
            <div class="section-header">
                <h2>Meet Our Expert Attorneys</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src={lawyer} alt="Team Image"/>
                        </div>
                        <div class="team-text">
                            <h2>Adam Phillips</h2>
                            <p>Business Consultant</p>
                            <div class="team-social">
                                <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src={lawyer1} alt="Team Image"/>
                        </div>
                        <div class="team-text">
                            <h2>Dylan Adams</h2>
                            <p>Criminal Consultant</p>
                            <div class="team-social">
                                <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src={lawyer2} alt="Team Image"/>
                        </div>
                        <div class="team-text">
                            <h2>Gloria Edwards</h2>
                            <p>Divorce Consultant</p>
                            <div class="team-social">
                                <a class="social-tw" href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                                <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src={lawyer3} alt="Team Image"/>
                        </div>
                        <div class="team-text">
                            <h2>Josh Dunn</h2>
                            <p>Immigration Consultant</p>
                            <div class="team-social">
                                <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        // <div className="container my-5">
        //     <div className="col-xl-10 offset-xl-1 text-center text-primary">
        //         <h1>Our Lawyers</h1>
        //     </div>
        //     <div className="row">
        //             <div className="col-xl-4 col-lg-6 col-md-6">
        //                 <div >
        //                     <div >
        //                         <img src={lawyer}/>
        //                     </div>
        //                     <div className="lawyer-content bg-white">
        //                         <h4><Link>Yixing Liu</Link></h4>
        //                         <div className="skill">
        //                             <p>International Dispute Resolution</p>
        //                             <p>Email: <span>nanjing@landinglawyer.com</span></p>
        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>
        //             <div className="col-xl-4 col-lg-6 col-md-6">
        //                 <div >
        //                     <div >
        //                         <img src={lawyer1}></img>
        //                     </div>
        //                     <div className="lawyer-content bg-white">
        //                         <h4><Link>Yixing Liu</Link></h4>
        //                         <div className="skill">
        //                             <p>International Dispute Resolution</p>
        //                             <p>Email: <span>nanjing@landinglawyer.com</span></p>
        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>
        //             <div className="col-xl-4 col-lg-6 col-md-6">
        //                 <div >
        //                     <div >
        //                         <img src={lawyer4}></img>
        //                     </div>
        //                     <div className="lawyer-content bg-white">
        //                         <h4><Link>Yixing Liu</Link></h4>
        //                         <div className="skill">
        //                             <p>International Dispute Resolution</p>
        //                             <p>Email: <span>nanjing@landinglawyer.com</span></p>
        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>
        //             <div className="col-xl-4 col-lg-6 col-md-6">
        //                 <div >
        //                     <div >
        //                         <img src={lawyer3}></img>
        //                     </div>
        //                     <div className="lawyer-content bg-white">
        //                         <h4><Link>Yixing Liu</Link></h4>
        //                         <div className="skill">
        //                             <p>International Dispute Resolution</p>
        //                             <p>Email: <span>nanjing@landinglawyer.com</span></p>
        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>
        //             <div className="col-xl-4 col-lg-6 col-md-6">
        //                 <div >
        //                     <div >
        //                         <img src={lawyer2}></img>
        //                     </div>
        //                     <div className="lawyer-content bg-white">
        //                         <h4><Link>Yixing Liu</Link></h4>
        //                         <div className="skill">
        //                             <p>International Dispute Resolution</p>
        //                             <p>Email: <span>nanjing@landinglawyer.com</span></p>
        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>
        //             <div className="col-xl-4 col-lg-6 col-md-6">
        //                 <div >
        //                     <div >
        //                         <img src={lawyer5}></img>
        //                     </div>
        //                     <div className="lawyer-content bg-white">
        //                         <h4><Link>Yixing Liu</Link></h4>
        //                         <div className="skill">
        //                             <p>International Dispute Resolution</p>
        //                             <p>Email: <span>nanjing@landinglawyer.com</span></p>
        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>

        //             </div>
        //         </div>
           
            );
}
            export default LawyerProfile;