import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Navbar() {
  const transition = {
    type: "spring",
    duration: 2,
  };
  const menuVariants = {
    initial: {
      y: "-100%",
    },
    in: {
      y: "0%",
    },
  };
  return (
    <Main
      as={motion.li}
      initial="initial"
      animate="in"
      variants={menuVariants}
      transition={transition}
    >
      <Link to={"/"}>
        <ListItem>_hello</ListItem>
      </Link>
      <Link to={"/AboutMe"}>
        <ListItem>_about-me</ListItem>
      </Link>
      <Link to={"/Projects"}>
        <ListItem>_projects</ListItem>
      </Link>
      <Link to={"/Contact"}>
        <ListItem>_contact-me</ListItem>
      </Link>
    </Main>
  );
}
const Main = styled.ul`
  background-color: rgba(1, 22, 39, 0.85);
  border: 1px solid rgb(30, 45, 61);
  height: 100vh;
  list-style-type: none;
`;
const ListItem = styled.li`
  padding: 17px 0 17px 0;
  border-bottom: 1px solid #1e2d3d;
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: white;
  list-style-type: none;
  padding-left: 19px;
`;
