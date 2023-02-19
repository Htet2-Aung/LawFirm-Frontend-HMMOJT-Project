
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
    return (



        <div className="container-fluid sticky-top bg-white shadow-sm">
            <div className="container">
            
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/" className="navbar-brand">
                    <h3 className="m-0 text-uppercase text-primary">
                    <i className='fas fa-balance-scale' ></i>Lawyer Landing</h3>
            </Nav.Link>
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
      <Nav.Link href="/payment" >
       Payment
      </Nav.Link>
    </Nav>

                   
                
            </div>
        </div>


    );
}
export default NavigationBar;