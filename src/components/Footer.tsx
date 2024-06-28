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
        <div>
          <FooterP>find me in:</FooterP>
        </div>
        <Sites>
          <a href="https://x.com/TamaziPutk61978" target="_blank">
            <Twitter src={TwitterIcon} />
          </a>
          <a
            href="https://www.facebook.com/achi.futkaradze.186/"
            target="_blank"
          >
            <FaceBook src={FbIcon} />
          </a>
          <a href="https://github.com/TamaziPhutkaradze" target="_blank">
            <Github src={GithubIcon} />
          </a>
        </Sites>
      </Box>
    </FooterDiv>
  );
}
const FooterDiv = styled.footer`
  padding: 13px 0 15px 25px;
  background-color: rgb(1, 22, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid rgb(30, 45, 61);
  overflow: hidden;
`;
const Box = styled.div`
  display: flex;
  gap: 16px;
  opacity: 0;
  justify-content: space-between;
`;
const FooterP = styled.p`
  font-size: 16px;
  color: #607b96;
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
const Sites = styled.div`
  display: flex;
  gap: 16px;
`;
