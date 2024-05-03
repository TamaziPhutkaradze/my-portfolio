import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Navbar() {
  return (
    <Main>
      <Link to={"/"}>
        <ListItem
          as={motion.li}
          transition={{ duration: 2 }}
          animate={{ paddingLeft: 19 }}
        >
          _hello
        </ListItem>
      </Link>
      <Link to={"/AboutMe"}>
        <ListItem
          as={motion.li}
          transition={{ duration: 2 }}
          animate={{ paddingLeft: 19 }}
        >
          _about-me
        </ListItem>
      </Link>
      <Link to={"/Projects"}>
        <ListItem
          as={motion.li}
          transition={{ duration: 2 }}
          animate={{ paddingLeft: 19 }}
        >
          _projects
        </ListItem>
      </Link>
      <Link to={"/Contact"}>
        <ListItem
          as={motion.li}
          transition={{ duration: 2 }}
          animate={{ paddingLeft: 19 }}
        >
          _contact-me
        </ListItem>
      </Link>
    </Main>
  );
}
const Main = styled.ul`
  background: #011627;
  border: 1px solid rgb(30, 45, 61);
  height: 100vh;
`;
const ListItem = styled.li`
  padding: 17px 0 17px 0;
  border-bottom: 1px solid #1e2d3d;
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: white;
  list-style-type: none;
`;
