import styled from "styled-components";
import Arrow from "../assets/arrow.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import EmailIcon from "../assets/emailIcon.svg";
import PhoneIcon from "../assets/phoneIcon.svg";
import LinkIcon from "../assets/LinkIcon.svg";

export default function Contact() {
  const [contactIsOpen, setContactIsOpen] = useState<boolean>(false);
  const [secondBtnIsOpen, setSecondBtnIsOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <PageTitle>_contact</PageTitle>
      <Buttons>
        <Contacts onClick={() => setContactIsOpen(!contactIsOpen)}>
          <ArrowImg
            src={Arrow}
            open={contactIsOpen}
            animate={{ rotate: contactIsOpen ? 90 : 0 }}
            transition={{ duration: 0.7 }}
          />
          <BtnName>Contacts</BtnName>
        </Contacts>
        {contactIsOpen && (
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
        <FindMe onClick={() => setSecondBtnIsOpen(!secondBtnIsOpen)}>
          <ArrowImg
            src={Arrow}
            open={secondBtnIsOpen}
            animate={{ rotate: secondBtnIsOpen ? 90 : 0 }}
            transition={{ duration: 0.7 }}
          />
          <BtnName>find-me-also-in</BtnName>
        </FindMe>
        {secondBtnIsOpen && (
          <Socials animate={{ paddingLeft: 27 }} transition={{ duration: 2 }}>
            <a
              href="https://www.linkedin.com/in/achiphutkaradze/"
              target="_blank"
            >
              {" "}
              <LinkDiv>
                <img src={LinkIcon} /> Linkedin
              </LinkDiv>
            </a>{" "}
            <a
              href="https://www.facebook.com/achi.futkaradze.186/"
              target="_blank"
            >
              {" "}
              <LinkDiv>
                <img src={LinkIcon} />
                Facebook
              </LinkDiv>
            </a>
            <a
              href="https://www.instagram.com/achi_phutkaradze/"
              target="_blank"
            >
              {" "}
              <LinkDiv>
                <img src={LinkIcon} />
                Instagram
              </LinkDiv>
            </a>
          </Socials>
        )}
      </Buttons>
      <TextsContainer>
        <InputDiv>
          <InputName>_name:</InputName>
          <Input />
        </InputDiv>
        <InputDiv>
          <InputName>_email:</InputName>
          <Input />
        </InputDiv>
        <InputDiv>
          <InputName>_message:</InputName>
          <TextArea />
        </InputDiv>
      </TextsContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #011627;
  overflow: hidden auto;
`;
const PageTitle = styled.div`
  padding: 28px 21px;
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
const Contacts = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
const FindMe = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const BtnName = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 400;
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
const Socials = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-bottom: 16px;
`;
const NumberP = styled.p`
  color: #607b96;
`;
const LinkDiv = styled(motion.div)`
  display: flex;
  gap: 9px;
  align-items: center;
  color: #607b96;
`;
const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 21px 38px;
  gap: 15px;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InputName = styled.p`
  color: #607b96;
  font-size: 16px;
  font-weight: 400;
`;
const Input = styled.input`
  width: 100%;
  height: 41px;
  background-color: #011221;
  color: #ffff;
  border-radius: 10px;
  padding-left: 15px;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 145px;
  background-color: #011221;
  border-radius: 10px;
  resize: none;
  padding: 15px;
  color: #ffff;
  font-size: 16px;
  font-weight: 400;
`;
