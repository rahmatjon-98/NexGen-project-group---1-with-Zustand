import "./frequemtly.css"
import React, { useState } from "react"
import "./frequemtly.css"

const Frequently = () => {
  const [openIdx, setOpenIdx] = useState(null)
  const [form, setForm] = useState({ name: "", email: "", question: "" })

  return (
    <>
      <div className='app2'>
        <div className='faq-wrapper'>
          <div className='faq-header'>
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <button className='view-btn'>
              <span className='icon'>↗</span>
              VIEW ALL
            </button>
          </div>

          <div className='faq-grid'>
            <div className='faq-column'>
              <div className={`faq-item ${openIdx === 0 ? "open" : ""}`} onClick={() => setOpenIdx(openIdx === 0 ? -1 : 0)}>
                <div className='faq-question'>
                  <span>How long does it take to complete a web development project?</span>
                  <span className='toggle'>{openIdx === 0 ? "–" : "+"}</span>
                </div>
                {openIdx === 0 && <div className='faq-answer'>The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</div>}
              </div>

              <div className={`faq-item ${openIdx === 1 ? "open" : ""}`} onClick={() => setOpenIdx(openIdx === 1 ? -1 : 1)}>
                <div className='faq-question'>
                  <span>Can you handle large-scale mobile app development projects?</span>
                  <span className='toggle'>{openIdx === 1 ? "–" : "+"}</span>
                </div>
              </div>

              <div className={`faq-item ${openIdx === 2 ? "open" : ""}`} onClick={() => setOpenIdx(openIdx === 2 ? -1 : 2)}>
                <div className='faq-question'>
                  <span>Can you integrate third-party APIs into our mobile app?</span>
                  <span className='toggle'>{openIdx === 2 ? "–" : "+"}</span>
                </div>
              </div>

              <div className={`faq-item ${openIdx === 3 ? "open" : ""}`} onClick={() => setOpenIdx(openIdx === 3 ? -1 : 3)}>
                <div className='faq-question'>
                  <span>How do you ensure cross-platform compatibility for mobile apps?</span>
                  <span className='toggle'>{openIdx === 3 ? "–" : "+"}</span>
                </div>
              </div>

              <div className={`faq-item ${openIdx === 4 ? "open" : ""}`} onClick={() => setOpenIdx(openIdx === 4 ? -1 : 4)}>
                <div className='faq-question'>
                  <span>What is your approach to user experience (UX) design?</span>
                  <span className='toggle'>{openIdx === 4 ? "–" : "+"}</span>
                </div>
              </div>
            </div>

            <div className='faq-form'>
              <div className='form-title'>ASK YOUR QUESTION</div>
              <label>NAME</label>
              <input type='text' value={form.name} placeholder='Enter your name' onChange={e => setForm({ ...form, name: e.target.value })} />
              <label>EMAIL</label>
              <input type='email' value={form.email} placeholder='Enter your email' onChange={e => setForm({ ...form, email: e.target.value })} />
              <label>YOUR QUESTION</label>
              <textarea value={form.question} placeholder='Enter your question here ...' onChange={e => setForm({ ...form, question: e.target.value })} />
              <button className='submit-btn'>SEND YOUR MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frequently
