import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectUserById } from "./usersSlice";
function LawyerInfo(){

        const { userId } = useParams()
        const navigate = useNavigate()
        const user = useSelector((state) => selectUserById(state, Number(userId)))
        console.log(userId)
        
       
    
  
   
    // return info;
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="card">
                <div className="card-body">
                <div className="row">
                <div className="col-md-6">
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
                
                <div className="col-md-6">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Cost</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.cost}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Status</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.statuss}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Field</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.field}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">License No</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.licenseNo}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">License Expire Date</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{user.licenseExpireDate}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Certificate</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo"><p>{user.certificate}</p></h5>
                            </div>
                        </div>
                    </div>
                </div>
                </div>       
                </div>   
                <hr className="sidebar-divider" />
                <div className="row">
                            
                                <h5 className="cardInfo text-center">Description</h5>
                            
                         
                                <h5 className="cardInfo"><p>{user.description}</p></h5>
                            
                        </div>      
                        <hr className="sidebar-divider" />                             
                    <div className="text-center mb-2">
                        <Link to="/">
                            <button className="btn btn-danger mx-5">Close</button>
                        </Link>
                        {/* <Link to={`/inquery/create/${userId}`}>
                            <button className="btn btn-success">Make Inquery</button>
                        </Link> */}
                        <Link to={`/user/editLawyer/${user.id}`}><button className="btn btn-primary">Edit</button></Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    )
    
}
export default LawyerInfo;