import React from 'react'
import button from './img/Button.png'
import subContainer from './img/Sub Container.png'
import container from './img/Container (3).png'
import button1 from './img/Button (1).png'
import button2 from './img/Button (2).png'
import button3 from './img/Button (3).png'
import icon from './img/Icon Container (3).png'
import icon4 from './img/Icon Container (4).png'
import icon5 from './img/Icon Container (5).png'
import icon6 from './img/Icon Container (6).png'
import img96 from './img/Image (96).png'
import img97 from './img/Image (97).png'
import img98 from './img/Image (98).png'
import img99 from './img/Image (99).png'
import img100 from './img/Image (100).png'
import img2025 from './img/Image - 2025-07-17T110917.926.png'
import forth from './img/forth (2).png'
import women from './img/women.png'
import man from './img/man.png'
import kimki from './img/kimki.png'
import arus from './img/arus.png'
import './home.css'
const Home = () => {
  return (
    <div>
      <div style={{ display: 'flex', marginTop: "100px", justifyContent: 'center', gap: '50px' }}>
        <div style={{ backgroundColor: '#1A1A1A', width: '800px', padding: '50px', borderRadius: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: ' 20px' }}>
            <h1 style={{ color: 'white', fontSize: '40px', fontFamily: 'sans-serif' }}>DIGITAL SOLUTIONS</h1>
            <img src={button} alt="" />
          </div>
          <h1 style={{ color: 'white', fontSize: '40px', fontFamily: 'sans-serif' }}>THAT DRIVE SUCCESS</h1>
          <p style={{ color: '#676665' }}>At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping <br /> businesses like yours thrive in the fast-paced digital landscape.</p>
          <img style={{ width: '800px', marginTop: '40px' }} src={subContainer} alt="" />
        </div>
        <div>
          <img style={{ width: '450px' }} src={container} alt="" />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px', border: '1px solid #1F1F1F', padding: '10px', borderRadius: '20px' }}>
        <div style={{ backgroundColor: '#1A1A1A', textAlign: 'center', width: '200px', padding: '10px', borderRadius: '10px' }}>
          <p style={{ color: 'white' }}>Clients</p>
          <h1 style={{ color: '#DA9E8B' }}>200+</h1>
        </div>
        <div style={{ backgroundColor: '#1A1A1A', textAlign: 'center', width: '200px', padding: '10px', borderRadius: '10px' }}>
          <p style={{ color: 'white' }}>PROJECTS</p>
          <h1 style={{ color: '#DA9E8B' }}>280+</h1>
        </div>
        <div style={{ backgroundColor: '#1A1A1A', textAlign: 'center', width: '200px', padding: '10px', borderRadius: '10px' }}>
          <p style={{ color: 'white' }}>HAPPY CLIENTS</p>
          <h1 style={{ color: '#DA9E8B' }}>100%</h1>
        </div>
        <div style={{ backgroundColor: '#1A1A1A', textAlign: 'center', width: '200px', padding: '10px', borderRadius: '10px' }}>
          <p style={{ color: 'white' }}>FOLLOWER</p>
          <h1 style={{ color: '#DA9E8B' }}>420K</h1>
        </div>
        <div style={{ backgroundColor: '#1A1A1A', textAlign: 'center', width: '200px', padding: '10px', borderRadius: '10px' }}>
          <p style={{ color: 'white' }}>Years Of Experience</p>
          <h1 style={{ color: '#DA9E8B' }}>10+</h1>
        </div>
        <div>
          <img style={{ width: '220px' }} src={button1} alt="" />
        </div>
      </div>
      <div style={{ border: '1px solid #1F1F1F', marginTop: '50px', padding: '20px', borderRadius: '20px' }}>
        <div style={{ backgroundColor: '#1A1A1A', padding: '1px 30px', borderRadius: '20px' }}>
          <h1 style={{ fontFamily: 'sans-serif', fontSize: '40px', color: 'white' }}>Reasons to Choose NexGen for Your Digital Journey</h1>
        </div>
        <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
          <div style={{ backgroundColor: '#1A1A1A', width: '300px', padding: '20px', borderRadius: '20px' }}>
            <h1 style={{ color: '#F9EFEC' }}>Expertise in Cutting-Edge Technologies</h1>
            <p style={{ color: '#B3B3B2' }}>NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
              <img src={button2} alt="" />
              <p style={{ color: '#B3B3B2' }}> Learn More</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#1A1A1A', width: '300px', padding: '20px', borderRadius: '20px' }}>
            <h1 style={{ color: '#F9EFEC' }}>Proven Track Record of Success</h1>
            <p style={{ color: '#B3B3B2' }}>NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
              <img src={button2} alt="" />
              <p style={{ color: '#B3B3B2' }}> Learn More</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#1A1A1A', width: '300px', padding: '20px', borderRadius: '20px' }}>
            <h1 style={{ color: '#F9EFEC' }}>Client-Centric Approach</h1>
            <p style={{ color: '#B3B3B2' }}>At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
              <img src={button2} alt="" />
              <p style={{ color: '#B3B3B2' }}> Learn More</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#1A1A1A', width: '300px', padding: '20px', borderRadius: '20px' }}>
            <h1 style={{ color: '#F9EFEC' }}>Dedicated Team of Professionals</h1>
            <p style={{ color: '#B3B3B2' }}>Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
              <img src={button2} alt="" />
              <p style={{ color: '#B3B3B2' }}> Learn More</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ border: '1px solid #1F1F1F', marginTop: '100px', padding: '20px', borderRadius: '20px' }}>
        <div style={{ backgroundColor: '#1A1A1A', padding: '1px 30px', borderRadius: '20px' }}>
          <h1 style={{ fontFamily: 'sans-serif', fontSize: '40px', color: 'white' }}>Our Services</h1>
        </div>
        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '50px' }}>
          <div style={{ backgroundColor: '#1A1A1A', width: '600px', padding: '20px', borderRadius: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={icon} alt="" />
                <h2 style={{ color: '#F9EFEC', fontFamily: 'sans-serif' }}>Web Design</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={button3} alt="" />
                <p style={{ color: '#F9EFEC', fontFamily: 'sans-serif' }}>Book A Call</p>
              </div>
            </div>
            <p style={{ color: '#B3B3B2' }}>Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.</p>
            <h2 style={{ color: '#F9EFEC', marginTop: '20px', marginLeft: '300px' }}>Starts From $1,500</h2>
          </div>

          <div style={{ backgroundColor: '#1A1A1A', width: '600px', padding: '20px', borderRadius: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={icon4} alt="" />
                <h2 style={{ color: '#F9EFEC', fontFamily: 'sans-serif' }}>Mobile App Development</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={button3} alt="" />
                <p style={{ color: '#F9EFEC', fontFamily: 'sans-serif' }}>Book A Call</p>
              </div>
            </div>
            <p style={{ color: '#B3B3B2' }}>With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.</p>
            <h2 style={{ color: '#F9EFEC', marginTop: '20px', marginLeft: '300px' }}>Starts From $2,500</h2>
          </div>
        </div>


        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '50px' }}>
          <div style={{ backgroundColor: '#1A1A1A', width: '600px', padding: '20px', borderRadius: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={icon5} alt="" />
                <h2 style={{ color: '#F9EFEC', fontFamily: 'sans-serif' }}>Web Development</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={button3} alt="" />
                <p style={{ color: '#F9EFEC', fontFamily: 'sans-serif' }}>Book A Call</p>
              </div>
            </div>
            <p style={{ color: '#B3B3B2' }}>Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.</p>
            <h2 style={{ color: '#F9EFEC', marginTop: '20px', marginLeft: '300px' }}>Starts From $1,800</h2>
          </div>

          <div style={{ backgroundColor: '#1A1A1A', width: '600px', padding: '20px', borderRadius: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={icon6} alt="" />
                <h2 style={{ color: '#F9EFEC', fontFamily: 'sans-serif' }}>Digital Marketing</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={button3} alt="" />
                <p style={{ color: '#F9EFEC', fontFamily: 'sans-serif' }}>Book A Call</p>
              </div>
            </div>
            <p style={{ color: '#B3B3B2' }}>In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility</p>
            <h2 style={{ color: '#F9EFEC', marginTop: '20px', marginLeft: '300px' }}>Starts From $1,200</h2>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#121212', padding: '30px', fontFamily: 'sans-serif' }}>
        <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>OUR WORKS</h2>

        <div style={{
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
          color: '#fff'
        }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>ZENITH FITNESS APP</h3>
            <p><strong>Category:</strong> <span style={{ background: '#2c2c2c', padding: '4px 10px', borderRadius: '4px', fontSize: '12px' }}>Mobile App Development</span></p>
            <p><strong>Time Taken:</strong> <span style={{ background: '#2c2c2c', padding: '4px 10px', borderRadius: '4px', fontSize: '12px' }}>6 months</span></p>
            <p style={{ color: '#ccc' }}>
              An all-in-one health and wellness app that offers personalized fitness plans,
              nutrition guidance, and virtual workout classes.
            </p>
          </div>

          <img
            src={img96}
            alt="Zenith"
            style={{ width: '250px', borderRadius: '10px', objectFit: 'cover' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p><strong>TECHNOLOGIES USED</strong></p>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>React Native</span>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>Firebase</span>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>Redux</span>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>REST API</span>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>MongoDB</span>
              </div>
            </div>
            <div>
              <p style={{ marginTop: '10px' }}><strong>TEAM MEMBERS</strong></p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <img src={img97} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
                <img src={img98} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
                <img src={img99} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
                <img src={img100} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
                <img src={img2025} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
              </div>
              <button style={{
                backgroundColor: '#e78b6f',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%'
              }}>BOOK A CALL</button>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          padding: '30px',
          display: 'flex',
          gap: '50px',
          marginBottom: '20px',
          color: '#fff'
        }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>A-AURA ECOMMERCE</h3>
            <p><strong>Category:</strong> <span style={{ background: '#2c2c2c', padding: '4px 10px', borderRadius: '4px', fontSize: '12px' }}>Web Design & Development</span></p>
            <p><strong>Time Taken:</strong> <span style={{ background: '#2c2c2c', padding: '4px 10px', borderRadius: '4px', fontSize: '12px' }}>3 months</span></p>
            <p style={{ color: '#ccc' }}>
              A complete overhaul of a corporate website to enhance its brand <br />identity and user experience.
            </p>
          </div>

          <img
            src={forth}
            alt="A-Aura"
            style={{ width: '250px', borderRadius: '10px', objectFit: 'cover' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p><strong>TECHNOLOGIES USED</strong></p>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>WordPress</span>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>PHP</span>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>HTML5</span>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>CSS3</span>
                <span style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>JavaScript</span>
              </div>
            </div>
            <div>
              <p style={{ marginTop: '10px' }}><strong>TEAM MEMBERS</strong></p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <img src={img97} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
                <img src={img98} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
                <img src={img99} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
                <img src={img100} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
                <img src={img2025} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="team" />
              </div>
              <button style={{
                backgroundColor: '#e78b6f',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%'
              }}>BOOK A CALL</button>
            </div>
          </div>
        </div>
      </div>


      <div style={{ backgroundColor: '#121212', padding: '30px', fontFamily: 'sans-serif', border: '1px solid #1F1F1F', marginTop: '50px', borderRadius: '20px', marginBottom:'100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>TESTIMONIALS</h2>
          <span style={{ color: '#ccc', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ transform: 'rotate(-45deg)', fontSize: '18px' }}>↑</span> ALL TESTIMONIALS
          </span>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '10px',
            padding: '20px',
            color: '#fff',
            width: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <h4 style={{ marginBottom: '10px' }}>NEXGEN TURNED OUR BUSINESS AROUND!</h4>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={women} alt="Sarah" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Sarah Thompson</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>CEO of BlueBloom</p>
                </div>
              </div>
              <span style={{ color: '#ccc', fontSize: '18px' }}>→</span>
            </div>
          </div>

          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '10px',
            padding: '20px',
            color: '#fff',
            width: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <h4 style={{ marginBottom: '10px' }}>NEXGEN TURNED OUR BUSINESS AROUND!</h4>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={man} alt="Wade" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Wade Warren</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>Art Director</p>
                </div>
              </div>
              <span style={{ color: '#ccc', fontSize: '18px' }}>→</span>
            </div>
          </div>

          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '10px',
            padding: '20px',
            color: '#fff',
            width: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <h4 style={{ marginBottom: '10px' }}>WORKING WITH NEXGEN WAS A PLEASURE.</h4>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              Their web design team created a stunning website that perfectly captured our brand’s essence. The feedback from our customers has been overwhelmingly positive.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={kimki} alt="Lisa" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Lisa Williams</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>CEO Of HealthTech</p>
                </div>
              </div>
              <span style={{ color: '#ccc', fontSize: '18px' }}>→</span>
            </div>
          </div>

          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '10px',
            padding: '20px',
            color: '#fff',
            width: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <h4 style={{ marginBottom: '10px' }}>NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.</h4>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={arus} alt="Jennifer" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Jennifer Lee</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>COO of Foodie Haven</p>
                </div>
              </div>
              <span style={{ color: '#ccc', fontSize: '18px' }}>→</span>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Home