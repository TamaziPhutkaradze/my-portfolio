import styled from "styled-components";
import backImg from "../assets/backImg.svg";

export default function Hello() {
  return (
    <>
      <Main>
        <TextDiv>
          <Hi>Hi all. I am</Hi>
          <Name>Tamazi Phutkaradze</Name>
        </TextDiv>
        <Role> &gt; Front-end developer</Role>
        <Github>
          <Find>// find my profile on Github:</Find>
          <GithubLink>
            <span style={{ color: "#4D5BCE" }}>const</span>{" "}
            <span style={{ color: "#43D9AD" }}>githubLink</span> = {""}
            <a
              href="https://github.com/TamaziPhutkaradze"
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
const Main = styled.div`
  background-image: url(${backImg});
  width: 100%;
  background: #011627;
  border: 1px solid rgb(30, 45, 61);
  border-radius: 5px;
  padding-left: 27px;
  padding-bottom: 85px;
`;
const TextDiv = styled.div`
  padding-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Hi = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: white;
`;
const Name = styled.h1`
  font-size: 42px;
  font-weight: 400;
  color: white;
  line-height: 44px;
`;
const Role = styled.p`
  font-size: 20px;
  color: #40cfa8;
`;
const Github = styled.div`
  padding-top: 200px;
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
