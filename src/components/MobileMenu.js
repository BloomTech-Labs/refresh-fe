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

    // handlers
    const menuToggle = () => {
        menu.status === 'closed' ?
        setMenu({ ...menu, status: 'open' }) :
        setMenu({ ...menu, status: 'closed' })
    };

    // RENDER
    return (
        <Wrapper>
            <Container>
                <PlaceholderButton onClick={menuToggle}>Hi</PlaceholderButton>
                {console.log(menu)}
            </Container>
        </Wrapper>
    );

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

const Drawer = styled.div`
    width: 70vw;
    height: 100vh;
    position: fixed;
    ${test.blueBg}
`

// EXPORT
export default MobileMenu;