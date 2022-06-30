import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="About" style={{paddingBottom:"20rem"}}>
         <section className="head">
            <Container>
                <p className="d-flex"><Link to="/" className="head-link">HOME</Link> / <p style={{marginLeft:"5px"}}>ABOUT US</p></p>
                <h1>About Us</h1>
            </Container>
        </section>
        <section>
          <Container>
              <div class="row">
                <h1 style={{color:"#546074"}}>Our Story</h1>
                <div className='col-lg-6 story'>
                  <p>Wecyclers is a for-profit social enterprise that promotes environmental sustainability, socioeconomic development, and community health by providing convenient recycling services in densely populated urban neighborhoods. We give households a chance to generate value from their waste and provide a reliable supply of raw material to the local recycling industry. </p>
                  <p> Wecyclers addresses the challenge of urban waste. When we began in 2012, only 40% of the city’s waste was collected and only a mere 13% was recycled. </p>
                  <p> People living in slum conditions without formal waste collection are at risk of property damage; the spread of diseases such as malaria, cholera, and dysentery; and undue psychological stress. Improperly disposed trash tends to clog gutters and drainage canals leading to floods during rainfall. This trash can also create stagnant water pools that are ideal conditions for mosquitoes and other disease vectors to breed. Unmanaged trash heaps also create a burden for community residents who are forced to navigate obstructed roadways and deal with the smoke from frequent trash fires.</p>
                  <p> In addition, while Lagos is on track to become the third largest economy in Africa, 8.5% of its population is still poor and an additional 20% are vulnerable to poverty. Rapid population growth exacerbates this problem by ensuring that another four million residents will join to the already crowded megacity by 2020. </p>
                </div>
                <div className='col-lg-6'>
                  <div className='story-img'>
                  </div>
                </div>
              </div>
            </Container>
        </section>
        <section style={{marginTop:"8rem"}}>
          <Container>
              <div class="row">
                <div className='col-lg-12 story-img2'>
                  <div >
                    <h2>Join Us, Together We Can Create a Brighter and Cleaner Future!</h2>
                    <p>When it comes to recycling, everyone has a part to play. Working together, we can make sure recyclable materials don’t end up in our lakes and landfills. At Wecyclers® Corporation, we believe in the preservation of our Blue Planet™, a cleaner, safer and healthier world where people thrive—not just for today, but for generations to come.</p>
                  </div>
                </div>
              </div>
            </Container>
        </section >
        <section style={{marginTop:"8rem"}}>
             <Container>
              <div class="row">
                <div className='col-lg-6 mt-5'>
                   <div className='story-img3'>
                   </div>
                </div>
                <div className='col-md-8 col-lg-6 order-lg-2 story'>
                  <h1 style={{color:"#546074"}}>Our Solution</h1>
                  <p>Today, more of the waste is collected but a large portion consists of recyclable materials that we can recover to produce new goods more sustainably and reduce the flow of materials into landfills and into the natural environment.</p>
                  <p>Our solution is our rewards-for-recycling platform that incentivizes people in low-income communities to capture value from recyclable waste. We built this platform on a fleet of relatively cheap, and locally assembled, cargo bikes called “wecycles” that our collectors use to pick up recyclable waste from households and deliver the materials to our collection, sorting, and packaging hubs located around Lagos. As they give materials to us, we reward our service subscribers with points per kilogram of recycled waste, which they can exchange for essential goods such as food and household items.</p>
                  <p>As we have grown since our founding, we have incorporated motorized tricycles, vans, and trucks to expand our reach across the Lagos metropolis and enable us provide materials to manufacturers who turn the recyclable material into new items including tissue paper, stuffing for bedding materials, sturdy plastic furniture, aluminum sheets, and nylon bags.</p>
                  <p>In essence, we are building a low-cost waste management infrastructure using mobile tech and cargo bikes, and providing incentives for people to embrace the environmentally friendly habit of recycling their waste.</p>
                </div>
              </div>
            </Container>
       </section>
    </div>
  );
}

export default About;
