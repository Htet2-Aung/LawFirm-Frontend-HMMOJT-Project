import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectCategoryById, updateCategory } from "./categorySlices";

//for update
import { useParams } from "react-router-dom";
function UpdateCategoryForm(props){

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
                    //isEdit?
                    updateCategory({
                        id,
                        categoryName,
                        description

                    }),
                )
            }
            
                //     addNewCategory({
                //         id,
                //         categoryName,
                //         description
        
                // }),
                    // ).unwrap();
                
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
   
        <div className="bg-light container-fluid py-7">

        <div className="container">
            <div className="row gx-5">
            <div className="col-lg-3 mb-5 mb-lg-0">
                    </div>

        <div className="col-lg-6 mb-5 mb-lg-0" >
       
      
            <h1 className="text-primary text-center mb-4">Update Category Form</h1>
            <div className="b-light text-center rounded p-5">

                <form onSubmit={ onSubmit }>
                
                    <div className="row g-3">
                    <div className="col-12 ">

                    
                    <div className="Date" id="date" data-target-input="nearest">
                                <input type="text"
                                    className="form-control text-primary bg-white border-0 datetimepicker-input"
                                    name="appointmentId"
                                    placeholder="Id" data-target="#date" data-toggle="datetimepicker" 
                                        value={id}
                                        onChange = {onCategoryIdChange}
                                        disabled
                                    />
                            </div>
                        
                    
                            <div className="Date" id="date" data-target-input="nearest">
                                <input type="text"
                                    className="form-control text-primary bg-white border-0 datetimepicker-input"
                                    name="appointmentId"
                                    placeholder="Category Name" data-target="#date" data-toggle="datetimepicker" 
                                        value={categoryName}
                                        onChange = {onCategoryNameChange}
                                        disabled 
                                    />
                            </div>
                        
                        <div className="col-12">

                            <textarea type="text"
                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                rows={10}
                               
                                placeholder="Description" data-target="#time" data-toggle="datetimepicker"
                                value={description}
                                onChange = {onDescriptionChange} />
                        </div><br/>
                      
                        <div className="col-12">
                             <button 
                                type="submit" 
                                className="btn btn-primary w-100 py-3" 
                                disabled={!canSave}
                                value={isEdit?'Update':'Save'} >Submit
                                </button>

                        </div>
                    </div>
                    </div>
                </form>
            </div>
            </div>
           

           </div>

        </div>
        </div>
        
        
);

}
export default UpdateCategoryForm