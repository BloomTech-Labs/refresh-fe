import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";
import waves from '../../../images/wavyLines.svg';


const EditContainer = styled.div`
  position: relative;
  width: 37.5rem;
  height: 81.2rem;
  overflow-x: hidden;
  background: #4742bc;
  background-image: url (${waves});
`;

const ArrowVector = styled.div`
  position: absolute;
  left: 8.53%;
  right: 89.07%;
  top: 7.64%;
  bottom: 90.52%;

  /* primary / disabled */

  background: #ccc9ff;
`;
const EditProfText = styled.p`
  position: absolute;
  left: 13.5rem;
  top: 8rem;
  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 2.2rem; /*or 22px */
  display: flex;
  align-items: flex-end;
  text-align: center;
  letter-spacing: 0.2rem;
  color: #e6e6e6;
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 16rem;
  top: 12rem;
  border-radius: 50%;
  height: 6.5rem;
  width: 6.5rem;
  background: url(.jpg), #c4c4c4;
`;
const CameraVector = styled.div`
  position: absolute;
  left: 4.8rem;
  right: 49.2%;
  top: 70%;
  bottom: 64.75%;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  /* main / side */

  background: #3d3b91;

  /* card / shadow */

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
`;

const NameText = styled.p`
  position: absolute;
  left: 3rem;
  top: 22rem;
  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: 0.035em;

  /* main / menu text */

  color: #b8b7e1;
`;
const RoleText = styled.p`
  position: absolute;
  left: 3rem;
  top: 32rem;
  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.035em;

  /* main / menu text */

  color: #b8b7e1;
`;

const PendingText = styled.p`
  position: absolute;
  left: .47rem;
  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: center;
  color: #fddcdc;
`;
const DescriptionText = styled.p`
  position: absolute;
  left: 3rem;
  top: 42rem;
  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.035em;

  /* main / menu text */

  color: #b8b7e1;
`;
const NameForm = styled.div`
  position: absolute;
  left: 3rem;
  top: 25rem;
  width: 31rem;
  height: 5rem;

  /* main / side */

  background: #3d3b91;
  /* input shadow */

  box-shadow: 0px 1.5rem 3.5rem rgba(61, 59, 145, 0.15);
  border-radius: 0.3rem;
`;
const RoleForm = styled.div`
position: absolute;
left: 3rem;
top: 35rem;
width: 31rem;
height: 5rem;

  /* main / side */

  background: #3d3b91;
  /* input shadow */

  box-shadow: 0px 15px 35px rgba(61, 59, 145, 0.15);
  border-radius: 3px;
`;

const PendingContainer = styled.div`
  position: absolute;
  left: 10.7rem;
  top: 32.5rem;
  width: 5.2rem;
  height: 1.25rem;
  background: #ca6162;
  border-radius: .9rem;
`;
const DescriptionForm = styled.div`
position: absolute;
left: 3rem;
top: 45rem;
width: 31rem;
height: 5rem;

  /* main / side */

  background: #3d3b91;
  /* input shadow */

  box-shadow: 0px 15px 35px rgba(61, 59, 145, 0.15);
  border-radius: 3px;
`;

const SubmitChangeBtn = styled.button`
position: absolute;
left: 7.6rem;
top: 56rem;
width: 21.4rem;
height: 4.7rem;
bottom: 2rem;
/* primary / button color */
background: #e05cb3;
border-radius: .5rem;
`;

const SubmitChangeText = styled.p`
  position: absolute;
  left: 1.6rem;
  top: 1rem;

  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  text-align: center;
  letter-spacing: 0.035em;
  /* main / TEXT */

  color: #e6e6e6;
`;

const ProfileEdit = () => {
  // user context
  const activeUser = useContext(UserContext);
  // const userRole = activeUser.user_roles;
  // const roleTitle = userRole ? userRole[userRole.length - 1].role : "";
  // // set user role
  // if (!activeUser.roleTitle && roleTitle) {
  //   activeUser.setUser({ ...activeUser, roleTitle });
  // }
  return (
    <>
      <EditContainer src={waves}/>
        <ArrowVector />
        <EditProfText>Edit Profile</EditProfText>
        <ImageContainer src={activeUser.avatar}>
          <CameraVector />
        </ImageContainer>
        <NameText>NAME</NameText>
        <NameForm className='name-field'/>
        <RoleText>ROLE</RoleText>
        <RoleForm className='form-field' />
        <DescriptionText>DESCRIPTION</DescriptionText>
        <DescriptionForm className='description-field'/>
        <SubmitChangeBtn>
          <SubmitChangeText>Submit changes to profile</SubmitChangeText>
        </SubmitChangeBtn>
        <PendingContainer>
          <PendingText>PENDING</PendingText>
        </PendingContainer>
    </>
  );
};

export default ProfileEdit;
