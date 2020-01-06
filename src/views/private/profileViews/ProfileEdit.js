import React from "react";
import styled from "styled-components";
//import DropdownMenu from './DropDownMenu';

const EditContainer = styled.div`
  border: 1px solid red;
  position: relative;
  width: 37.5rem;
  height: 81.2rem;
  overflow-x: hidden;
  background: #4742bc;
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
  left: 5.5rem;
  right: 1rem;
  top: 16.95%;
  bottom: 85.34%;
  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 2.2rem; /*or 22px */
  display: flex;
  align-items: flex-end;
  text-align: center;
  letter-spacing: 0.035rem;
  color: #e6e6e6;
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 42.67%;
  right: 40.27%;
  top: 26%;
  bottom: 74.75%;
  border-radius: 50%;
  border: 1px solid black;
  height: 4.5rem;
  width: 4.5rem;
  background: url(.jpg), #c4c4c4;
`;
const CameraVector = styled.div`
  position: absolute;
  left: 75.73%;
  right: 49.2%;
  top: 70%;
  bottom: 64.75%;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  /* main / side */

  background: #3d3b91;

  /* card / shadow */

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
`;

const NameText = styled.p`
  position: absolute;
  left: 8.27%;
  right: 79.47%;
  top: 44%;
  bottom: 67.86%;

  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.035em;

  /* main / menu text */

  color: #b8b7e1;
`;
const RoleText = styled.p`
  position: absolute;
  left: 8.27%;
  right: 80.53%;
  top: 67%;
  bottom: 55.17%;

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
  width: 3.5rem;
  height: 0.5rem;
  padding-top: .35rem;
  margin: 0 auto;
  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: .1rem;
  line-height: .16rem;
  text-align: center;

  color: #fddcdc;
`;
const DescriptionText = styled.p`
  position: absolute;
  left: 8.27%;
  right: 68.8%;
  top: 90%;
  bottom: 42.49%;

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
  left: 8%;
  right: 8.53%;
  top: 52.14%;
  width: 85%;
  height: 10%;

  /* main / side */

  background: #3d3b91;
  /* input shadow */

  box-shadow: 0px 1.5rem 3.5rem rgba(61, 59, 145, 0.15);
  border-radius: 0.3rem;
`;
const RoleForm = styled.div`
  position: absolute;
  left: 8%;
  right: 8.53%;
  top: 75%;
  bottom: 0%;
  width: 85%;
  height: 10%;

  /* main / side */

  background: #3d3b91;
  /* input shadow */

  box-shadow: 0px 15px 35px rgba(61, 59, 145, 0.15);
  border-radius: 3px;
`;

const PendingContainer = styled.div`
  position: absolute;
  left: 24.53%;
  right: 61.33%;
  top: 69.2%;
  bottom: 55.91%;
  width: 3.5rem;
  height: 0.8rem;

  background: #ca6162;
  border-radius: 9px;
`;
const DescriptionForm = styled.div`
  position: absolute;
  left: 8%;
  right: 8.53%;
  top: 98.9%;
  bottom: 0%;
  width: 85%;
  height: 10%;

  /* main / side */

  background: #3d3b91;
  /* input shadow */

  box-shadow: 0px 15px 35px rgba(61, 59, 145, 0.15);
  border-radius: 3px;
`;

const SubmitChangeBtn = styled.button`
  position: absolute;
  left: 5.2rem;
  top: 38rem;
  width: 14.7rem;
  height: 3.2rem;

  /* primary / button color */

  background: #e05cb3;
  /* mobile / dashboard dropshadow */

  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  border-radius: 5px;
`;

const SubmitChangeText = styled.p`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 33.93%;
  bottom: 33.93%;

  font-family: "Catamaran", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  text-align: center;
  letter-spacing: 0.035em;
  padding-top: 0rem;
  width: 100%;
  height: 2rem;
  margin: 0 auto;
  /* main / TEXT */

  color: #e6e6e6;
`;

const ProfileEdit = () => {
  return (
    <>
      <EditContainer />
      <form>
        <ArrowVector />
        <EditProfText>Edit Profile</EditProfText>
        <ImageContainer>
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
      </form>
    </>
  );
};

export default ProfileEdit;
