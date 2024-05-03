import styled from "styled-components";
import TwitterIcon from "../assets/twitterIcon.svg";
import FbIcon from "../assets/fbIcon.svg";
import GithubIcon from "../assets/githubIcon.svg";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <FooterDiv>
      <Box
        as={motion.div}
        transition={{ duration: 2 }}
        animate={{ opacity: 1 }}
      >
        <FooterP>find me in:</FooterP>
        <Twitter src={TwitterIcon} />
        <FaceBook src={FbIcon} />
        <Github src={GithubIcon} />
      </Box>
    </FooterDiv>
  );
}
const FooterDiv = styled.footer`
  padding: 13px 0 15px 25px;
  background-color: #011627;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid rgb(30, 45, 61);
`;
const Box = styled.div`
  display: flex;
  gap: 16px;
  opacity: 0;
`;
const FooterP = styled.p`
  font-size: 16px;
  color: #607b96;
  border-right: 1px solid grey;
  padding-right: 65px;
`;
const Twitter = styled.img`
  border-right: 1px solid grey;
  padding-right: 16px;
  width: 32px;
`;
const FaceBook = styled.img`
  border-right: 1px solid grey;
  padding-right: 16px;
  width: 25px;
`;
const Github = styled.img`
  padding-right: 16px;
  width: 32px;
`;
