import React from "react"
import "./testimonials.css"

const Testimonials = () => {
  return (
    <>
      <div className='app'>
        <div className='testimonial-section'>
          <div className='testimonial-header'>
            <h2>TESTIMONIALS</h2>
            <button className='testimonial-button'>
              <span className='button-icon'>↗</span>
              ALL TESTIMONIALS
            </button>
          </div>

          <div className='testimonial-grid'>
            <div className='testimonial-card'>
              <div>
                <div className='testimonial-title'>NEXGEN TURNED OUR BUSINESS AROUND!</div>
                <div className='testimonial-desc'>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</div>
              </div>
              <div className='testimonial-footer'>
                <img src='img3.png' alt='Sarah Thompson' />
                <div className='testimonial-info'>
                  <div className='testimonial-name'>Sarah Thompson</div>
                  <div className='testimonial-role'>CEO of BlueBloom</div>
                </div>
                <button className='testimonial-arrow'>→</button>
              </div>
            </div>

            <div className='testimonial-card'>
              <div>
                <div className='testimonial-title'>NEXGEN TURNED OUR BUSINESS AROUND!</div>
                <div className='testimonial-desc'>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</div>
              </div>
              <div className='testimonial-footer'>
                <img src='img3.png' alt='Wade Warren' />
                <div className='testimonial-info'>
                  <div className='testimonial-name'>Wade Warren</div>
                  <div className='testimonial-role'>Art Director</div>
                </div>
                <button className='testimonial-arrow'>→</button>
              </div>
            </div>

            <div className='testimonial-card'>
              <div>
                <div className='testimonial-title'>WORKING WITH NEXGEN WAS A PLEASURE.</div>
                <div className='testimonial-desc'>Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</div>
              </div>
              <div className='testimonial-footer'>
                <img src='img3.png' alt='Lisa Williams' />
                <div className='testimonial-info'>
                  <div className='testimonial-name'>Lisa Williams</div>
                  <div className='testimonial-role'>CEO of HealthTech</div>
                </div>
                <button className='testimonial-arrow'>→</button>
              </div>
            </div>

            <div className='testimonial-card'>
              <div>
                <div className='testimonial-title'>NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.</div>
                <div className='testimonial-desc'>Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.</div>
              </div>
              <div className='testimonial-footer'>
                <img src='img3.png' alt='Jennifer Lee' />
                <div className='testimonial-info'>
                  <div className='testimonial-name'>Jennifer Lee</div>
                  <div className='testimonial-role'>COO of Foodie Haven</div>
                </div>
                <button className='testimonial-arrow'>→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
