import { motion } from "framer-motion";
import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: rgb(1, 22, 39);
  padding: 21px 0 38px;
  min-height: 100vh;
  overflow: hidden;

  @media screen and (min-width: 1280px) {
    display: flex;
    padding: 0;
  }
`;
export const PageTitleDiv = styled(motion.div)``;
export const PageTitle = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
export const Btn = styled(motion.button)`
  background-color: #1e2d3d;
  text-align: left;
  padding: 5px 0 5px 29px;
  display: flex;
  gap: 13px;
  align-items: center;
  width: 100%;
`;
export const BtnName = styled.span`
  color: white;
  font-size: 16px;
`;
export const ArrowImg = styled(motion.img)<{ btnClicked: boolean }>`
  transform: ${(props) => (props.btnClicked ? "rotate(90deg)" : "")};
`;
export const ProjectsContainer = styled.div`
  padding: 38px 27px 0;
  @media screen and (min-width: 1280px) {
    border-bottom: 1px solid rgb(30, 45, 61);
    padding: 21px 27px;
  }
`;
export const SelectedTechStacks = styled(motion.div)`
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  opacity: 0;
`;
export const TechStacksList = styled(motion.div)`
  padding: 0 0 0 27px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const FirstLabel = styled.label`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const TechName = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 200;
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
export const Names = styled.div`
  padding-left: 10px;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 27px;
  padding-right: 42px;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    padding: 0;
    padding-bottom: 40px;
  }
`;
export const ProjectNum = styled.h1`
  padding-top: 17px;
  color: #5565e8;
  font-size: 16px;
`;
export const Card = styled(motion.div)`
  border-radius: 15px;
  min-width: 281px;
  max-width: 400px;
  border: 1px solid #1e2d3d;
  margin: auto;
  margin-top: 15px;
  opacity: 0;
  @media screen and (min-width: 1280px) {
    margin: 0;
  }
`;
export const ProjectImg = styled.img`
  width: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  min-width: 281px;
  @media screen and (min-width: 1280px) {
    height: 290px;
  }
`;
export const ImgDiv = styled.div``;
export const Line = styled.hr`
  height: 1px;
  width: 100%;
`;
export const ProjectTitle = styled.div`
  padding-top: 29px;
  color: white;
  font-size: 14px;
  text-align: center;
`;
export const LiveButton = styled.button`
  width: 129px;
  padding: 10px 14px;
  background-color: #1c2b3a;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  margin: 23px;
`;
export const DesktopVersionDiv = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const ProjectFilterForDesk = styled.div`
  border-right: 1px solid rgb(30, 45, 61);
  min-width: 300px;
  padding-top: 21px;
`;
export const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;
