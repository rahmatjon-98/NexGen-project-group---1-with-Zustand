import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className='footer-wrapper'>
        <div className='footer-content'>
          {/* Соцсети */}
          <div className='social-column'>
            <div className='social-box'>
              <span className='social-icon'>😁</span>
              <div className='social-title'>INSTAGRAM</div>
              <div className='social-desc'>Share visually appealing snippets of our latest web projects.</div>
              <button className='social-btn'>↗</button>
            </div>
            <div className='social-box'>
              <span className='social-icon'>😁</span>
              <div className='social-title'>TWITTER</div>
              <div className='social-desc'>Tweet about interesting coding challenges you've overcome.</div>
              <button className='social-btn'>↗</button>
            </div>
          </div>
          <div className='social-column'>
            <div className='social-box'>
              <span className='social-icon'>😁</span>
              <div className='social-title'>DRIBBBLE</div>
              <div className='social-desc'>Showcase design elements of our web projects.</div>
              <button className='social-btn'>↗</button>
            </div>
            <div className='social-box'>
              <span className='social-icon'>😁</span>
              <div className='social-title'>BEHANCE</div>
              <div className='social-desc'>Create detailed presentations for our projects.</div>
              <button className='social-btn'>↗</button>
            </div>
          </div>

          {/* Навигация */}
          <div className='nav-column'>
            <div className='nav-box'>
              <div className='nav-group'>
                <div className='nav-title'>Home</div>
                <ul>
                  <li>Why Us</li>
                  <li>About Us</li>
                  <li>Testimonials</li>
                  <li>FAQ's</li>
                </ul>
              </div>
              <div className='nav-group'>
                <div className='nav-title'>Services</div>
                <ul>
                  <li>Web Development</li>
                  <li>App Development</li>
                  <li>Web Design</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
              <div className='nav-group'>
                <div className='nav-title'>Projects</div>
                <ul>
                  <li>Klothink</li>
                  <li>Zenith</li>
                  <li>Novus</li>
                  <li>Apex</li>
                </ul>
              </div>
              <div className='nav-group'>
                <div className='nav-title'>Blogs</div>
                <ul>
                  <li>Business</li>
                  <li>
                    Design <span className='soon'>Soon</span>
                  </li>
                  <li>
                    Development <span className='soon'>Soon</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className='newsletter'>
              <div className='label'>NEWSLETTER</div>
              <div className='title'>SUBSCRIBE TO OUR NEWSLETTER</div>
              <input type='email' placeholder='Enter your email' />
              <button className='send-btn'>↗</button>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className='copyright'>
          <div>© 2024 NextGen. All rights reserved.</div>
          <div>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
