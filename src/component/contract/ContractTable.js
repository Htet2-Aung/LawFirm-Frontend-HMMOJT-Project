
import ContractList from "./ContractList";



function ContractTable(){
    return(
        <div className="container">
            <table id="example" className="table table-striped">
            <thead className="table-success">
                <tr className="table-primary text-dark text-center">
                    <th>Contract Id</th>
                    <th>Contract Description</th>
                    <th>Contract Date</th>                    
                    <th>Case Create</th>                    
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                <ContractList/>
            </tbody>
            </table>
            

        </div>
        
    );

    
               
 
}


export default ContractTable;