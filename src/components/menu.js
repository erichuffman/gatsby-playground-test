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
          <Link css={linkStyle} to="/about/">About</Link>
        </li>
        <li css={itemStyle}>
          <Link css={linkStyle} to="/articles/">Articles</Link>
        </li>
        <li css={itemStyle}>
          <Link css={linkStyle} to="/gallery/">Gallery</Link>
        </li>
        <li css={itemStyle}>
          <Link css={linkStyle} to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu