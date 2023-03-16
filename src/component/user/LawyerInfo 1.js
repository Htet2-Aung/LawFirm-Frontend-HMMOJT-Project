import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchUser, selectUserById } from "./usersSlice";
function LawyerInfo1(props){

        const dispatch = useDispatch();
        

        const { lawyerId } = useParams()
        const navigate = useNavigate()
        const user = useSelector((state) => selectUserById(state, Number(lawyerId)))
        console.log(lawyerId)
        const id = useState(user?.id);
        const firstName = useState(user?.firstName);
        const middleName = useState(user?.middleName);
        const lastName = useState(user?.lastName);
        const accountName = useState(user?.accountName);
        const imageURL = useState(user?.imageURL);
        const gender = useState(user?.gender)
        const cost = useState(user?.cost);
        const address = useState(user?.address);
        const nrc = useState(user?.nrc);
        const phoneNo = useState(user?.phoneNo);
        const statuss = useState(user?.statuss);
        const role = useState(user?.role);
        const username = useState(user?.username);
        const field = useState(user?.field);
        const certificate = useState(user?.certificate);
        const description = useState(user?.description);
        const licenseNo = useState(user?.licenseNo);
        const licenseExpireDate = useState(user?.licenseExpireDate);


        useEffect(()=>{
            dispatch(fetchUser())
        },[dispatch])

    return(
        <div className="container">
        <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 ms-0">
        <div className="card bg-light">
        <div className="row">
        <div className="col-md-3">
        <img src={user.imageURL} className="image fluid" width="400px" height="400px"/>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-7 ms-5 mt-3">
            <h3 className="cardInfo text-primary">{firstName} {middleName} {lastName}</h3>
            <h5 className="cardInfo text-dark">Email: {username}</h5>
            <h5 className="cardInfo text-dark">Phone: {phoneNo}</h5>
            <h5 className="cardInfo text-dark">Status: {statuss}</h5>
            <h5 className="cardInfo text-dark">Field: {field}</h5>
            <p className="cardInfo text-dark">{description}</p>
            
        </div>
        </div>
        </div>
     
        </div>
        </div>
        </div>
    )
    
}
export default LawyerInfo1;