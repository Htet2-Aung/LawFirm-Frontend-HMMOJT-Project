import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "./categorySlices";
import AddCategoryForm from "./AddCategoryForm";


function CategoryItem(props){

    const dispatch = useDispatch()
    return(

        <tr>
        
           <td> {props.id}</td>
                
                <td>{props.categoryName}</td>
                <td>{props.description}</td>
                <td className="text-center">

                    <Link to={`/category/edit/${props.id}`}>
                    {/* <button className="btn btn-success mx-2">Update</button> */}
                    <i className="fa fa-edit pr-1 mx-2">Update</i>
                    </Link>
                    <Link>
                    <a onClick={()=>{dispatch(deleteCategory(props.id))}}>
                    <i className="fa fa-minus-circle pr-1 mx-2 text-danger ">Delete</i></a>  </Link>

                  <Link to={`/case/create/${props.id}`}>
                  <i className="fa fa-flag-checkered pr-1 mx-2">Case</i>   
                    {/* <button className="btn btn-success mx-2">Case</button> */}
                    </Link>
                   
                </td>
                
        </tr>
        
        
        
                // <div class="col-lg-4 col-md-6">
                //     <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                //         <div class="service-icon mb-4">
                //             <i class="fa  fa-user-md text-white"></i>
                //         </div>
                //       {/* <h4 class="mb-2">CategoryId : {props.id}</h4> */}
                //         <h5 class="mb-2">CategoryName :{props.categoryName}</h5>
                //         <p class="mb-2">Description : {props.description}</p>
                       
                //         <a class="btn btn-lg btn-primary rounded-pill" href="">
                //             <i class="bi bi-arrow-right"></i>
                //         </a>
                //         <div >  
                //         <Link to={`/category/edit/${props.id}`} >
                //         <button className="btn btn-success mx-3">Edit</button>
                //       </Link>
                //         <a onClick={()=>{dispatch(deleteCategory(props.id))}}>
                //         <button className="btn btn-danger">Delete</button></a></div>
                //     </div>
                // </div>
               
           
      
        );
        }
        
        export default CategoryItem;
    
 /*
    return (
       
        <div class="container mt-5">
		<table >
        
        
            <thead>
                <tr>
                <th>Category Name</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>   
                
            </thead>
            
            <tbody>
            <tr>
                    <td>{props.categoryName}</td>
                    <td>{props.description}</td>
</tr>
            </tbody>
        </table>
        </div>
       
    

      
        
      
    );
    */
   /*
    return (
        <div className="container">
        <div className="card card-body bg-light mb-3">
            <div className="row">
                <div className="col-2">
                    <span className="mx-auto">React</span>
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                    <h3>{props.categoryName}</h3>
                    <p>{props.description}</p>
                    
                </div>
                <div className="col-md-4 d-none d-lg-block">
                    <ul className="list-group">
                        
                       
                    </ul>
                    
                </div>
            </div>
        </div>
        
    </div>
    );
    
}
*/
