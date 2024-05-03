import { motion } from "framer-motion";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Main>
      <ListItem
        as={motion.li}
        transition={{ duration: 2 }}
        animate={{ paddingLeft: 19 }}
      >
        _hello
      </ListItem>
      <ListItem
        as={motion.li}
        transition={{ duration: 2 }}
        animate={{ paddingLeft: 19 }}
      >
        _about-me
      </ListItem>
      <ListItem
        as={motion.li}
        transition={{ duration: 2 }}
        animate={{ paddingLeft: 19 }}
      >
        _projects
      </ListItem>
      <ListItem
        as={motion.li}
        transition={{ duration: 2 }}
        animate={{ paddingLeft: 19 }}
      >
        _contact-me
      </ListItem>
    </Main>
  );
}
const Main = styled.ul`
  background: #011627;
  border: 1px solid rgb(30, 45, 61);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100vh;
`;
const ListItem = styled.li`
  padding: 17px 0 17px 0;
  border-bottom: 1px solid #1e2d3d;
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: white;
  list-style-type: none;
`;
