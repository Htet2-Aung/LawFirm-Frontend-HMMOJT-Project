function ViewInqueryForm(props) {

    


    
    return (            
                                <div>
                                <center><h3 > User Inquery Detil Information</h3></center>
                                    
                                    <div className="row my-3">
                                        <div><label>Inquery Description</label></div>
                                        <div><p>{props.description}</p></div>
                                    </div>
                                    


                                </div>


                            
    );
}
export default ViewInqueryForm;