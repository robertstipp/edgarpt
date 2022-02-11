import React from "react"
import styled from "styled-components"

const CloseButton = () => {
  return (
    <Wrapper>
      <div className="frame">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .frame {
    border-radius: 0.25rem;
    position: relative;
    width: 4rem;
    height: 4rem;
    background: rgba(221, 60, 84, 0.6);

    &:hover {
      .line1 {
        transform: rotate(42.5deg) translate(0.1rem, 0.1rem);
        filter: drop-shadow(0 0 0.15rem black);
      }
      .line2 {
        transform: rotate(-42.5deg) translate(-0.1rem, 0.1rem);
        filter: drop-shadow(0 0 0.15rem black);
      }
    }
  }
  .line1 {
    position: relative;
    left: 0.5rem;
    top: 1.75rem;
    width: 3rem;
    height: 0.5rem;
    background-color: white;
    transform: rotate(45deg);
    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    filter: drop-shadow(0 0 0.1rem black);
  }

  .line2 {
    position: relative;
    left: 0.5rem;
    top: 1.25rem;
    width: 3rem;
    height: 0.5rem;
    background-color: white;
    transform: rotate(-45deg);
    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    filter: drop-shadow(0 0 0.1rem black);
  }
`

export default CloseButton
