import React from "react"
import styled from "@emotion/styled"

const FooterWrapper = styled.footer `
  background-color: #f2f2f2;
  padding: 10px;
`

const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </FooterWrapper>
)

export default Footer
