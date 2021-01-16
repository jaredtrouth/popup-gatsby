import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --red: #ed3825;
    --navy: #002156;
    --yellow: #ffe001; 
    --yellow-tint: rgba(255, 224, 1, 0.33);
    
    --font-sans: 'Kanit', -apple-system, system-ui, sans-serif;
    --font-bold: 'DayPosterBlack', sans-serif;
    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
}


html {
    box-sizing: border-box;
    width: 100%;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    margin: 0;
    width: 100%;
    min-height: 100%
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--red);
    color: var(--navy);
    font-family: var(--font-sans);
    font-size: 20px;
    scroll-behavior: smooth;
    
    @media (max-width: 480px) {
        font-size: 18px;
    }
    
    &.hidden {
        overflow: hidden;
    }
    
    &.blur {
        overflow: hidden;
        
        header {
            background-color: transparent;
        }
    }
}

main {
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    padding: 0 2px;
    &.inline-link {
        ${({ theme }) => theme.mixins.inlineLink};
    }
}

/* Fade down */
  .fadeDown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadeDown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
`;

export default GlobalStyle;
