import styled from "styled-components";
import TwitterIcon from "../assets/twitterIcon.svg";
import FbIcon from "../assets/fbIcon.svg";
import GithubIcon from "../assets/githubIcon.svg";
import { motion } from "framer-motion";

export default function Footer() {
  const footerVariants = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    in: {
      opacity: 1,
      x: "0%",
    },
    out: {
      opacity: 0,
      x: "50%",
    },
  };
  const transition = {
    type: "spring",
    duration: 5,
  };
  return (
    <FooterDiv>
      <Box
        as={motion.div}
        // transition={{ duration: 2 }}
        // animate={{ opacity: 1 }}
        initial="initial"
        animate="in"
        exit="out"
        variants={footerVariants}
        transition={transition}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
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
  padding: 0 0 0 25px;
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
  @media screen and (min-width: 1280px) {
    font-size: 21px;
  }
`;
const Twitter = styled.img`
  border-right: 1px solid rgb(30, 45, 61);
  padding-right: 16px;
  width: 32px;
  height: 50px;
  @media screen and (min-width: 1280px) {
    width: 45px;
  }
`;
const FaceBook = styled.img`
  border-right: 1px solid rgb(30, 45, 61);
  padding-right: 16px;
  width: 25px;
  height: 50px;
  @media screen and (min-width: 1280px) {
    width: 32px;
  }
`;
const Github = styled.img`
  padding-right: 16px;
  width: 32px;
  height: 50px;
  @media screen and (min-width: 1280px) {
    width: 45px;
  }
`;
const Sites = styled.div`
  display: flex;
  gap: 16px;
`;
