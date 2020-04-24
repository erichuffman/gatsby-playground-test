import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Menu = () => {
  const menuStyle = css`
    display: flex;
    list-style: none;
  `;

  const itemStyle = css`
    margin-left: 15px;
  `;

  const linkStyle = css`
    color: white;
    text-decoration: none;
  `;

  return (
    <nav>
      <ul css={menuStyle}>
        <li css={itemStyle}>
          <Link css={linkStyle} to="/">Home</Link>
        </li>
        <li css={itemStyle}>
          <Link css={linkStyle} to="/page-2/">Page 2</Link>
        </li>
        <li css={itemStyle}>
          <Link css={linkStyle} to="/about/">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu