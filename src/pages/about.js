import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <h1>Hi from the about page.</h1>
    <p>Welcome to the about page.</p>
    <Section title="Section 1" text="This is my first section" />
    <Section title="Section 2" text="This is my second section" />
    <Link to="/">Go to the homepage</Link>
  </Layout>
)

export default AboutPage
