import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'font-file-82132';
	src: url(data:font/opentype;base64,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);
	font-style: normal;
	font-weight: 500;
	font-display: swap;
}

:root {
  --primary-color: #1d1d1d;
  --white: #e6f1ff;
  --textLink: #08fdd8;
  --fz-heading: 5.1rem;
  --fz-lg: 2.5rem;
}

*,
::before,
::after {
	box-sizing: inherit;
}

html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    	height: 100%;
  }

  body {
      margin: 0px;
      width: 100%;
      line-height: 1.3;
      min-height: 100%;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      background-color: var(--primary-color);
      color: var(--white);
      font-family: font-file-82132;

  }

  ::selection {
    background: var(--textLink);
    color: var(--white);
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: var(--white);
  }
  a:active,
  a:hover {
    outline-width: 0;
    color: var(--textLink);
    text-decoration: none;
  }

  h1 .rubberBand:hover,
  h2 .rubberBand:hover,
  h3 .rubberBand:hover,
  h4 .rubberBand:hover {
    animation-name: rubberBand;
    color: #08fdd8;
  }

  .wm h1 {
    color: #fff;
    margin: 0;
    font-weight: 400;
    font-size: var(--fz-heading);
    line-height: 8.7rem;
    position: relative;
  }

  span.rubberBand {
    display: inline-block;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
  }

  span.rubberBand.animated {
    -webkit-animation-name: rubberBand;
    animation-duration: 1s;
    animation-name: rubberBand;
  }

  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  .line {
    font-size: var(--fz-lg);
    width: 100%;
  }

  @media (max-width: 760px) {
    .line {
      font-size: 2rem !important;
    }
  }

  @media (min-width: 530px) {
    .line {
      animation: typewriter 3s steps(36), cursor 650ms steps(36) infinite;
      font-size: var(--fz-lg);
      border-right: solid 2px #f05365;
      overflow: hidden;
      white-space: nowrap;
      width: 32ch;
    }
  }

  /* typewriter animation */
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 32ch;
    }
  }
  /* cursor animation */
  @keyframes cursor {
    100% {
      border-right-color: transparent;
    }
  }

  /* SiderBar with social and contact */
.orientation-div {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: #f05365;

  
}
@media (max-width: 1080px) {
  .orientation-div {
    left: 20px;
    right: auto;
  }
}
@media (max-width: 768px) {
  .orientation-div {
    display: none;
  }
}
.orientation-svg {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.orientation-svg::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: #f05365;
}
.orientation-svg li:last-of-type {
  margin-bottom: 20px;
}
.orientation-svg li a {
  padding: 10px;
}
.orientation-svg li a:hover,
.orientation-svg li a:focus {
  transform: translateY(-3px);
}
.orientation-svg li a svg {
  width: 20px;
  height: 20px;
}

.email__location {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: #f05365;
}
@media (max-width: 1080px) {
  .email__location {
    left: auto;
    right: 20px;
  }
}
@media (max-width: 768px) {
  .email__location {
    display: none;
  }
}
.email__Styled {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.email__Styled::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: #f05365;
}
.email__Styled a {
  margin: 20px auto;
  padding: 10px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 12px;
  letter-spacing: 0.1em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  text-decoration: none;
}
.email__Styled a:hover,
.email__Styled a:focus {
  transform: translateY(-3px);
  text-decoration: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

  
`
export default GlobalStyle
