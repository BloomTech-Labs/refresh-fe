import React from 'react';
import styled from 'styled-components';


const Rectangle21 = styled.div`
position: absolute;
width: 154px;
height: 68px;
left: 51px;
top: 228px;

/* #EAEAEA - Background Grey */

background: #EAEAEA;
border-radius: 3px;
`
const ContactText = styled.h5`
position: absolute;
width: 96px;
height: 52px;
left: 56px;
top: 213px;


/* h5/Regular 18px */

font-family: 'Roboto', sans-serif;;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;

/* #959595 - Mid Grey 2 */

color: #959595;
`
//This component contains user contact info e.g. user handle etc...
const ContactCard = () => {
  
    return (
    <div>   
    <Rectangle21/>  
      <ContactText>
        Contact
        Information
      </ContactText>  
      </div> 
      
  );
    
}

export default ContactCard;