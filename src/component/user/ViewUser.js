


function ViewUser(props) {

    


    
    return (            
        <div>
            <center><h4 > {props.role}</h4></center>
            <div className="row">

                <div className="row">
                <div className="col-md-5"><label>Name</label></div>
                <div className="col-md-1">:</div>
                <div className="col-md-6"><label>{props.firstName}{props.middleName}{props.lastName}</label></div>
                </div>
                <div className="row">
                <div className="col-md-5"><label>Genger</label></div>
                <div className="col-md-1">:</div>
                <div className="col-md-6"><label>{props.gender}</label></div>
                </div>
                <div className="row">
                <div className="col-md-5"><label>NRC</label></div>
                <div className="col-md-1">:</div>
                <div className="col-md-6"><label>{props.nrc}</label></div>
                </div>
                <div className="row">
                <div className="col-md-5"><label>Phone No.</label></div>
                <div className="col-md-1">:</div>
                <div className="col-md-6"><label>{props.phoneNo}</label></div>
                </div>
                <div className="row">
                <div className="col-md-5"><label>Address</label></div>
                <div className="col-md-1">:</div>
                <div className="col-md-6"><label>{props.address}</label></div>
                </div>
            </div>
        </div>

                            
    );
}
export default ViewUser;