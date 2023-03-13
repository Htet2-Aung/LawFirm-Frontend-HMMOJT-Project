import { Link } from "react-router-dom";

function Lawyer(props){
        return (
            <div className="team">
            <div className="team-item">
                
                <div className="team-img">
                    <img src={props.imageURL} alt="Team Image" width="80px" height="300px"/>
                </div>
                <div className="team-text">
                    <h2>{props.accountName}</h2>
                    <Link to={`/user/info/${props.id}`}>
                    <div className="team-social">
                        <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                        <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                    </Link>
                    <p className="text-light">{props.field}</p>
                </div>
            </div>
            </div>
    )
}
export default Lawyer;