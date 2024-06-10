import styled from "styled-components";
import { motion } from "framer-motion";
import CodeImg2 from "../assets/DesktopImgs/mainPageImg-2.svg";
import CodeImg3 from "../assets/DesktopImgs/mainPageImg-3.svg";
import CodeImg4 from "../assets/DesktopImgs/mainPageImg-4.svg";
import bgImg from "../assets/DesktopImgs/bg-color-desktop.png";

export default function Hello(props: { windowWidth: number }) {
  console.log(props.windowWidth);
  return (
    <>
      <Main
        animate={{ paddingBottom: props.windowWidth < 1280 ? 83 : 0 }}
        transition={{ duration: 2 }}
      >
        <ForDesktopVersion>
          <TextDiv
            as={motion.div}
            transition={{ duration: 2 }}
            animate={{
              paddingTop: props.windowWidth < 1280 ? 96 : 0,
              opacity: 1,
            }}
          >
            <Hi>Hi all. I am</Hi>
            <Name>Tamazi Phutkaradze</Name>
            <Role> &gt; Front-end developer</Role>
          </TextDiv>
          <Github>
            <Find>// find my profile on Github:</Find>
            <GithubLink>
              <span style={{ color: "#4D5BCE" }}>const</span>{" "}
              <span style={{ color: "#43D9AD" }}>githubLink</span> = {""}
              <a
                href="https://github.com/TamaziPhutkaradze"
                target="_blank"
                style={{ color: "inherit" }}
              >
                https://github.com/TamaziPhutkaradze
              </a>
            </GithubLink>
          </Github>
        </ForDesktopVersion>
        <CodeImgs
          as={motion.div}
          transition={{ duration: 2 }}
          animate={{
            paddingTop: 0,
            opacity: 1,
          }}
        >
          <img src={CodeImg2} />
          <img src={CodeImg3} />
          <img src={CodeImg4} />
        </CodeImgs>
      </Main>
    </>
  );
}
const Main = styled(motion.div)`
  width: 100%;
  background-color: rgba(1, 22, 39, 0.85);
  border: 1px solid rgb(30, 45, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-left: 27px;
  padding-bottom: 0;
  overflow: hidden;
  height: calc(-50px + 95.8vh);
  display: flex;
  @media screen and (min-width: 1280px) {
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: 352px 38px;
    background-size: cover;
    padding: 130px 100px 0;
    justify-content: space-around;
    gap: 97px;
  }
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 458px;
  @media screen and (min-width: 1280px) {
    width: inherit;
  }
`;
const Hi = styled.p`
  font-weight: 400;
  color: white;
  font-size: clamp(1.125rem, 2.5vw, 3rem);
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
const Name = styled(motion.h1)`
  font-size: clamp(2.813rem, 7vw, 4rem);
  font-weight: 400;
  color: white;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: clamp(47px, 55px, 65px);
  @media screen and (min-width: 1280px) {
    white-space: nowrap;
    font-size: clamp(1.813rem, 7vw, 3rem);
  }
`;
const Role = styled.p`
  font-size: 20px;
  color: #40cfa8;
`;
const Github = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;
const Find = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #435c76;
`;
const GithubLink = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #e99287;
`;
const ForDesktopVersion = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    justify-content: stretch;
    gap: 60px;
    padding-top: 100px;
  }
`;
const CodeImgs = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    img {
      width: 900px;
    }
  }
`;
