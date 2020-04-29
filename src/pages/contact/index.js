import React from "react"
import { css } from "@emotion/core"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const hiddenStyle = css`
  display: none;
`;

const ContactPage = () => (
  <Layout>
    <SEO title="Contact page" />
    <h1>Cotact</h1>
    <p>Use the form below to contact us.</p>
    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/contact/thanks">
      <p css={hiddenStyle}>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Email: <input type="text" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default ContactPage
