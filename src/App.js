import mic from './assets/images/mic.png';
import plane from './assets/images/plane.png';
import power from './assets/images/power-supply 1.png';
import satelite from './assets/images/satellite-dish.png';
import europe from './assets/images/europe.png';
import london from './assets/images/london.jpg';
import rome from './assets/images/rome.png';
import drive from './assets/images/drive.png';
import grid from './assets/images/grid.png';
import walk from './assets/images/walk.png';
import navigation from './assets/images/navigation 1.png'
import travelerGirl from './assets/images/traveler-girl.png'
import woman from './assets/images/woman.jpg'
import send from './assets/images/send.png'
import mosque from './assets/images/mosque.png';
import leaf from './assets/images/LEAF.png'
import map from './assets/images/map icon.png'
import heart from './assets/images/heart.png'
import building from './assets/images/building 1.png'
import customer1 from './assets/images/customer1.png'
import partner1 from './assets/images/partner (1).png'
import partner2 from './assets/images/partner (2).png'
import partner3 from './assets/images/partner (3).png'
import partner4 from './assets/images/partner (4).png'
import partner5 from './assets/images/partner (5).png'
import placeholderMail from './assets/images/placeholder-mail.png'
import facebook from './assets/images/facebook.png'
import instagram from './assets/images/instagram.png'
import twitter from './assets/images/twitter.png'
import playstore from './assets/images/Play Store.png'
import googleplay from './assets/images/Google Play.png'
import dropdown from './assets/images/dropdown.png'
import play from './assets/images/playbutton.png'


import './App.css';

function App() {
  return (
    <div className="App">
      <div id="container">
        <div className='right-curtain'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#DF6951" d="M31.1,-59C39.7,-48.9,45.7,-39.4,53.8,-29.7C62,-19.9,72.2,-10,76.3,2.4C80.4,14.7,78.3,29.3,69.3,37.7C60.4,46,44.6,48,32,51.6C19.3,55.2,9.6,60.3,0.1,60C-9.3,59.8,-18.7,54.1,-30.2,49.9C-41.8,45.7,-55.6,42.9,-59.6,34.8C-63.7,26.7,-58,13.4,-56.5,0.8C-55.1,-11.7,-57.8,-23.3,-53.5,-30.9C-49.2,-38.5,-37.7,-42.1,-27.6,-51.3C-17.5,-60.5,-8.8,-75.4,1.2,-77.5C11.3,-79.7,22.5,-69.1,31.1,-59Z" transform="translate(100 100)" />
</svg>
        </div>
      <header className="App-header">
        <nav>
          <ul>
            <li className='logo'>Tra<span className='logo-v'>v</span>ela</li>
            <li>Destinations</li>
            <li>Hotels</li>
            <li>Flight</li>
            <li>Bookings</li>
            <li>Login</li>
            <li>Sign up</li>
            <li>EN <img src={dropdown} alt="" /></li>
          </ul>
        </nav>
      </header>
      <section id='hero-section'>
          <div id='hero-text'>
            <p className='caption'>BEST DESTINATIONS AROUND THE WORLD</p>
          <h1>Travel, <span className='enjoy'>enjoy</span> 
            <br />
            and live a new
            <br />
            and full life
          </h1>
          <p className='description'>Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.</p>
          <div className='cta'>
          <button className='find-more-button'>Find out more</button>
          <button className='play-demo-button'>play</button>
          <p className='play-demo-text'>Play Demo</p>
          </div>
        </div>
        <div id='hero-image'>
          <img src={travelerGirl} alt="Traveler Girl" />
        </div>
        </section>
        <section id='services'>
          <h4>CATEGORY</h4>
          <h2>We Offer Best Services</h2>
          <div id='services-box'>
            <div className="service">
              <img src={satelite} alt="" />
              <h3>Calculated Weather</h3>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div className="service">
              <img src={plane} alt="" />
              <h3>Best Flight</h3>
              <p>Engrossed listening. Park gate sell they west hard for the.</p>
            </div>
            <div className="service">
              <img src={mic} alt="" />
              <h3>Local Events</h3>
              <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
            </div>
            <div className="service">
              <img src={power} alt="" />
              <h3>Customization</h3>
              <p>We deliver outsourced aviation services for military customers</p>
            </div>
          </div>
        </section>
        <section id='destinations'>
          <h4>Top Selling</h4>
          <h2>Top Destinations</h2>
          <div id='destinations-box'>
            <div className="destination">
              <img src={rome} alt="" />
              <div className='location-box'>
                <div className='location'>Italy</div>
                <div className='amount'>$500</div>
              </div>
              <div className='days'>
                <img src={navigation} alt="Navigation" />
                <p>10 Days Trip</p>
              </div>
            </div>
            <div className="destination">
              <img src={london} alt="" />
              <div className='location-box'>
                <div className='location'>Italy</div>
                <div className='amount'>$500</div>
              </div>
              <div className='days'>
                <img src={navigation} alt="Navigation" />
                <p>10 Days Trip</p>
              </div>
            </div>
            <div className="destination">
              <img src={europe} alt="" />
              <div className='location-box'>
                <div className='location'>Italy</div>
                <div className='amount'>$500</div>
              </div>
              <div className='days'>
                <img src={navigation} alt="Navigation" />
                <p>10 Days Trip</p>
              </div>
            </div>
          </div>
        </section>
        <section id='booking'>
          <div className='booking-content'>
            <h4>Easy and Fast</h4>
            <h2>Book your next trip <br />in 3 easy steps</h2>
            <div className='booking-steps'>
              <div className='step-box'>
                <img src={grid} alt="" />
                <div className='content'>
                  <h5>Choose Destination</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </div>
              <div className='step-box'>
                <img src={walk} alt="" />
                <div className='content'>
                  <h5>Make Payment</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </div>
              <div className='step-box'>
                <img src={drive} alt="" />
                <div className='content'>
                  <h5>Reach Airport on Selected Date</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </div>
            </div>
          </div>
          <div className='booking-images'>
            <div className='status-card'>
              <img src={woman} alt="" />
              <h4>Trip to Greece</h4>
              <p>14-29 June | by Robbin joseph</p>
              <div className='action'>
                <img src={leaf} alt="" />
                <img src={map} alt="" />
                <img src={send} alt="" />
              </div>
              <div className='number-box'>
                <img src={building} alt="" />
                <div className='people'>24 people going</div>
                <img src={heart} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id='testimonials'>
          <div className='testimonial-content'>
            <h4>TESTIMONIALS</h4>
            <h2>What People Say <br />About Us</h2>

            <div className='circular-dots'>
              <div className="first circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className='testimonial-images'>
            <div className='testimony-card'>
              <img src={customer1} alt="customer1" />
              <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
              <h4>Matt Udahi</h4>
              <h6>Lahore, Pakistan</h6>
            </div>
          </div>
        </section>
        <section id='partners'>
          <div className="partners-box">
            <img src={partner1} alt="partner" />
            <img src={partner2} alt="partner" />
            <img src={partner3} alt="partner" className='on-hover' />
            <img src={partner4} alt="partner" />
            <img src={partner5} alt="partner" />
        </div>
        </section>
        <section id='subscribe'>
          <div className="subscribe-box">
            <h2>Subscribe to get information, latest news and other <br /> interesting offers about Tra<span className='logo-v'>v</span>ela</h2>
            <form action="">
              <img src={placeholderMail} alt="" />
              <input type="text" placeholder='Your Email' />
              <button>Subscribe</button>
            </form>
          </div>
        </section>
        <footer>
          <div id='footer'>
          <div className="brand">
            <h2>Tra<span className='logo-v'>v</span>ela.</h2>
            <p>Book your trip in minute, get full <br /> Control for much longer.</p>
        </div>
          <div className="footer-stuff">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
        </div>
          <div className="footer-stuff">
            <h3>Contact</h3>
            <ul>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
        </div>
          <div className="footer-stuff">
            <h3>More</h3>
            <ul>
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
        </div>
            <div className="socials">
              <div className='social-icons'>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
              </div>
              <div className='discover'>Discover our app</div>
              <div className='playstore-icons'>
                <img src={googleplay} alt="" />
                <img src={playstore} alt="" />
              </div>
            </div>
          </div>
          <div id='copyright'>
            <p>All rights reserved@travela.co</p>
          </div>
        </footer>
        </div>
    </div>
  );
}

export default App;