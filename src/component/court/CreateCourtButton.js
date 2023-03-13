import React from "react";
import { Link } from "react-router-dom";

function CreateCourtButton(){

    return (
        
        <React.Fragment>
        
             <Link to='/court/create' className="btn btn-lg btn-info">
                        Create Court
             </Link>
             
        </React.Fragment>
    );
}

export default CreateCourtButton;