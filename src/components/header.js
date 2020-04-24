import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Menu from "./menu"

const HeaderWrapper = styled.header `
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div `
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const HeaderTitle = styled.h1 `
  margin: 0;
`

const linkStyle = css`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderTitle>
        <Link
          to="/"
          css={linkStyle}
        >
          {siteTitle}
        </Link>
      </HeaderTitle>
      <Menu />
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
