import InqueryList from "../inquery/InqueryList";

function InqTable() {
    
    
    return (

        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.."/>
                    
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="myTable" width="100%" cellspacing="0">
                            <thead>
                                <tr class="header">
                                    <th>No</th>
                                    <th>Lawyer Name</th>
                                    <th>Phone No</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {/* <tfoot>
                                <tr>
                                    <th>No</th>
                                    <th>Phone No</th>
                                    <th>Lawyer Name</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot> */}
                            <tbody >
                                <InqueryList/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
       

    );
}
export default InqTable;