import React from "react"
import "./projects.css"
import Testimonials from "../../components/testimonials/testimonials"
import Frequently from "../../components/frequently/frequently"
import Pink from "../../components/pink/pink"
import Footer from "../../components/footer/footer"

const Projects = () => {
  return (
    <>
      <div className='app-container'>
        <div className='card'>
          <div className='content-left'>
            <div className='heading-row'>
              <h1 className='main-heading'>EMPOWERING YOUR</h1>
              <button className='cta-button'>
                <span className='arrow-icon'>→</span>
                START A PROJECT
              </button>
            </div>
            <h1 className='main-heading'>DIGITAL VISION</h1>
            <p className='description'>At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.</p>
          </div>

          <div className='image-card'>
            <img src='img1.png' alt='Web development' className='card-image' />\
          </div>
        </div>
      </div>

      <div className='app2-container'>
        <div className='features-wrapper'>
          <div className='features-heading'>
            <h2>KEY FEATURES OF OUR PROJECTS</h2>
          </div>

          <div className='features-grid'>
            <div className='feature-card'>
              <div className='feature-icon'>😁</div>
              <div className='feature-title'>STRATEGIC PLANNING</div>
              <div className='feature-desc'>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives.</div>
            </div>

            <div className='feature-card'>
              <div className='feature-icon'>😁</div>
              <div className='feature-title'>CUSTOMIZED SOLUTIONS</div>
              <div className='feature-desc'>We believe in tailoring our services to suit each project's unique requirements, resulting in solutions.</div>
            </div>

            <div className='feature-card'>
              <div className='feature-icon'>😁</div>
              <div className='feature-title'>USER-CENTRIC APPROACH</div>
              <div className='feature-desc'>Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.</div>
            </div>

            <div className='feature-card'>
              <div className='feature-icon'>😁</div>
              <div className='feature-title'>TIMELY DELIVERY</div>
              <div className='feature-desc'>We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.</div>
            </div>
          </div>
        </div>
      </div>

      <div className='app'>
        <div className='work-wrapper'>
          <div className='work-header'>
            <h2>Projects Showcase</h2>
            <div className='work-btns'>
              <button>Web Design</button>
              <button>Web Design</button>
              <button>Web Design</button>
            </div>
          </div>

          <div className='project-card'>
            <div className='project-left'>
              <div className='project-title'>
                <span className='project-icon'>😁</span>
                <span className='project-name'>ZENITH FITNESS APP</span>
                <button className='details-btn'>DETAILS</button>
              </div>
              <div className='project-meta'>
                <span>
                  <strong>Category:</strong> Mobile App Development
                </span>
                <span>
                  <strong>Time Taken:</strong> 6 months
                </span>
              </div>
              <div className='project-desc'>An all-in-one health and wellness app that offers personal and fitness plans, nutrition guidance, and virtual workout classes.</div>
            </div>

            <div className='project-image'>
              <img src='img2.png' alt='Zenith Fitness' />
            </div>

            <div className='project-right'>
              <div className='project-tech'>
                <div>TECHNOLOGIES USED</div>
                <div>React Native, Firebase, Redux, REST API, MongoDB</div>
              </div>
              <div className='project-team'>
                <div>TEAM MEMBERS</div>
                <div className='avatars'>
                  <span>😁</span>
                  <span>😁</span>
                  <span>😁</span>
                  <span>😁</span>
                  <span>😁</span>
                </div>
              </div>
              <button className='call-btn'>BOOK A CALL</button>
            </div>
          </div>

          <div className='project-card'>
            <div className='project-left'>
              <div className='project-title'>
                <span className='project-icon'>😁</span>
                <span className='project-name'>A-JAURA ECOMMERCE</span>
                <button className='details-btn'>DETAILS</button>
              </div>
              <div className='project-meta'>
                <span>
                  <strong>Category:</strong> Web Design & Development
                </span>
                <span>
                  <strong>Time Taken:</strong> 3 months
                </span>
              </div>
              <div className='project-desc'>A complete overhaul of a corporate website to enhance its brand identity and user experience.</div>
            </div>

            <div className='project-image'>
              <img src='/public/img2.png' alt='A-Jaura Ecommerce' />
            </div>

            <div className='project-right'>
              <div className='project-tech'>
                <div>TECHNOLOGIES USED</div>
                <div>React, HTML5, CSS3, JavaScript</div>
              </div>
              <div className='project-team'>
                <div>TEAM MEMBERS</div>
                <div className='avatars'>
                  <span>😁</span>
                  <span>😁</span>
                  <span>😁</span>
                  <span>😁</span>
                  <span>😁</span>
                </div>
              </div>
              <button className='call-btn'>BOOK A CALL</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <Frequently />
      </div>

      <div>
        <Pink />
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Projects
