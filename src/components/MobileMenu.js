// IMPORTS
// react
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../styles/global/Mixins'

// COMPONENT
const MobileMenu = () => {
    // state hooks
    const [menu, setMenu] = useState({
        status: 'closed'
    });

    // use effect
    // todo

    if (menu.status === 'open') {

    } else {
        return (
            <Wrapper>
                <Container>
                    <PlaceholderButton>Hi</PlaceholderButton>
                </Container>
            </Wrapper>
        );
    }

};

// STYLED COMPONENTS
const Wrapper = styled.div`
    width: 100vw;
`

const Container = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: 5rem;
    ${flex.flexRowNoWrapAround}
    ${test.redBg}
`

const PlaceholderButton = styled.button`
    width: 3rem;
    height: 3rem;
    margin: 2rem auto 2rem 2rem;
`

// EXPORT
export default MobileMenu;