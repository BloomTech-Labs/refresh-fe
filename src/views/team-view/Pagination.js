// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// DUMMY DATA
const dummy = [
    {
        item: 1
    },
    {
        item: 2
    },
    {
        item: 3
    },
    {
        item: 4
    },
    {
        item: 5
    }
]

// COMPONENT
const Pagination = () => {
    return (
        <>
        <PaginationWrapper>

        </PaginationWrapper>
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