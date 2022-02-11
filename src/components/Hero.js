import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/default-monochrome.svg"

const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../images/Edgar.png"
        layout="fullWidth"
        className="img"
        alt="hero"
      />
      <div className="info">
        <article>
          <img src={logo} alt="just bobby" className="logo" />
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;

  position: relative;
  .img {
    height: 100%;
  }
  .logo {
    height: 400px;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      196deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 0, 0, 0.4) 0%,
      rgba(251, 255, 0, 0.3) 100%
    );
  }

  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-white);
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 1rem 0 3rem 0;
      letter-spacing: 3px;
    }
    h3 {
      font-weight: 400;
    }
    a {
      background: transparent;
      border: 2px solid var(--clr-white);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-white);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      background: var(--clr-white);
      color: var(--clr-black);
    }
    @media (min-width: 800px) {
    }
    a {
      font-size: 1.25rem;
      padding: 0.5rem 1.25rem;
    }
    h1 {
      letter-spacing: 5px;
    }
  }
`

export default Hero
