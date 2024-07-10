import { motion } from "framer-motion";
import styled from "styled-components";

export const variants = {
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
export const pageTransition = {
  type: "spring",
  duration: 5,
};
export const ContactDivVariants = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  in: {
    opacity: 1,
    y: "0%",
  },
  out: {
    opacity: 0,
    y: "50%",
  },
};
export const Main = styled.div`
  overflow: hidden;
  background-color: rgb(1, 22, 39);
  border: 1px solid rgb(30, 45, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 17px 18px 18px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1280px) {
    padding: 0;
    padding-left: 18px;
    align-items: center;
    height: 52px;
  }
`;
export const NameDiv = styled.div`
  p {
    font-size: 16px;
    color: #607b96;
    font-weight: 400;
  }
  padding-right: 100px;
`;
export const Menu = styled.img`
  opacity: 0;
`;
export const Close = styled.img`
  opacity: 0;
`;
export const ContactPage = styled.div<{ location: string }>`
  p {
    font-size: 16px;
    font-weight: 400;
    color: #607b96;
  }
  border-left: 1px solid rgb(30, 45, 61);
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: ${(props) =>
    props.location === "/contact" ? "1px solid #FEA55F" : ""};
  justify-content: center;
  width: 150px;
`;

export const HelloPage = styled.div<{ location: string }>`
  p {
    font-size: 16px;
    font-weight: 400;
    color: #607b96;
  }
  border-left: 1px solid rgb(30, 45, 61);
  height: 50px;
  display: flex;
  align-items: center;
  width: 125px;
  border-bottom: ${(props) =>
    props.location === "/" ? "1px solid #FEA55F" : ""};
  justify-content: center;
`;
export const PagesTitle = styled(motion.div)`
  display: flex;
  align-items: center;
`;
export const AboutMePage = styled.div<{ location: string }>`
  p {
    font-size: 16px;
    font-weight: 400;
    color: #607b96;
  }
  border-left: 1px solid rgb(30, 45, 61);
  height: 50px;
  display: flex;
  align-items: center;
  width: 125px;
  text-align: center;
  justify-content: center;
  border-bottom: ${(props) =>
    props.location === "/AboutMe" ? "1px solid #FEA55F" : ""};
`;
export const ProjectsPage = styled.div<{ location: string }>`
  p {
    font-size: 16px;
    font-weight: 400;
    color: #607b96;
  }
  border-left: 1px solid rgb(30, 45, 61);
  height: 50px;
  display: flex;
  align-items: center;
  width: 125px;
  justify-content: center;
  border-right: 1px solid rgb(30, 45, 61);
  border-bottom: ${(props) =>
    props.location === "/Projects" ? "1px solid #FEA55F" : ""};
`;
