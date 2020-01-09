import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";

// components
import Icon from "../../../components/atoms/icon/icon";
import Input from "../../../components/atoms/input/input";
import Button from "../../../components/atoms/button/button";
import Text from "../../../components/atoms/text/text";
import Select from "../../../components/atoms/select/select";

// images
import leftArrow from "../../../images/profile/leftArrow.svg";
import waves from "../../../images/Onboarding/waves.svg";
import editImage from "../../../images/profile/edit_img.svg";
//import DropdownMenu from './DropDownMenu';

const EditContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${waves});
`;

const ArrowVector = styled.div`
  position: absolute;
  left: 3.2rem;
  top: 6.2rem;
`;
const EditProfText = styled.p`
  height: 2.2rem;
  width: 37.5rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 9.7rem;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 2.2rem; /*or 22px */
  text-align: center;
  letter-spacing: 0.2rem;
  color: #e6e6e6;
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 16rem;
  top: 14.1rem;
  border-radius: 50%;
  height: 6.4rem;
  width: 6.4rem;
  background: #c4c4c4;
`;
const UserImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  height: 6.4rem;
  width: 6.4rem;
`;
const CameraVector = styled.div`
  position: absolute;
  left: 4.8rem;
  right: 49.2%;
  top: 70%;
  bottom: 64.75%;

  /* card / shadow */

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
`;

const NameText = styled.p`
  position: absolute;
  left: 3.2rem;
  top: 23.5rem;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: 0.035em;

  /* main / menu text */

  color: #b8b7e1;
`;
const RoleText = styled.p`
  position: absolute;
  left: 3.2rem;
  top: 33.8rem;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.035em;

  /* main / menu text */

  color: #b8b7e1;
`;

const PendingText = styled.p`
  position: absolute;
  left: 0.675rem;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.6rem;
  text-align: center;
  color: #fddcdc;
`;
const DescriptionText = styled.p`
  position: absolute;
  left: 3.1rem;
  top: 44.1rem;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.035em;

  /* main / menu text */

  color: #b8b7e1;
`;

const PendingContainer = styled.div`
  position: absolute;
  left: 10.7rem;
  top: 34.3rem;
  width: 5.3rem;
  height: 1.5rem;
  background: #ca6162;
  border-radius: 0.9rem;
`;

const SubmitChangeBtn = styled.button`
  position: absolute;
  left: 9.2rem;
  top: 56rem;
  width: 21.4rem;
  height: 4.7rem;
  bottom: 2rem;
  /* primary / button color */
  background: #e05cb3;
  border-radius: 0.5rem;
`;

const SubmitChangeText = styled.p`
  position: absolute;
  left: 1.6rem;
  top: 1rem;
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
  const userRole = activeUser.user_roles;
  const roleTitle = userRole ? userRole[userRole.length - 1].role : "";
  // set user role
  if (!activeUser.roleTitle && roleTitle) {
    activeUser.setUser({ ...activeUser, roleTitle });
  }

  console.log({activeUser});
  
  return (
    <>
      <EditContainer className="edit-container" />
      <ArrowVector>
        <Link to="/dashboard">
          <Icon svg={leftArrow} height={0.9} width={1.5} />
        </Link>
      </ArrowVector>
      <EditProfText>Edit Profile</EditProfText>
      <ImageContainer>
        <UserImage src={activeUser.avatar} />
        <CameraVector>
          <Icon svg={editImage} height={1.9} width={1.9} />
        </CameraVector>
      </ImageContainer>
      <NameText>NAME</NameText>
      <Input
        className="name-field"
        position={"absolute"}
        top={26.1}
        left={3.2}
        height={5.2}
        width={31.1}
        placeholder={`  ${activeUser.display_name}`}
        color={"rgba(204, 201, 255, 0.4)"}
      />
      <RoleText>ROLE</RoleText>
      {/* Need <select> */}
      <Select
        className="form-field"
        position={"absolute"}
        top={36.4}
        left={3.2}
        height={5.2}
        width={31.1}
        color={"rgba(204, 201, 255, 0.4)"}
        placeholder={`  ${activeUser.roleTitle}`}
      >
        <option>{activeUser.roleTitle}</option>
        <option>Student</option>
        <option>Team Lead</option>
        <option>Section Lead</option>
        <option>Admin</option>
      </Select>
      <DescriptionText>Description</DescriptionText>
      <Input
        className="description-field"
        position={"absolute"}
        top={46.7}
        left={3.2}
        height={5.2}
        width={31.1}
        placeholder={`  ${activeUser.bio}`}
      />

      {/* Link to be replaced w/ submit logicno */}
      <Link to="/dashboard">
        <Button
          backgroundColor={"#E05CB3"}
          fontSize={1.6}
          letterSpacing={0.035}
          position={"absolute"}
          left={6.2}
          top={61.4}
          // onClick={needsSubmitHandler}
        >
          <Text
            text={`Submit changes to profile`}
            fontSize={1.6}
            letterSpacing={0.035}
          />
        </Button>
      </Link>
      <PendingContainer>
        <PendingText>PENDING</PendingText>
      </PendingContainer>
    </>
  );
};

export default ProfileEdit;
