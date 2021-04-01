import styled from "styled-components"

export const LandingStyle = styled.section.attrs(() => ({
  className: "wm",
}))`
  min-height: calc(100vh - 100px);
  padding: 3rem 7rem;
  position: unset !important;

  @media (max-width: 980px) {
    padding: 4rem;
  }

  @media (max-width: 690px) {
    padding: 1.5rem;
  }

  &.wm {
    min-height: calc(100vh - 100px);
    .flat-button {
      color: #08fdd8;
      font-size: 14px;
      letter-spacing: 4px;
      font-family: "Open Sans", sans-serif;
      text-decoration: none;
      margin-top: 20px;
      position: relative;
      width: 100%;
      max-width: 220px;
      height: 50px;
      line-height: 50px;
      display: block;
      text-align: center;
    }
    .flat-button div {
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;
    }
    .flat-button:hover {
      color: #000;
    }
    .flat-button span.bg {
      left: -5%;
      position: absolute;
      background: #08fdd8;
      width: 0;
      height: 100%;
      z-index: 3;
      -webkit-transition: 0.3s ease-out all;
      -o-transition: 0.3s ease-out all;
      transition: 0.3s ease-out all;
      -webkit-transform: skewX(-10deg);
      -ms-transform: skewX(-10deg);
      transform: skewX(-10deg);
    }
    .flat-button:hover span.bg {
      width: 110%;
    }
    .flat-button:hover span.text:after {
      background: #fff;
    }
    .flat-button span.base {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      left: 0;
      border: 1px solid #08fdd8;
    }
    .flat-button span.text {
      z-index: 4;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .flat-button span.text:after {
      content: "";
      width: 4px;
      height: 4px;
      right: 0;
      bottom: 0;
      background: #08fdd8;
      position: absolute;
      -webkit-transition: 0.3s ease-out all;
      -o-transition: 0.3s ease-out all;
      transition: 0.3s ease-out all;
      z-index: 5;
    }
    @media screen and (max-width: 1100px) {
      .flat-button {
        max-width: 200px;
        height: 45px;
        line-height: 45px;
      }
    }
    @media screen and (max-width: 600px) {
      .flat-button {
        max-width: 200px;
        height: 42px;
        line-height: 42px;
      }
    }
    @media screen and (max-width: 480px) {
      .flat-button {
        max-width: 170px;
        height: 40px;
        line-height: 40px;
      }
    }
    @media screen and (max-width: 380px) {
      .flat-button {
        letter-spacing: 3px;
      }
      .flat-button {
        max-width: 150px;
        height: 38px;
        line-height: 38px;
      }
    }
  }
  @media (max-width: 980px) {
    &.wm {
      min-height: calc(100vh - 100px);
    }
  }

  @media (max-width: 690px) {
    &.wm {
      min-height: calc(100vh - 100px);
      @media (max-width: 760px) {
        h1 {
          font-size: 4rem;
          line-height: 7rem !important;
        }
      }
      @media (max-width: 530px) {
        h1 {
          margin-top: 2rem;
          font-size: 3.4rem;
          line-height: 4.7rem !important;
        }
      }
    }
  }
`
