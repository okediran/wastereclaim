import { Container, Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Mobile from "../assess/image/set-digital-devices-screen-mockup_53876-76505.png";
import OIP from "../assess/image/1-01.png";
import map from "../assess/image/map.png";
import trash from "../assess/image/Truck_8_B.png";
import svgimg from "../assess/image/after_banner_backdrop.523f49e.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake,faRecycle,faSchool,faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'antd';
function Home() {

    return (
      <div className="Home">
        <section className="banner">
          <Container>  
            <h1>
              Changing Lives <br /> Through Recycling.
            </h1>
            <h5 style={{color:"white",marginBottom:"30px"}} >
                HELLO! THIS IS THE WASTE RECLAIM COMPANY
            </h5>
            <span><Link className="btn btn-lg btndark rounded-pill me-2" to="/about">About Us</Link></span>
            <span><Link className="btn btn-lg btnoutlinedark rounded-pill" to="/contact">Contact Us</Link></span>
           </Container>   
        </section>
        <section className="service wrapper bg-gray">
          <Container>
              <Card className='shadow-none my-n15 my-lg-n17'>
                  <Card.Body className="card-body">
                    <div className='padding'>
                        <div className="row text-center" style={{marginBottom:"50px"}}>
                          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                            <h3 className="mb-9"style={{fontWeight:"700",opacity:".8"}}>IMPACT</h3>
                          </div>
                        </div>
                        <div className="row gx-md-8 gx-xl-12 gy-8 mb-14 mb-md-16 text-center card1">
                          <div className="col-lg-3 col-md-6">
                          <div className='impact'>
                            <div className="icon btn btn-block btn-lg btn-soft-purple disabled mb-5"> 
                                <FontAwesomeIcon icon={faRecycle}/>
                              </div>
                              <h4 style={{colour:"#000000"}}>200 tons of <br/>
                                  plastics 
                                  recycles
                              </h4>
                          </div>
                          </div>
                          <div className="col-lg-3 col-md-6 coll" >
                            <div className='impact'>
                              <div className="icon btn btn-block btn-lg btn-soft-green disabled mb-5"> 
                                <FontAwesomeIcon icon={faBriefcase}/>
                              </div>
                              <h4 style={{colour:"#000000"}}>50 jobs <br/>
                                created
                                </h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 coll">
                            <div className='impact'>
                              <div className="icon btn btn-block btn-lg btn-soft-yellow disabled mb-5"> 
                                <FontAwesomeIcon icon={faSchool}/>
                              </div>
                              <h4 style={{colour:"#000000"}}>200 student <br/>
                                reached</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 coll">
                            <div className='impact'>
                              <div className="icon btn btn-block btn-lg btn-soft-blue disabled mb-5"> 
                                  <FontAwesomeIcon icon={faHandshake}/>
                                </div>
                                <h4 style={{colour:"#000000"}}>5 partner <br/>
                                  school</h4>
                            </div>
                          </div>
                        </div>
                        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center" style={{marginTop:"9%"}}>
                          <div className="col-md-12 col-lg-6 order-lg-2">
                            <figure className="rounded" style={{overflow:"hidden"}}>
                              <img src={trash} alt="trash"  style={{width:"35rem"}}/>
                            </figure>
                          </div>
                          <div className="col-lg-6 text" style={{fontSize:"20px"}}>
                            <h3>Recycling as a vechile for quality education through technology</h3>
                            <p> Having preserved over 2000 tons of plastics in the <br />
                                past two years, we are pioneering technology and fostering <br />
                                education in low income communication.</p>
                          </div>
                      </div>
                      <div className="row gy-10 gx-lg-8 gx-xl-12 mb-14 mb-md-16 align-items-center" style={{marginTop:"9%",background:`url(${svgimg})`}}>
                            <div className="col-md-12 col-lg-6">
                              <figure className="rounded" style={{overflow:"hidden"}}>
                                <img style={{width:"55%"}} src={OIP}  alt=""/>
                                </figure>
                            </div>
                            <div className="col-lg-6 text" style={{fontSize:"20px"}}>
                              <h3>Safe guarding the environment</h3>
                              <p>we are on our way to becoming Nigeria's largest <br/>
                            education consered recycling enterprise with 5 partner.</p>
                            </div>
                      </div>
                      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center" style={{marginTop:"9%"}}>
                          <div className="col-md-12 col-sm-12 col-lg-6 order-lg-2">
                            <figure className="rounded" style={{overflow:"hidden"}}>
                              <img src={Mobile} alt="" style={{width:"35rem"}}/>
                            </figure>
                          </div>
                          <div className="col-lg-6 text" style={{fontSize:"20px"}}>
                            <h3>Technonlogy based model of operation</h3>
                            <p>we ensure that technology is incoporated with then <br />
                              everyday recycling system with our technology based <br />
                              to education.</p>
                          </div>
                      </div>
                    </div>
                   <div className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map">
                      <div className="py-md-16 py-lg-18" style={{paddingTop: "5rem",paddingBottom:"3rem",overflow:"hidden"}}>
                        <div className="row">
                           <Carousel autoplay>
                              <div  className="col-xl-12 col-xxl-9 mx-auto img1">
                                  <h3 className="display-4 mb-8 px-lg-8 h3" style={{color:"white",fontSize:"60px"}}>SCRAP <br/> COMING SOON</h3>
                              </div>
                              <div className="col-xl-11 col-xxl-9 mx-auto img2">
                                  <h3 className="display-4 mb-8 px-lg-8 h3"  style={{color:"white",fontSize:"60px"}}>SCRAP <br/> COMING SOON</h3>
                               </div>
                              <div className="col-xl-11 col-xxl-9 mx-auto img3">
                                  <h3 className="display-4 mb-8 px-lg-8 h3"  style={{color:"white",fontSize:"60px"}}>SCRAP <br/> COMING SOON</h3>
                              </div>
                          </Carousel>
                        </div>
                      </div>
                   </div>
                   <div className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map last-pad" style={{backgroundImage:`url(${map})`,backgroundPosition:"center",backgroundSize:"cover",marginTop:"110px"}}>
                      <div className="container py-md-16 py-lg-18" style={{paddingTop: "5rem",paddingBottom:"5rem"}}>
                        <div className="row">
                          <div className="col-xl-11 col-xxl-9 mx-auto">
                            <h3 className="display-4 mb-8 px-lg-8 h3">By supporting our business you are ensuring that at least one child has access to education.</h3>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <span>
                            <button className="btn btn-primary rounded-pill last-btn" style={{background:"#343f52",border:"1px solid #343f52",padding:"18px 30px",marginTop:"20px"}}>
                              DOWNLOAD OUR FINANCIALS
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
              </Card>
          </Container>
        </section>
      </div>
    );
  }
  
  export default Home;
  