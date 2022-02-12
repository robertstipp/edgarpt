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
    background-color: var(--clr-primary-10);
    opacity: 0.8;

    &:hover {
      .leftPlate {
        transform: rotate(-3.5deg);
        filter: drop-shadow(0 0 0.15rem black);
      }
      .rightPlate {
        transform: rotate(4.5deg);
        filter: drop-shadow(0 0 0.15rem black);
      }
    }
  }
  .leftPlate {
    z-index: 200;
    position: relative;
    left: 0.5rem;
    top: 0.5rem;
    width: 0.8rem;
    height: 2.5rem;
    background-color: #000000;
    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    filter: drop-shadow(0 0 0.05rem black);
  }
  .bar {
    z-index: 1;
    position: relative;
    left: 1.2rem;
    top: -1rem;
    width: 2.5rem;
    height: 0.5rem;
    background-color: #000000;
    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    filter: drop-shadow(0 0 0.05rem black);
  }

  .rightPlate {
    z-index: 1;
    position: relative;
    left: 3.2rem;
    top: -2.5rem;
    width: 0.8rem;
    height: 2.5rem;
    background-color: #000000;

    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    filter: drop-shadow(0 0 0.05rem black);
  }
`

export default DumbellButton
