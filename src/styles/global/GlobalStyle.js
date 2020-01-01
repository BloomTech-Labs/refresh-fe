// IMPORTS
// styled components
import { createGlobalStyle } from 'styled-components';
import waves from "../../images/Onboarding/waves.svg";

// Global Theme Stylesheet
// Global Theme Stylesheet
const GlobalStyle = createGlobalStyle`
    // we can add any global styles or theming that we want here
    // these are basic placeholders for global reset styles -JC 
    html{
        font-size: 62.5%;
    }
    body {
        width: 37.5rem;
        height: 81.2rem;
        font-family: 'Catamaran', sans-serif;
        font-size: 1.25rem;
        background-color: #4742BC;
        background-image:url(${waves});
        overflow-x: hidden;
        h1,h2,h3,h4,h5 {
            font-size: 2rem;
        }
    };
    *{
        box-sizing:border-box;
    }
`

// EXPORT
export default GlobalStyle;
