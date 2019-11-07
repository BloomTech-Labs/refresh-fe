// IMPORTS
// styled components
import { createGlobalStyle } from 'styled-components';

// Global Theme Stylesheet
const GlobalStyle = createGlobalStyle`
    // we can add any global styles or theming that we want here
    // these are basic placeholders for global reset styles -JC 
    body {
        font-size: 1rem;

        h1,h2,h3,h4,h5 {
            font-size: 2rem;
        }
    }
`

// EXPORT
export default GlobalStyle;