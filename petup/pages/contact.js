import React from 'react'
import Head from 'next/head'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'

const Contact = () => {
    return (
        <>

        <Head>
            <title>
                Contact
            </title>
           </Head> 
           <Header />
        <div className='contactus-divone'>
           <div className='contact-main-div'>
           <h1 style={{marginTop: '1rem'}}>Contact Us</h1>
           <div className='contact-text'>
            <p>
            We are always happy to hear from our clients and potential clients. If you have any questions or concerns, please don't hesitate to reach out to us. We tare dedicated to providing the best possible service to you and your furry family members.</p>

<p>Here are a few ways to get in touch with us:

Email: info@petbrb.co.uk
Phone: 555-555-5555 (Available Monday-Friday, 9am-5pm GMT)
Online Form: Fill out the form below and we'll get back to you as soon as possible.</p>

<form action="https://formsubmit.co/your@email.com" method="POST">
     <input type="text" name="name" required/>
     <input type="email" name="email" required/>
     <button type="submit">Send</button>
</form>

<p>We value your feedback and strive to improve our services continuously. If you have any suggestions or comments, please let us know. We look forward to hearing from you!
</p>
           </div>
           </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact