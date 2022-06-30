
import { Link } from "react-router-dom";
import { Container,Card } from 'react-bootstrap';
import logo from "../assess/image/reclaim-05.png";
import map from "../assess/image/map.png";
import trash from "../assess/image/ocg-saving-the-ocean-EPPS6W5LdXs-unsplash.jpg";


function Service() {

    return (
      <div className="Service">
        <section className="head">
            <Container>
                <p className=""><Link to="/" className="head-link">HOME</Link> / <span style={{marginLeft:"5px"}}>OUR SERVICE</span></p>
                <h1>Our Services</h1>
            </Container>
        </section>
        <section className="second-section" style={{marginBottom:"8rem"}} >
            <div className="row block">
                <div className="col-md-5">
                    <div className="shape"></div>
                    <img src={trash} alt="" />
                    <div className="shape2"></div>
                </div>
                <div className="col-md-7 col-sm-4 bg-dark text-left service-head" style={{padding:"80px 13rem 80px 18rem "}}>
                    <h1>Services</h1>
                    <p>The Waste Reclaim Commercial Pick-Up Program helps to reduce the waste from companies that end
                     up in landfills by providing a professional collection of recyclable waste. The program involves 
                     an annual charge to cover logistics and the associated costs of collection and processing of recyclable material.
                      In return, Wecyclers will provide the following</p>
                </div>
            </div>
        </section>
        <section style={{marginBottom:"8rem"}}>
           <div class="row text-center">
              <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                <h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
                <h3 class="display-4 mb-9" style={{fontWeight:"700"}} >The service we offer is specifically designed to meet your needs.</h3>
              </div>
            </div>
        </section>
        <section style={{marginBottom:"10rem"}}>
            <div className="container">
                <div class="row">
                    <div className="col-lg-4 col-md-12">
                <div className="shape3"></div>
                        <Card className="text-center">
                            <div style={{padding:"40px 10px"}}>
                                <img src={logo} style={{width:"80px", height:"60px"}} alt=""/>
                                <div className="detials">
                                    <h1>Collection</h1>     
                                    <p>We collect and pick bottles from the  ecosystem</p>     
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <Card className="text-center mt">
                            <div style={{padding:"40px  30px"}}>
                                <img src={logo} style={{width:"80px", height:"60px"}} alt=""/>
                                <div className="detials">
                                    <h1>Sorting</h1>     
                                    <p>We colour sort, remove labels and caps from recovered PET</p>     
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-12 mt">
                        <Card className="text-center">
                            <div style={{padding:"40px 30px"}}>
                                <img src={logo} style={{width:"80px", height:"60px"}} alt=""/>
                                <div className="detials">
                                    <h1>Aggregation & Compression</h1>     
                                    <p>We compress the bottles, making it efficient for transportation</p>     
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-12" style={{marginTop:"30px"}}>
                        <Card className="text-center">
                            <div className="" style={{padding:"40px 30px"}}>
                                <img src={logo} style={{width:"80px", height:"60px"}} alt=""/>
                                <div className="detials">
                                    <h1>Hot Wash</h1>     
                                    <p>We hot wash and sanitise plastic  flakes into EU food grade standard</p>     
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-12" style={{marginTop:"30px"}}>
                        <Card className="text-center">
                            <div style={{padding:"40px 30px"}}>
                                <img src={logo} style={{width:"80px", height:"60px"}} alt=""/>
                                <div className="detials">
                                    <h1>Flaking</h1>     
                                    <p>We turn the compressed plastic into flakes for further processing </p>     
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-12" style={{marginTop:"30px"}}>
                        <Card className="text-center">
                            <div style={{padding:"40px 30px"}}>
                                <img src={logo} style={{width:"80px", height:"60px",}} alt=""/>
                                <div className="detials">
                                    <h1>Package & Haul</h1>     
                                    <p>We package and truck the finished hot washed to desired location</p>     
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
		</section>
        <section style={{marginBottom:"13rem"}}>
            <div className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map" style={{backgroundImage:`url(${map})`,backgroundPosition:"center",backgroundSize:"cover",margin:"110px 4rem 0px"}}>
                <div className="container py-md-16 py-lg-18" style={{paddingTop: "5rem",paddingBottom:"5rem"}}>
                    <div className="row">
                        <div className="col-xl-11 col-xxl-9 mx-auto">
                            <h3 className="display-4 mb-8 px-lg-8 h3">By supporting our business you are ensuring that at least one child has access to education.</h3>
                        </div>
                     </div>
                     <div className=" justify-content-center">
                         <span>
                            <a className="btn btn-primary rounded-pill last-btn" style={{background:"#343f52",border:"1px solid #343f52",padding:"23px 30px",marginTop:"20px"}}>
                                 DOWNLOAD OUR FINANCIALS
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default Service;
  