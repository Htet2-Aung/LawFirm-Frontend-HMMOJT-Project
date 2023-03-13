import React from "react";
import { Link } from "react-router-dom";

function CreateCategoryButton(){

    return (
        
        <React.Fragment>
        
             <Link to='/category/create' className="btn btn-lg btn-info">
                        Create a Category
             </Link>
             
        </React.Fragment>
    );
}

export default CreateCategoryButton;