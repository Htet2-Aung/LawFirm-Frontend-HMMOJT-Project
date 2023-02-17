import InqueryList from "../inquery/InqueryList";

function InqTable() {
    return (

        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>        
                    
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
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
                            <tbody>
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