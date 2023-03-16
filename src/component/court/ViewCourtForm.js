import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCourtById, addNewCourt } from "./courtSlices";
import courtImg from "./courtImg.jpg"

//for update
import { useNavigate, useParams } from "react-router-dom";
function ViewCourtForm(props) {
    const navigate=useNavigate();

    const { courtId } = useParams()
    const court = useSelector((state) => selectCourtById(state, Number(courtId)))
    console.log(courtId)
    console.log(court)
    //New
    const [id, setId] = useState(court?.id);


    const [courtName, setCourtName] = useState(court?.courtName);
    const [address, setAddress] = useState(court?.address);
    const [township, setTownship] = useState(court?.township);
    const [city, setCity] = useState(court?.city);
 
 

    const onSubmit = (event) => {
        navigate("/court")

    }
    return (

        <div class="contact">
            <div class="container">
                <div>

                </div>

                <div className="row">

                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="contact card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <h2 className="text-primary text-center mt-3">Court Information</h2>
                                    <div className="col-lg-5 d-none d-lg-block"><img src={courtImg} className="w-100" /></div>
                                    <div className="col-lg-7 pr-5">
                                        <form onSubmit={onSubmit}>
                                            <div className="row g-3">

                                                <div className="col-12 ">
                                                    <div className="date" id="date" data-target-input="nearest">
                                                        <input type="text"
                                                            name="contractDate"
                                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                            placeholder="Court Name" data-target="#date" data-toggle="datetimepicker"
                                                            value={courtName}
                                                           />
                                                    </div>
                                                </div>

                                                <div className="col-12 ">
                                                    <div className="date" id="date" data-target-input="nearest">
                                                        <input type="text"
                                                            name="contractDate"
                                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                            placeholder="Address" data-target="#date" data-toggle="datetimepicker"
                                                            value={address}
                                                            />
                                                    </div>
                                                </div>

                                                <div className="col-12 ">
                                                    <div className="date" id="date" data-target-input="nearest">
                                                        <input type="text"
                                                            name="contractDate"
                                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                            placeholder="Township " data-target="#date" data-toggle="datetimepicker"
                                                            value={township}
                                                             />
                                                    </div>
                                                </div>

                                                <div className="col-12 ">
                                                    <div className="date" id="date" data-target-input="nearest">
                                                        <input type="text"
                                                            name="contractDate"
                                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                            placeholder="City " data-target="#date" data-toggle="datetimepicker"
                                                            value={city}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100 py-3" type="submit">Close</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="col-md-2"></div>

                </div>



            </div>
        </div>



    );

}
export default ViewCourtForm