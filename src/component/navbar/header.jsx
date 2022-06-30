import { Navbar,Container,Nav } from 'react-bootstrap';
import logoDark from "../../assess/image/reclaim-05.png";
import { Link } from "react-router-dom";
import {useState } from 'react';
function Header() {

    const [scroll,setscroll] = useState(true);

   const handleNav = () => {
        if (window.scrollY >= 150) {
            setscroll(false)
        } else {
            setscroll(true)
        }
   };

    

   window.addEventListener('scroll', handleNav);

    return (
        <div className = {scroll ? 'Header' : 'changeHeader'}>
            <Navbar className='navbar1 navbar-expand-lg' expand="lg">
                <Container>
                    <Navbar.Brand href="/" style={{flex:"12"}}>
                        <img src={logoDark} style={{width:"70px"}} alt=''/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='nav'>
                        <Nav.Link><Link className='navlink' to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className='navlink' to="/service">Services</Link></Nav.Link> 
                        <Nav.Link><Link className='navlink' to="">Projects</Link></Nav.Link>             
                        <Nav.Link><Link className='navlink' to="/about">About</Link></Nav.Link> 
                        <Nav.Link><Link className='navlink' to="/team">Team</Link></Nav.Link>             
                        <Nav.Link><Link className='navlink' to="/contact">Contact</Link></Nav.Link>             
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    );
  }
  
  export default Header;
  