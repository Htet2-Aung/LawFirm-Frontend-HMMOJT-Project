import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addNewCategory,selectCategoryById, updateCategory } from "./categorySlices";

//for update
import { useParams } from "react-router-dom";


function AddCategoryForm(props){
   
    const [categoryName,setCategoryName] = useState('');
    const [description,setDescription] = useState('');
    const [addRequestStatus,setAddRequestStatus]= useState('idle')

    const onCategoryNameChange = e => setCategoryName(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);

    const canSave = [ categoryName,description].every(Boolean) && addRequestStatus === 'idle'
    //const isEdit = props.mode === 'edit'

    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();

         
           if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log("In the can save")

                dispatch(
                    
                    addNewCategory({
                        
                        categoryName,
                        description
        
                }),
                    ).unwrap();

             
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

       
           // setId('')
        setCategoryName('')
        setDescription('')
           }
           console.log(canSave)
        
        }
       
  
    return (

           <div className="container-fluid py-5">

            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 mb-5 mb-lg-0">
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">

                        <h1 className="text-primary text-center mb-4">Create Category</h1>
                        <div className="b-primary text-center rounded p-5">

                            <form onSubmit={ onSubmit }>
                                <div className="row g-3">
                                    
                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                 className="form-control text-danger border-0 datetimepicker-input"
                                                placeholder="Category Name" data-target="#date" data-toggle="datetimepicker"
                                                value={categoryName}
                                        onChange = {onCategoryNameChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">

                                        <textarea type="text"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            rows={10}
                                            name="conDescription"
                                            placeholder="Contract Description" data-target="#time" data-toggle="datetimepicker"
                                            value={description}
                                            onChange = {onDescriptionChange} />

                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
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

export default AddCategoryForm;
