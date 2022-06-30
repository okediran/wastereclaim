import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import man1 from "../assess/image/004.jpg";
import man2 from "../assess/image/3389.jpg";
import man3 from "../assess/image/df.jpg";
import man4 from "../assess/image/happy-man_1368-1596.jpg";
import man5 from "../assess/image/sssmin.jpg";
import logo from "../assess/image/reclaim-05.png";


function Team() {
    return (
        <div className="Team" >
            <section className="head">
                <Container>
                    <p className="d-flex"><Link to="/" className="head-link">HOME</Link> / <p style={{ marginLeft: "5px" }}>OUR TEAM</p></p>
                    <h1>Our Team</h1>
                </Container>
            </section>
            <section className='body'>
                {/* <h1 className='text-center text-white mt-5'>Meet The Team</h1> */}
                <div className=''>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col'>
                            <div>
                                <div className='img-body'>
                                    <img src={man1} alt="" className='img' />
                                </div>
                                <div className='content-body'>
                                    <div className='content d-flex'>
                                        <div> <h5 className='text-white'>JOHN F.</h5>
                                            <p>Office Manager</p>
                                        </div>
                                        <img src={logo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col'>
                            <div>
                                
                            </div>
                            <div className='img-body'>
                                <img src={man2} alt="" className='img' />
                            </div>
                            <div className='content-body'>
                                <div className='content d-flex'>
                                    <div> <h5 className='text-white'>JOHN F.</h5>
                                        <p>Office Manager</p>
                                    </div>
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col'>
                            <div></div>
                            <div className='img-body'>
                                <img src={man3} alt="" className='img' />
                            </div>
                            <div className='content-body'>
                                <div className='content d-flex'>
                                    <div> <h5 className='text-white'>JOHN F.</h5>
                                        <p>Office Manager</p>
                                    </div>
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col'>
                            <div></div>
                            <div className='img-body'>
                                <img src={man4} alt="" className='img' />
                            </div>
                            <div className='content-body'>
                                <div className='content d-flex'>
                                    <div> <h5 className='text-white'>JOHN F.</h5>
                                        <p>Office Manager</p>
                                    </div>
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col'>
                            <div></div>
                            <div className='img-body'>
                                <img src={man5} alt="" className='img' />
                            </div>
                            <div className='content-body'>
                                <div className='content d-flex'>
                                    <div> <h5 className='text-white'>JOHN F.</h5>
                                        <p>Office Manager</p>
                                    </div>
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;
