import styled from "styled-components";
import Arrow from "../assets/arrow.svg";
import FolderIcon from "../assets/folderIcon.svg";
import GreenFolderIcon from "../assets/greenFolderIcon.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import EmailIcon from "../assets/emailIcon.svg";
import PhoneIcon from "../assets/phoneIcon.svg";
export default function AboutMe() {
  const [infoAccordionOpen, setAccordionOpen] = useState<boolean>(false);
  const [contactAccordionOpen, setContactAccordionOpen] =
    useState<boolean>(false);
  const [personalOpen, setPersonalOpen] = useState<boolean>(false);
  const [professionalOpen, setProfessionalOpen] = useState<boolean>(false);

  return (
    <Main>
      <Wrapper>
        <PageName>_about-me</PageName>
        <List>
          <Info onClick={() => setAccordionOpen(!infoAccordionOpen)}>
            <ArrowImg
              src={Arrow}
              open={infoAccordionOpen}
              animate={{ rotate: infoAccordionOpen ? 90 : 0 }}
              transition={{ duration: 0.7 }}
            />
            <BtnName>Info</BtnName>
          </Info>
          {infoAccordionOpen && (
            <InfoList
              animate={{ paddingTop: 16, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Personal
                onClick={() => {
                  setPersonalOpen(true);
                  setProfessionalOpen(false);
                }}
              >
                <PersonalArrow
                  src={Arrow}
                  isPersonalOpen={personalOpen}
                  animate={{ rotate: personalOpen ? 90 : 0 }}
                  transition={{ duration: 0.7 }}
                />
                <img src={FolderIcon} />
                <PersonalSpan>personal</PersonalSpan>
              </Personal>
              <Professional
                onClick={() => {
                  setProfessionalOpen(true);
                  setPersonalOpen(false);
                }}
              >
                <ProfessionalArrow
                  src={Arrow}
                  isProfessionalOpen={professionalOpen}
                  animate={{ rotate: professionalOpen ? 90 : 0 }}
                  transition={{ duration: 0.7 }}
                />
                <img src={GreenFolderIcon} />
                <ProfessionalSpan>professional</ProfessionalSpan>
              </Professional>
            </InfoList>
          )}
          <Contact
            onClick={() => setContactAccordionOpen(!contactAccordionOpen)}
          >
            <ArrowForContact
              src={Arrow}
              isOpen={contactAccordionOpen}
              animate={{ rotate: contactAccordionOpen ? 90 : 0 }}
              transition={{ duration: 0.7 }}
            />
            <BtnName>contacts</BtnName>
          </Contact>
          {contactAccordionOpen && (
            <Box>
              <EmailDiv
                as={motion.div}
                transition={{ duration: 2 }}
                animate={{ paddingTop: 16 }}
              >
                <EmailImg src={EmailIcon} />
                <Email>achifutkaradze9@gmail.com</Email>
              </EmailDiv>
              <PhoneNumber>
                <img src={PhoneIcon} />
                <NumberP>597-96-70-05</NumberP>
              </PhoneNumber>
            </Box>
          )}
        </List>
        {personalOpen ? (
          <Container>
            <ParagraphTitle>// personal-info </ParagraphTitle>
            <TextAboutMe>
              I have 5 years of experience in web development lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              officia deserunt mollit anim id est laborum.
            </TextAboutMe>
          </Container>
        ) : professionalOpen ? (
          <Container>
            <ParagraphTitle>// professional-info </ParagraphTitle>
            <TextAboutMe>
              I have 5 years of experience in web development lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              officia deserunt mollit anim id est laborum.
            </TextAboutMe>
          </Container>
        ) : null}
      </Wrapper>
    </Main>
  );
}
const Main = styled.div`
  background-color: #011627;
`;
const Wrapper = styled.div`
  padding: 21px 6px 38px 9px;
  height: 100vh;
`;
const PageName = styled.p`
  color: white;
  font-size: clamp(1rem, 2.5vw, 2rem);
  padding-left: 18px;
`;
const List = styled.div`
  padding-top: 29px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const Info = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
const BtnName = styled.span`
  color: white;
  font-size: 16px;
`;
const Contact = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
const InfoList = styled(motion.div)<{}>`
  padding-left: 27px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
`;
const Personal = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const PersonalSpan = styled.span`
  color: #607b96;
`;
const Professional = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const ProfessionalSpan = styled.span`
  color: #607b96;
`;
const ArrowImg = styled(motion.img)<{ open: boolean }>`
  transform: ${(props) => (props.open === true ? "rotate(90deg)" : "")};
`;
const EmailDiv = styled.div`
  display: flex;
  gap: 8px;
`;
const EmailImg = styled.img``;
const Email = styled.p`
  color: #607b96;
  font-size: 16px;
`;
const PhoneNumber = styled.div`
  display: flex;
  gap: 8px;
`;
const Box = styled.div`
  padding-bottom: 16px;
  padding-left: 27px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const NumberP = styled.p`
  color: #607b96;
`;
const ArrowForContact = styled(motion.img)<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "")};
`;
const Container = styled.div`
  padding: 38px 27px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
const ParagraphTitle = styled.p`
  color: white;
  font-size: 16px;
`;
const TextAboutMe = styled.div`
  font-size: 16px;
  color: #607b96;
`;
const PersonalArrow = styled(motion.img)<{ isPersonalOpen: boolean }>`
  transform: ${(props) =>
    props.isPersonalOpen === true ? "rotate(90deg)" : ""};
`;
const ProfessionalArrow = styled(motion.img)<{ isProfessionalOpen: boolean }>`
  transform: ${(props) =>
    props.isProfessionalOpen === true ? "rotate(90deg)" : ""};
`;
