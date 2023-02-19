import CaseList from "./CaseList";



function caseTable(){
    return(
        <div className="container">
            <table id="example" className="table table-striped">
            <thead className="table-success">
                <tr className="table-primary text-dark text-center">
                    <th>Case Id</th>
                    <th>Case Title</th>
                    <th>Attendent</th>
                    <th>Case Status</th>
                    <th>Case Description</th>
                    <th>Case Start Date<br/> and Time</th>
                    <th>Case End Date<br/> and Time</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                <CaseList/>
            </tbody>
            </table>
            

        </div>
        
    );

    
               
 
}


export default caseTable;