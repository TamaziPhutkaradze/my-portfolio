import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.div`
  background-color: rgb(1, 22, 39);
`;
export const Wrapper = styled.div`
  padding: 21px 0 38px;
  height: 100vh;
  overflow: hidden auto;
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;
export const PageName = styled.p`
  color: white;
  font-size: clamp(1rem, 2.5vw, 2rem);
  padding-left: 18px;
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 85px;
    font-size: clamp(0.5rem, 2.5vw, 1rem);
  }
`;
export const List = styled.div`
  padding-top: 29px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media screen and (min-width: 1280px) {
    width: 130%;
    border-right: 1px solid rgb(30, 45, 61);
    padding-top: 40px;
    overflow: hidden;
  }
`;
export const Info = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const BtnName = styled.span`
  color: white;
  font-size: 16px;
`;
export const Contact = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const InfoList = styled(motion.div)<{}>`
  padding-left: 27px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
`;
export const Personal = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const PersonalSpan = styled.span`
  color: #607b96;
`;
export const Professional = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const ProfessionalSpan = styled.span`
  color: #607b96;
`;
export const ArrowImg = styled(motion.img)<{ open: boolean }>`
  transform: ${(props) => (props.open === true ? "rotate(90deg)" : "")};
`;
export const EmailDiv = styled.div`
  display: flex;
  gap: 8px;
`;
export const EmailImg = styled.img``;
export const Email = styled.p`
  color: #607b96;
  font-size: 16px;
`;
export const PhoneNumber = styled.div`
  display: flex;
  gap: 8px;
`;
export const Box = styled.div`
  padding-bottom: 16px;
  padding-left: 27px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const NumberP = styled.p`
  color: #607b96;
`;
export const ArrowForContact = styled(motion.img)<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "")};
`;
export const Container = styled.div`
  padding: 38px 27px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;
export const ParagraphTitle = styled.p`
  color: white;
  font-size: 16px;
  @media screen and (min-width: 1280px) {
    padding: 20px 0 0 15px;
  }
`;
export const TextAboutMe = styled.div`
  font-size: 16px;
  color: #607b96;
  @media screen and (min-width: 1280px) {
    border-top: 1px solid rgb(30, 45, 61);
    padding: 20px 15px;
  }
`;
export const PersonalArrow = styled(motion.img)<{ isPersonalOpen: boolean }>`
  transform: ${(props) =>
    props.isPersonalOpen === true ? "rotate(90deg)" : ""};
`;
export const ProfessionalArrow = styled(motion.img)<{
  isProfessionalOpen: boolean;
}>`
  transform: ${(props) =>
    props.isProfessionalOpen === true ? "rotate(90deg)" : ""};
`;
