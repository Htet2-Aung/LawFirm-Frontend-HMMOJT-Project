
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
    return (



        <div className="container-fluid sticky-top bg-white shadow-sm">
            <div className="container">
            
            <Nav defaultActiveKey="/home" className="flex-column">
           
            <hr className="sidebar-divider"/>
      <Nav.Link href="/userLog">Users</Nav.Link>
      <hr className="sidebar-divider"/>
      <Nav.Link href="/inquery">Inquiry</Nav.Link>
      <hr className="sidebar-divider"/>
      <Nav.Link href="/appointment">Appointment</Nav.Link>
      <hr className="sidebar-divider"/>
      <Nav.Link href="/contract">Contract</Nav.Link>
      <hr className="sidebar-divider"/>
      <Nav.Link href="/case" >
       Case
      </Nav.Link>
      <hr className="sidebar-divider"/>
      <Nav.Link href="/user" >
       Logout
      </Nav.Link>
    </Nav>

                   
                
            </div>
        </div>


    );
}
export default NavigationBar;