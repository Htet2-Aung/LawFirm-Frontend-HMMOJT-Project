import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchUser, selectUserById } from "./usersSlice";
function UserInfo(props){
        const dispatch = useDispatch()
        const { userId } = useParams()
        const navigate = useNavigate()
        const user = useSelector((state) => selectUserById(state, Number(userId)))
        console.log(userId)
        console.log("In the user information :"+user.accountName)
       

       

 
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card">
                        <div className="card-body">
                <div className="row">
                    <div className="col-md-5">
                    <h5 className="cardInfo">Your Profile</h5>
                        <img src={user.imageURL} className="image fluid" width="200px" height="200px"/>
                        <div className="row">
                            <div className="col-md-7">
                            <h6 className="cardInfo"> <i class='fas fa-user-alt'></i>
                                {user.accountName}</h6>
                            </div>
                            <div>
                            <h6 className="cardInfo"><i class='fas fa-phone-alt'></i>
                         {user.phoneNo}</h6>
                            </div>
                            <div>
                            <h6 className="cardInfo"><i class='fas fa-envelope-open'></i>
                         {user.username}</h6>
                            </div>
                        </div>
                  
                    </div>
                    <div className="col-md-7 mt-3">
                        <div className="row ">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Role</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.role}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">First Name</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.firstName}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Middle Name</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.middleName}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Last Name</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.lastName}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Profile Name</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.accountName}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Gender</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.gender}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">NRC</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.nrc}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Address</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.address}</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
                            <hr className="sidebar-divider" />
                            <div className="text-center mb-2">
                                <Link to="/">
                                    <button className="btn btn-danger mx-2">Close</button>
                                </Link>
                                <Link to={`/user/edit/${user.id}`}>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    
   
   
    
}
export default UserInfo;