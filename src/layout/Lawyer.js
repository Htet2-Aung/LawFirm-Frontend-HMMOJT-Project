import { Link } from "react-router-dom";

function Lawyer(props){
        const lawyerId = props.id;
        return (
            <div className="team">
            <div className="team-item">
                
                <div className="team-img">
                    <img src={props.imageURL} alt="Team Image" width="80px" height="300px"/>
                </div>
                <div className="team-text">
                    <h2>{props.accountName}</h2>
                    <Link to={`/user/viewLawyer/${lawyerId}`}>
                    <div className="team-social">
                        <a className="social-fb" href=""><i class='fas fa-user-circle fa-2x'></i></a>
                      
                    </div>
                    </Link>
                    <p className="text-light">{props.field}</p>
                </div>
            </div>
            </div>
    )
}
export default Lawyer;