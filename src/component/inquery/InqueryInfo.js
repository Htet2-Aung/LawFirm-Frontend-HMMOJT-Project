import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getToken, getUser } from "../auth/authSlice";
import { fetchUser, selectAllUser, selectUserByEmail } from "../user/usersSlice";
import { selectInqueryById, selectInqueryByUsername } from "./inquerySlice";
import inqueryImage from "./inqueryInfo.jpg"


function InqueryInfo(props) {

    const loginUser = useSelector(getUser)
    console.log(loginUser.role)

    const user = useSelector(selectAllUser)

    const navigate = useNavigate()

    const { inqueryId } = useParams()
    const inquery = useSelector((state) => selectInqueryById(state, Number(inqueryId)))

    console.log("Inquery with User " + inquery)
    console.log("Inquery with User Id" + inquery.users.id)
    console.log("Inquery with User with username" + inquery.users.username+ inquery.users.accountName)



    const [id, setId] = useState(inquery.id);

    const token = useSelector(getToken)
    console.log("Token is :" + token)

    console.log("In the inquiry Information" + inquery)
    // console.log(inquery.user.id)
    const [username] = useState(inquery.username)
    const [lawyerName] = useState(inquery.lawyerName);
    const phoneNo = useState(inquery.phoneNo)
    const description = useState(inquery.description);
    const addRequestStatus = useState('idle')

  
    const lawyer = useSelector((state) => selectUserByEmail(state, String(lawyerName)))
    console.log("Lawyer Email with user: " + lawyer)

    console.log("User Email: " + username)
    const inquser = useSelector((state) => selectInqueryByUsername(state,username))
    console.log("In the Inquery info with selectby username: "+inquser)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    console.log("Lawyer Name with email: " + lawyer)

    let content;
    if(loginUser.role === 'Lawyer'){
        content = (<InqueryLawyer/>)
     }else{
        content = (<InqueryUser/>)
      }
    function InqueryUser(){
        return(
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-title inqImg">
                        <img src={inqueryImage} className="w-100" />
                       
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="row">

                                    <h5 className="cardInfo text-center">Description</h5>
                                    <p className="cardInfo ">{description}</p>

                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row  mt-5">
                        <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">User Name</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.accountName}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Phone No</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{phoneNo}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Email</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.username}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Address</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.address}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Gender</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.gender}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">NRC</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.nrc}</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Lawyer Name</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{lawyer.accountName}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Phone No</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{lawyer.phoneNo}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Email</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{lawyer.username}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Address</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{lawyer.address}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Gender</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{lawyer.gender}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">NRC</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{lawyer.nrc}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Status</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{lawyer.statuss}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Field</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{lawyer.field}</h5>
                            </div>
                        </div>
                        
                        </div>
                        </div>
                        

                    </div>
                    <hr className="sidebar-divider" />
                            <div className="text-center mb-2">
                                <Link to="/inquery">
                                    <button className="btn btn-primary">Close</button>
                                </Link>
                            </div>

                </div>
            </div>
            <div className="col-md-2"></div>
        </div>

        );
       
    }

    function InqueryLawyer(){
        return(
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-title inqImg">
                        <img src={inqueryImage} className="w-100" />
                       
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="row">

                                    <h5 className="cardInfo text-center">Description</h5>
                                    <p className="cardInfo ">{description}</p>

                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row  mt-5">
                        <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">User Name</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.accountName}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Phone No</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{phoneNo}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Email</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.username}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Address</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.address}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Gender</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.gender}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">NRC</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{inquery.users.nrc}</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Lawyer Name</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{loginUser.accountName}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Phone No</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{loginUser.phoneNo}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Email</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{loginUser.username}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Address</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{loginUser.address}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Gender</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{loginUser.gender}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">NRC</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{loginUser.nrc}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Status</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{loginUser.statuss}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="cardInfo ">Field</h5>
                            </div>
                            <div className="col-md-1">:</div>
                            <div className="col-md-6">
                                <h5 className="cardInfo ">{loginUser.field}</h5>
                            </div>
                        </div>
                        
                        </div>
                        </div>
                        

                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>

        );
        
    } 
       
     
      return content;
    
}
export default InqueryInfo;