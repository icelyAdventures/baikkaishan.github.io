import React from 'react'
import "./contact.css"
import Back from '../common/back/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76917.90815916027!2d-1.2524609648281129!3d52.954097429630856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487832d2390779cd%3A0x108063201919db15!2sNottingham%2C%20UK!5e0!3m2!1sen!2smy!4v1690380571635!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

return (
    <>
        <Back title="Contact Us" />
        <section className='contact padding'>
            <div className='container shadow flexSB'>
                <div className='left row'>
                    <iframe src={map} title="contact"></iframe>
                </div>
                <div className='right row'>
                    <h1>Contact Us</h1>
                    <p>We're open for any suggestion or just to have a chat</p>

                    <div className="items grid2">
                        <div className="box">
                            <h4>ADDRESS: </h4>
                            <p>198 west 21st street, suite 751, New York NY 10016</p>
                        </div>
                        <div className="box">
                            <h4>EMAIL: </h4>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="box">
                            <h4>PHONE: </h4>
                            <p>+123 456 7890</p>
                        </div>
                    </div>

                    <form action="">
                        <div className="flexSB">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <input type="subject" placeholder='Subject' />
                        <textarea cols="30" rows="10">
                            Create message here...
                        </textarea>
                        <button className="primary-btn">SEND MESSAGE</button>
                    </form>

                    <h3>Follow us here</h3>
                    <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact