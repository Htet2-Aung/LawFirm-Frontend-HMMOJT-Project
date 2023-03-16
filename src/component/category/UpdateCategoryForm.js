import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectCategoryById, updateCategory } from "./categorySlices";
import categoryImg from "./category.jpg"

//for update
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../auth/authSlice";
function UpdateCategoryForm(props){

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
    const [addRequestStatus,setAddRequestStatus]= useState('idle')

    const onCategoryIdChange = e => setId(e.target.value);

    
    const onCategoryNameChange = e => setCategoryName(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);


    const canSave = [ categoryName,description].every(Boolean) && addRequestStatus === 'idle'
    const isEdit = props.mode === 'edit'

    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();

         
           if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log("In the can save")

                dispatch(

                    updateCategory({
                        category:{
                            id,
                            categoryName,
                            description

                        },token

                        

                    })
                ).unwrap();

                navigate('/category')
            }
            
            
             catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

       
            setId('')
        setCategoryName('')
        setDescription('')
           }
           console.log(canSave)
        
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
                                <h2 className="text-primary text-center mt-3">Update Category</h2>
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
                                                            onChange={onCategoryNameChange} />
                                                    </div>
                                                </div>
                                                <div className="col-12">

                                                    <textarea type="text"
                                                        className="form-control"
                                                        rows={10}
                                                        name="conDescription"
                                                        placeholder="Contract Description" data-target="#time" data-toggle="datetimepicker"
                                                        value={description}
                                                        onChange={onDescriptionChange} />

                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100 py-3" type="submit">Update Category</button>
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
export default UpdateCategoryForm