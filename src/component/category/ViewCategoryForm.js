import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectCategoryById, updateCategory } from "./categorySlices";
import categoryImg from "./category.jpg"

//for update
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../auth/authSlice";
function ViewCategoryForm(props){

    const navigate=useNavigate();
    const token=useSelector(getToken)

    const { categoryId } = useParams( )
    const category = useSelector((state)=>selectCategoryById(state,Number(categoryId))) 
    console.log(categoryId)
    console.log(category)
    //New
    const [id,setId] = useState(category?.id);
    

    const [categoryName,setCategoryName] = useState(category?.categoryName);
    const [description,setDescription] = useState(category?.description);
   

    

    const onSubmit = (event)=>{
        

                navigate('/category')
            
        
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
                                <h2 className="text-primary text-center mt-3">Category Information</h2>
                                    <div className="col-lg-5 d-none d-lg-block"><img src={categoryImg} className="w-100" /></div>
                                    <div className="col-lg-7 pr-5">
                                        <form onSubmit={onSubmit}>
                                            <div className="row g-3">

                                                <div className="col-12 ">
                                                    <div className="date" id="date" data-target-input="nearest">
                                                        <input type="text"
                                                            name="contractDate"
                                                            className="form-control"
                                                            placeholder="Category Name" data-target="#date" data-toggle="datetimepicker"
                                                            value={categoryName}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="col-12">

                                                    <textarea type="text"
                                                        className="form-control"
                                                        rows={10}
                                                        name="conDescription"
                                                        placeholder="Contract Description" data-target="#time" data-toggle="datetimepicker"
                                                        value={description}
                                                       />

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
export default ViewCategoryForm