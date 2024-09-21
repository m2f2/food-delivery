import { assets } from '../../assets/assets';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className='footer-content'>
          <div className='footer-content-left'>
                    <h2 className='logo'>TA3M ZAMAN</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula mi, tristique quis lacus at, blandit elementum nunc. Vivamus nibh ex, pharetra quis ultrices in, suscipit vitae augue. Aenean lobortis convallis dolor, vel egestas nisl scelerisque et. Nulla placerat condimentum porttitor. Nam sit amet orci risus.</p>
                    <div className='footer-social-icon'>
                              <img src={assets.facebook_icon} alt='Facebook'/>
                              <img src={assets.linkedin_icon} alt='LinkedIn'/>
                              <img src={assets.twitter_icon} alt='twitter'/>
                    </div>
          </div>
          <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                              <li>Home</li>
                              <li>About US</li>
                              <li>Delivery</li>
                              <li>Privacy Policy</li>
                    </ul>
          </div>
          <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                              <li>+2-112-299-5531</li>
                              <li>ta3mzaman@gmail.com</li>
                    </ul>
          </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 © ta3mzaman.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
