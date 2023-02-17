
import ContractList from "./ContractList";



function ContractTable(){
    return(
        <div class="container">
            <table id="example" class="table table-striped">
            <thead class="table-success">
                <tr class="table-primary text-dark text-center">
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