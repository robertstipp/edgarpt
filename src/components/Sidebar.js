import React, { useContext } from "react"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"
import CloseButton from "./CloseButton"

const Sidebar = () => {
  const { sociallinks, hideSidebar } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <div className="container">
        <button onClick={hideSidebar}>
          <CloseButton />
          {/* <MdClose className="icon" /> */}
        </button>
        <div className="sociallinks">
          {sociallinks.map(social => {
            const { id, icon, url, label } = social
            return (
              <div key={id}>
                <a href={url} className="icon">
                  {icon}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    display: none;
  }
  .container {
    background: var(--clr-primary-9);
    width: 80vw;
    height: 80vh;
    border-radius: var(--radius);
    position: relative;
    padding: 4rem 2rem 2rem 2rem;
    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 3rem;
      cursor: pointer;
      color: var(--clr-red-dark);
    }
    .sociallinks {
      padding-top: 2rem;
      display: grid;
      gap: 1.2rem 4rem;
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--clr-black);
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.2rem;
        .icon {
          color: var(--clr-black);
          font-size: 10rem;
        }
        &:hover {
          color: var(--clr-grey-2);
        }

        .label {
          padding-left: 1rem;
        }
      }
    }
  }
`

export default Sidebar
