import React from 'react';
import styled from 'styled-components';


const Rectangle47 = styled.div`
position: absolute;
width: 167px;
height: 60px;
left: 30px;
top: 222px;

/* primary / disabled green */

background: #D4F7E3;
/* mobile / dashboard dropshadow */

box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 2px;
`
const ContactInformation = styled.h5`
position: absolute;
width: 107px;
height: 28px;
left: 50px;
top: 218px;

font-family: 'Catamaran', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 120%;
/* or 16px */

letter-spacing: 0.02em;

/* primary / active */

color: #28C96C;
`

//This component contains user contact info e.g. user handle etc...
const ContactCard = () => {
  
    return (
    <div>   
    
    <Rectangle47/>  
    
      <ContactInformation>
        contact
        information
      </ContactInformation>  
      </div> 
      
  );
    
}

export default ContactCard;