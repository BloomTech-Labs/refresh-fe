// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';

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
            {dummy.map(slide => {
                return <Dot />
            })}
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
    justify-content: center;
    align-items: center;
`

const Dot = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 100px;
    background-color: #716FC3;
    margin: 0.25rem;

        .active {
            background-color: #E05CB3;
        }
`

// EXPORTS
export default Pagination;