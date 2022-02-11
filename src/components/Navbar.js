import React, { useContext } from "react"
import styled from "styled-components"
import logo from "../images/default.svg"
import { Link } from "gatsby"
import { FaBullhorn } from "react-icons/fa"
import NavLink from "./NavLink"
import { GatsbyContext } from "../context/context"

const Navbar = () => {
  const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext)
  const tempLinks = [
    ...new Set(
      links.map(link => {
        return link.page
      })
    ),
  ]

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="just bobby" />
          </Link>
          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={showSidebar}>
              <FaBullhorn />
            </button>
          )}
        </div>
        <ul className="nav-links">
          {tempLinks.map((page, index) => {
            return <NavLink key={index} page={page} />
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  background: transparent;
  z-index: 1;
  display: flex;
  align-items: center;
  .contact-button {
    color: var(--clr-white);
    background: var(--clr-primary-8);
    border: 1px solid var(--clr-primary-5);
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
    padding: 10px 20px;
    width: 100%;
    text-transform: capitalize;
    position: relative;
    border-radius: 0.2rem;
    &:hover {
      background-color: var(--clr-primary-5);
    }
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 100px;
      width: 100px;
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      border-radius: 0.2rem;
      border: transparent;
      color: var(--clr-black);
      background: var(--clr-primary-8);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-grey-9);
        color: var(--clr-black);
        border: 3px solid var(--clr-black);
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      margin-left: 500px;
      margin-right: 100px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 0 2rem;
      max-width: 400px;
    }
    li {
      color: var(--clr-grey-4);
      text-align: center;
      border: 1px solid transparent;
      text-transform: uppercase;
      padding: 0.25rem;
      position: relative;
      font-family: sans-serif;
      font-weight: bold;
      transition: var(--transition);
    }
  }
`

export default Navbar
