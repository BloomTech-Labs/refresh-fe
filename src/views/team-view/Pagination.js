// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const Pagination = () => {
    return (
        <>
        hi from pagination
        </>
    );
};

// STYLED COMPONENTS
const PaginationWrapper = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`

const Dot = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 100px;
    background-color: #FFF;
`

// EXPORTS
export default Pagination;