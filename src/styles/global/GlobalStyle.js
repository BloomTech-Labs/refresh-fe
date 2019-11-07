// IMPORTS
// styled components
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Global Theme Stylesheet
const GlobalStyle = createGlobalStyle`
    // we can add any global styles or theming that we want here
    // these are basic placeholders for global reset styles -JC 
    html{
        font-size:62.5%;
        height:100%;
    }
    body {
        height:100%;
        h1,h2,h3,h4,h5 {
            font-size: 2rem;
        }
    };
    *{
        box-sizing:border-box;
    }
`
//Onboarding Reusable Styles 
export const OnBoardWrapper = styled.div`
background-color: #3a3699;
width: 100vw;
height:100vh;
max-height:100vh;
`

export const OnBoardContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
font-family: 'Catamaran', sans-serif;
margin:auto;
line-height:1.5;
background-color: #3a3699;
color: #7f7cca;
`
export const Refresh = styled.h1`
font-weight: bold;
font-size: 5rem;
line-height: 82px;
letter-spacing: 3.5px;
color: #FFFFFF;
`

export const OnboardTxt = styled.p`
font-size: 2rem;
line-height: 33px;
letter-spacing: 0.035em;

color: #CCC9FF;
`
export const Button = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width:100%;
  text-align:center;
  margin: auto;
  background: #6487ff;
  color: white;
  font-size:1.6rem;
}
`
export const ButtonNoColor = styled.a`
    margin:auto;
    font-size:1.6rem;
`

export const FlexHolder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin:auto;
align-items: flex-start;
width:100%;
padding: 2.5rem 4rem;
`

export const Logo = styled.img`
width:100%;
max-width:82%;
height:auto;
margin:auto;`
// EXPORT
export default GlobalStyle;

