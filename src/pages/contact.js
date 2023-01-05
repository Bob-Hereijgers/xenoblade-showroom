import "./contact.css"
import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <main>
      <Layout pageTitle={"About us"}>
      <title>About page</title>
      <section className="FormContainer">
        <h1 className="ContactTitle">Feel free to contact us about any issue or suggestion!</h1>
        <form name="contact" method="POST" data-netlify="true" className="Form">
            <input type="text" name="name" required={true} placeholder="Your Name" className="Input"/>
            <input type="email" name="email" required={true} placeholder="Your Email" className="Input"/>
            <textarea name="message" required={true} placeholder="Your Message" className="Input Message"></textarea>
            <button type="submit" className="Input">Send</button>
        </form>
      </section>
      </Layout>

    </main>
  )
}


export default ContactPage