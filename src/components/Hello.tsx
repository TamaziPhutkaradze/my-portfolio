import styled from "styled-components";
import { motion } from "framer-motion";
export default function Hello() {
  return (
    <>
      <Main animate={{ paddingBottom: 85 }} transition={{ duration: 2 }}>
        <TextDiv
          as={motion.div}
          transition={{ duration: 2 }}
          animate={{ paddingTop: 96, opacity: 1 }}
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 458px;
`;
const Hi = styled.p`
  font-weight: 400;
  color: white;
  font-size: clamp(1.125rem, 2.5vw, 3rem);
`;
const Name = styled(motion.h1)`
  font-size: clamp(2.813rem, 7vw, 4rem);
  font-weight: 400;
  color: white;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: clamp(47px, 55px, 65px);
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
