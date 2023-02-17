import React from "react";
import { Link } from "react-router-dom";

function CreateContractButton(){
    return (
        <React.Fragment>
             <Link to='/contract/create' className="btn btn-lg btn-info">
                        Make a Contract
             </Link>
        </React.Fragment>
    );
}

export default CreateContractButton;