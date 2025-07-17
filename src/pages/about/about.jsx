import React, { useEffect, useState } from "react"
import "./about.css"
import { storeGet } from "./aboutStore"
import { Modal, Input } from "antd"
import Testimonials from "../../components/testimonials/testimonials"
import Frequently from "../../components/frequently/frequently"
import Pink from "../../components/pink/pink"
import Footer from "../../components/footer/footer"

const About = () => {
  let { users, get, deleteUser, addNewUser } = storeGet()

  let [modalAdd, setModalAdd] = useState(false)
  let [imageInputModalAdd, setImageInputModalAdd] = useState("")
  let [nameInputModalAdd, setNameInputModalAdd] = useState("")
  let [descriptionInputModalAdd, setDescriptionInputModalAdd] = useState("")

  function addUser() {
    let newUser = {
      image: imageInputModalAdd,
      name: nameInputModalAdd,
      description: descriptionInputModalAdd
    }
    addNewUser(newUser)
    setImageInputModalAdd("")
    setNameInputModalAdd("")
    setDescriptionInputModalAdd("")
    setModalAdd(false)
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <>
      <div className='stats-section'>
        <div className='stats-container'>
          <div className='stats-left'>
            <div className='headline-row'>
              <span className='headline'>ELEVATING BRANDS</span>
              <button className='start-btn'>
                <span className='btn-arrow'>→</span>
                START A PROJECT
              </button>
            </div>
            <span className='headline'>IN THE DIGITAL AGE</span>
          </div>

          <div className='stats-right'>
            <div className='stats-row'>
              <div className='stat-box'>
                <div className='stat-label'>CLIENTS</div>
                <div className='stat-value'>200+</div>
              </div>
              <div className='stat-box'>
                <div className='stat-label'>PROJECTS</div>
                <div className='stat-value'>280+</div>
              </div>
            </div>
            <div className='stats-row'>
              <div className='stat-box'>
                <div className='stat-label'>HAPPY CLIENTS</div>
                <div className='stat-value'>100%</div>
              </div>
              <div className='stat-box'>
                <div className='stat-label'>FOLLOWER</div>
                <div className='stat-value'>420K</div>
              </div>
            </div>
            <div className='know-btn-wrapper'>
              <button className='know-btn'>
                <span className='know-arrow'>↓</span>
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='modalAdd'>
        <Modal title='Basic Modal' closable={{ "aria-label": "Custom Close Button" }} open={modalAdd} onOk={addUser} onCancel={() => setModalAdd(false)}>
          <Input value={imageInputModalAdd} onChange={e => setImageInputModalAdd(e.target.value)} placeholder='Basic image' />
          <Input value={nameInputModalAdd} onChange={e => setNameInputModalAdd(e.target.value)} placeholder='Basic name' />
          <Input value={descriptionInputModalAdd} onChange={e => setDescriptionInputModalAdd(e.target.value)} placeholder='Basic description' />
        </Modal>
      </div>

      <div className='addBtn' style={{ marginTop: "100px", marginLeft: "20px" }}>
        <button onClick={() => setModalAdd(true)}>add</button>
      </div>

      <div className='user-list'>
        {users.map(e => (
          <div key={e.name} className='user-card'>
            <div className='user-name'>{e.name}</div>
            <div className='user-description'>{e.description}</div>
            <div className='user-image-container'>
              <img src={e.image} alt={e.name} className='user-image' />
            </div>
            <div className='user-actions'>
              <button onClick={() => deleteUser(e.id)} className='action-button'>
                delete
              </button>
              <button className='action-button'>edit</button>
            </div>
          </div>
        ))}
      </div>

      <div className='achievements-wrapper'>
        <div className='achievements-inner'>
          <div className='achievements-heading'>
            <h2>OUR ACHIEVEMENTS</h2>
          </div>
          <div className='achievements-grid'>
            <div className='achievement-card'>
              <div className='achievement-date'>September 2023</div>
              <div className='achievement-title'>GLOBAL RECOGNITION FOR INNOVATION</div>
              <div className='achievement-desc'>In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.</div>
            </div>

            <div className='achievement-card'>
              <div className='achievement-date'>March 2019</div>
              <div className='achievement-title'>INDUSTRY LEADERSHIP ACKNOWLEDGED</div>
              <div className='achievement-desc'>Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction.</div>
            </div>

            <div className='achievement-card'>
              <div className='achievement-date'>August 2015</div>
              <div className='achievement-title'>EXPANSION INTO INTERNATIONAL MARKETS</div>
              <div className='achievement-desc'>Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale.</div>
            </div>

            <div className='achievement-card'>
              <div className='achievement-date'>January 2010</div>
              <div className='achievement-title'>PIONEERING THE DIGITAL FRONTIER</div>
              <div className='achievement-desc'>In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation.</div>
            </div>
          </div>
        </div>
      </div>

      <div className='awards-section'>
        <div className='awards-wrapper'>
          <div className='awards-header'>
            <h2>AWARDS & RECOGNITIONS</h2>
          </div>
          <div className='awards-grid'>
            <div className='award-card'>
              <div className='award-top'>
                <div className='award-date'>
                  <span className='label'>Date</span>
                  <span className='value'>October 2017</span>
                </div>
                <span className='award-icon'>😎</span>
              </div>
              <div className='award-title'>DIGITAL EXCELLENCE AWARD</div>
              <div className='award-desc'>Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.</div>
            </div>

            <div className='award-card'>
              <div className='award-top'>
                <div className='award-date'>
                  <span className='label'>Date</span>
                  <span className='value'>March 2019</span>
                </div>
                <span className='award-icon'>😎</span>
              </div>
              <div className='award-title'>TOP MOBILE APP DEVELOPMENT AGENCY</div>
              <div className='award-desc'>Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless and user-centric mobile applications.</div>
            </div>

            <div className='award-card'>
              <div className='award-top'>
                <div className='award-date'>
                  <span className='label'>Date</span>
                  <span className='value'>July 2022</span>
                </div>
                <span className='award-icon'>😎</span>
              </div>
              <div className='award-title'>BEST DIGITAL MARKETING CAMPAIGN</div>
              <div className='award-desc'>Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts that achieved remarkable business growth for our clients.</div>
            </div>

            <div className='award-card'>
              <div className='award-top'>
                <div className='award-date'>
                  <span className='label'>Date</span>
                  <span className='value'>November 2024</span>
                </div>
                <span className='award-icon'>😎</span>
              </div>
              <div className='award-title'>INNOVATIVE TECH STARTUP AWARD</div>
              <div className='award-desc'>Recognition of our pioneering efforts as a technology startup, acknowledging our commitment to exploring and implementing cutting-edge technologies to drive innovation in the digital space.</div>
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

export default About
