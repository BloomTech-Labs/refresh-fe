import React from 'react';
import styled from 'styled-components';

const ProfileCard = styled.div`
background: white;
width: 250px;
padding: 30px;
border-radius: 3px;
margin: 30px;
`


const UserCard = props => {


    return (
        <div>
            <ProfileCard>
                <h2>{`${props.info.first_name} ${props.info.last_name}`}</h2>
                <h2>{`Team: ${props.info.team_id === null ? props.info.team_id = 'None' : props.info.team_id}`}</h2>
                <h2>
                    {`${props.info.points === null ? props.info.points = 0 : props.info.points} POINTS`}
                </h2>
                <h2>{props.info.email}</h2>
            </ProfileCard>
        </div>
    )
}

export default UserCard;


