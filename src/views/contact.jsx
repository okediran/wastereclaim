import { Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="Contact" style={{paddingBottom:"15rem"}}>
         <section className="head">
            <Container>
                <p className="d-flex"><Link to="/" className="head-link">HOME</Link> / <p style={{marginLeft:"5px"}}>CONTACT US</p></p>
                <h1>Contact Us</h1>
            </Container>
        </section>
        <section>
            <div class="container text-center">
				<h1>Get in touch</h1>
				<p style={{fontSize:"20px"}}>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
			</div>
        </section>
        <section>
            <div class="container mt-5">
                <div class="card-body" style={{padding:"1rem 0rem"}}>
                    <div class="row">
                        <div class="col-md-6">
                            <form style={{paddingTop:"30px"}}>
                                <div class="form-group">
                                    <h3>Our Location</h3>
                                    <p>Unit 6 and 7 Deva Industrial Park, Factory Rd, Sandycroft, Deeside CH5 2QJ</p>
                                </div>
                                <div class="form-group">
                                    <h3>Email Address</h3>
                                    <p>hello@recyclan.com</p>
                                </div>
                                <div class="form-group">
                                    <h3>Urgent Call</h3>
                                    <p>+447447900445</p>
                                </div>
                                <div class="form-group">
                                    <h4>Send Us Message</h4>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 contact-pd">
                            <form>
                                <h4>Please note: all fields are required.</h4>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name"/>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="example@gmail.com"/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your  Message Subject"/>
                                </div>
                                <div class="form-group">
                                    <textarea placeholder="" id=""  rows="7" class="form-control" placeholder="Your Message Here"></textarea>
                                </div>
                                    <span>
                                        <a className="btn btn-primary rounded-pill last-btn" style={{background:"rgba(19, 131, 19, 0.8)",border:"none",padding:"19px 50px",marginTop:"40px"}}>
                                            Send Message
                                        </a>
                                    </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    </div>
  );
}

export default Contact;
