import { TwitterOutlined,FacebookFilled,DribbbleOutlined,InstagramOutlined,YoutubeFilled  } from '@ant-design/icons';
function Footer() {
  return (
      <footer class="bg-dark text-inverse" style={{color:"white"}}>
            <div class="container pt-20 pt-lg-21 pb-7">
                <div class="row gy-6 gy-lg-0">
                    <div class="col-lg-4">
                        <div class="widget">
                            <h3 class="h2 mb-3 text-white">Join the Community</h3>
                            <p class="lead mb-5">Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
                            <a href="" class="btn btn-light  rounded-pill"  style={{background:"white",padding:"10px 18px",fontSize:"20px",marginBottom:"10px"}}>Join Us</a> 
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2 col-xm-1">
                        <div class="widget">
                            <h4 class="widget-title text-white mb-3">Need Help?</h4>
                            <ul class="list-unstyled text-reset mb-0">
                            <li> className="footer_link" Support</li>
                            <li> className="footer_link" Get Started</li>
                            <li> className="footer_link" Terms of Use</li>
                            <li> className="footer_link" Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2 col-xs-1">
                        <div class="widget">
                            <h4 class="widget-title text-white mb-3">Learn More</h4>
                            <ul class="list-unstyled  mb-0">
                            <li> className="footer_link" About Us</li>
                            <li> className="footer_link" Our Story</li>
                            <li> className="footer_link" Projects</li>
                            <li> className="footer_link" Pricing</li>
                            <li> className="footer_link" Features</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2">
                        <div class="widget">
                            <h4 class="widget-title text-white mb-3">Get in Touch</h4>
                            <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
                            <a href="" className="footer_link">info@email.com<br/> +00 (123) 456 78 90</a>  
                        </div>
                    </div>
                </div>
                <hr className="my-14 my-md-16" style={{margin:"9% 0px 3rem"}}/>
                <div class="d-md-flex align-items-center justify-content-between">
                    <p class="mb-2 mb-lg-0">© 2021 Sandbox. All rights reserved.</p>
                    <nav class="nav social social-white text-md-end">
                         className="footer_link" style={{marginRight:"10px",fontSize:"22px"}}<TwitterOutlined />
                         className="footer_link" style={{marginRight:"10px",fontSize:"22px"}}<FacebookFilled />
                         className="footer_link" style={{marginRight:"10px",fontSize:"22px"}}<DribbbleOutlined />
                         className="footer_link" style={{marginRight:"10px",fontSize:"22px"}}<InstagramOutlined />
                         className="footer_link" style={{fontSize:"22px"}}<YoutubeFilled />
                    </nav>
                </div>
            </div>
         </footer>
  );
}

export default Footer;
