import { createGlobalStyle } from 'styled-components'

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
    border-radius: 10px;
    &:hover,
    &:focus {
        background-color: var(--yellow-tint);
    }
    &.inline-link {
        ${({ theme }) => theme.mixins.inlineLink};
    }
}
`

export default GlobalStyle;