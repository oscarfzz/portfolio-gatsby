import styled from "styled-components"

export const LandingStyle = styled.section`
  min-height: calc(80vh - 100px);
  padding: 10rem;
  position: unset !important;

  @media (max-width: 980px) {
    padding: 4rem;
  }

  @media (max-width: 690px) {
    padding: 1.5rem;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: $fz-heading - 1rem;
      line-height: 7rem !important;
    }
  }

  @media (max-width: 530px) {
    h1 {
      margin-top: 8rem;
      font-size: $fz-heading - 1.7rem;
      line-height: 4.7rem !important;
    }
  }
`
