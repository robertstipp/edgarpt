import React from "react"
import styled from "styled-components"

const DumbellButton = () => {
  return (
    <Wrapper>
      <div className="frame">
        <div className="leftPlate"></div>
        <div className="bar"></div>
        <div className="rightPlate"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .frame {
    position: relative;
    width: 4.5rem;
    height: 3.25rem;
    background: transparent;
    &:hover {
      .leftPlate {
        transform: rotate(-3.5deg);
        filter: drop-shadow(0 0 0.05rem black);
      }
      .rightPlate {
        transform: rotate(4.5deg);
        filter: drop-shadow(0 0 0.05rem black);
      }
    }
  }
  .leftPlate {
    border-radius: 0.2rem;
    z-index: 200;
    position: relative;
    left: 0.5rem;
    top: 0.5rem;
    width: 1.2rem;
    height: 2rem;
    background-color: black;
    filter: drop-shadow(0.1rem 0.1rem 0 grey);
    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  .bar {
    z-index: 1;
    position: relative;
    left: 1.2rem;
    top: -0.75rem;
    width: 2.5rem;
    height: 0.5rem;
    background-color: grey;
    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  .rightPlate {
    border-radius: 0.2rem;
    z-index: 1;
    position: relative;
    left: 3.2rem;
    top: -2rem;
    width: 1.2rem;
    height: 2rem;
    background-color: black;
    filter: drop-shadow(0.1rem 0.1rem 0 grey);
    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
`

export default DumbellButton
