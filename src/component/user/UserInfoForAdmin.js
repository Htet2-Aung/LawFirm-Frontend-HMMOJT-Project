import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "./usersSlice";


function UserInfoForAdmin(props) {

    const { userId } = useParams()
    const user = useSelector((state) => selectUserById(state, Number(userId)))
    console.log(userId)
    console.log("In The User Info:"+user)


    const id = useState(user?.id);
    const firstName = useState(user?.firstName);
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

    console.log(role)
    function ProfileInfo() {
        return (
            <div className="card-body">
                <div className="row">
                    <div className="col-md-5">
                    <h5 className="cardInfo">Your Profile</h5>
                        <img src={user.imageURL} className="image fluid" width="200px" height="200px"/>
                        <div className="row">
                            <div className="col-md-7">
                            <h6 className="cardInfo"> <i class='fas fa-user-alt'></i>
                                {accountName}</h6>
                            </div>
                            <div>
                            <h6 className="cardInfo"><i class='fas fa-phone-alt'></i>
                         {phoneNo}</h6>
                            </div>
                            <div>
                            <h6 className="cardInfo"><i class='fas fa-envelope-open'></i>
                         {username}</h6>
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
                                <h5 className="cardInfo">{role}</h5>
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
                                <h5 className="cardInfo">{firstName}</h5>
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
                                <h5 className="cardInfo">{lastName}</h5>
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
                                <h5 className="cardInfo">{accountName}</h5>
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
                                <h5 className="cardInfo">{gender}</h5>
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
                                <h5 className="cardInfo">{nrc}</h5>
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
                                <h5 className="cardInfo">{address}</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    function LawyerInfo() {
        return (
            <div className="card-body cardInfo">
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Cost</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo">{cost}</h5>
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
                                <h5 className="cardInfo">{statuss}</h5>
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
                                <h5 className="cardInfo">{field}</h5>
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
                                <h5 className="cardInfo">{licenseNo}</h5>
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
                                <h5 className="cardInfo">{licenseExpireDate}</h5>
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
                                <h5 className="cardInfo"><p>{certificate}</p></h5>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo">Description</h5>
                            </div>
                            <div className="col-md-1">
                                <h5 className="cardInfo">:</h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="cardInfo"><p>{description}</p></h5>
                            </div>
                        </div> */}
                    </div>
                </div>
                </div>
                );
    }

                let info;
                console.log(role[0])
                if (role[0] === 'User') {
                    info = (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="card">
                                        <ProfileInfo />
                                        <hr className="sidebar-divider" />
                                        <div className="text-center mb-2">
                                            <Link to="/userLog">
                                                <button className="btn btn-primary">Close</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    )
                }
                if (role[0] === 'Lawyer') {
                    info = (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <div className="card">
                                    <div className="row">
                                    <div className="col-md-6">
                                    <ProfileInfo />
                                    </div>
                                    <div className="col-md-6">
                                    <LawyerInfo />
                                    </div>       
                                    </div> 
                                    <div className="row">
                            
                            <h5 className="cardInfo text-center">Description</h5>
                       
                        
                       
                            <h5 className="cardInfo ms-2"><p>{description}</p></h5>
                        </div>                                     

                                        
                                        <div className="text-center mb-2">
                                            <Link to="/userLog">
                                                <button className="btn btn-primary">Close</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                    )
                }
                console.log(info)
                return info;
   
}
export default UserInfoForAdmin;