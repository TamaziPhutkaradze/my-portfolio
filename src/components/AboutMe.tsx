import Arrow from "../assets/arrow.svg";
import FolderIcon from "../assets/folderIcon.svg";
import GreenFolderIcon from "../assets/greenFolderIcon.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import EmailIcon from "../assets/emailIcon.svg";
import PhoneIcon from "../assets/phoneIcon.svg";

export default function AboutMe() {
  const [infoAccordionOpen, setAccordionOpen] = useState<boolean>(true);
  const [contactAccordionOpen, setContactAccordionOpen] =
    useState<boolean>(false);
  const [personalOpen, setPersonalOpen] = useState<boolean>(true);
  const [professionalOpen, setProfessionalOpen] = useState<boolean>(false);
  const textVariants = {
    initial: {
      x: "100%",
      opacity: 0,
    },
    in: {
      x: "0%",
      opacity: 1,
    },
  };
  const transition = {
    type: "spring",
    duration: 5,
  };
  const listVariants = {
    initial: {
      x: "-100%",
    },
    in: {
      x: "0%",
    },
  };
  const pageNameVariants = {
    initial: { opacity: -4 },
    in: { opacity: 1 },
  };
  return (
    <Main>
      <Wrapper>
        <PageName
          as={motion.p}
          initial="initial"
          animate="in"
          variants={pageNameVariants}
          transition={{ duration: 5 }}
        >
          _about-me
        </PageName>
        <List>
          <motion.div
            style={{ display: "flex", flexDirection: "column" }}
            initial="initial"
            animate="in"
            variants={listVariants}
            transition={transition}
          >
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
                  <NumberP>+(995) 597-96-70-05</NumberP>
                </PhoneNumber>
              </Box>
            )}
          </motion.div>
        </List>
        {personalOpen ? (
          <Container
            as={motion.div}
            initial="initial"
            animate="in"
            variants={textVariants}
            transition={transition}
          >
            <ParagraphTitle>// personal-info </ParagraphTitle>
            <TextAboutMe>
              Hey, I'm Tamazi from Batumi, Georgia. I'm purposeful and work hard
              every day for my development and progress. My dedication drives me
              to constantly improve and reach new heights. You can see my
              projects to get a glimpse of what I can do and the skills I've
              honed. I'm passionate about what I do, and I'm always pushing
              myself to be better.
            </TextAboutMe>
          </Container>
        ) : professionalOpen ? (
          <Container>
            <ParagraphTitle
              as={motion.div}
              initial="initial"
              animate="in"
              variants={textVariants}
              transition={transition}
            >
              // professional-info{" "}
            </ParagraphTitle>
            <TextAboutMe
              as={motion.div}
              initial="initial"
              animate="in"
              variants={textVariants}
              transition={transition}
            >
              I have been studying frontend development for more than a year.
              Currently working in IT support, I am eager to transition to a
              full-time web developer role. I am known for my flexibility and
              adaptability, always ready to learn new technologies and improve
              my skills. My passion for creating responsive, user-friendly web
              interfaces drives me to deliver high-quality results in every
              project.
            </TextAboutMe>
          </Container>
        ) : null}
      </Wrapper>
    </Main>
  );
}
// style-components
import {
  Main,
  Wrapper,
  PageName,
  List,
  Info,
  BtnName,
  Contact,
  InfoList,
  Personal,
  PersonalSpan,
  Professional,
  ProfessionalSpan,
  ArrowImg,
  EmailDiv,
  EmailImg,
  Email,
  ProfessionalArrow,
  PhoneNumber,
  PersonalArrow,
  ParagraphTitle,
  Container,
  TextAboutMe,
  NumberP,
  Box,
  ArrowForContact,
} from "../styles/AboutMeStyles";
