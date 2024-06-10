import styled from "styled-components";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/closeIcon.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
type Location = {
  pathname: string;
};
export default function Navbar(props: { windowWidth: number }) {
  let location = useLocation();
  let locationPath = location.pathname;
  console.log(locationPath);
  const [lastLocation, setLastLocation] = useState<Location | null>(null);

  const [lastLocationPath, setLastLocationPath] = useState("");
  useEffect(() => {
    if (lastLocation) {
      setLastLocationPath(lastLocation.pathname);
    }
    setLastLocation(location);
  }, [location]);
  return (
    <Main
      as={motion.div}
      transition={{ duration: 2 }}
      animate={{ paddingLeft: 27 }}
    >
      <PagesTitle>
        <NameDiv>Tamazi-Phutkaradze</NameDiv>
        {props.windowWidth > 1280 && (
          <>
            {" "}
            <HelloPage><p>_hello</p></HelloPage>
            <AboutMePage><p>_about-me</p></AboutMePage>{" "}
            <ProjectsPage><p>_projects</p></ProjectsPage>
          </>
        )}
      </PagesTitle>
      {props.windowWidth < 1280 ? (
        locationPath === "/navbar" ? (
          <Link to={`${lastLocationPath}`}>
            {" "}
            <Close
              as={motion.img}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              src={CloseIcon}
            />
          </Link>
        ) : (
          <Link to={"/navbar"}>
            <Menu
              as={motion.img}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              src={MenuIcon}
            />
          </Link>
        )
      ) : (
        <Link to={"/contact"}>
          <ContactPage>
            {" "}
            <p>_contact-me</p>
          </ContactPage>
        </Link>
      )}
    </Main>
  );
}
const Main = styled.div`
  background-color: rgba(1, 22, 39, 0.85);
  border: 1px solid rgb(30, 45, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 17px 18px 18px 0px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1280px) {
    padding: 0 18px;
    align-items: center;
    height: 52px;
  }
`;
const NameDiv = styled.p`
  font-size: 16px;
  color: #607b96;
  font-weight: 400;
`;
const Menu = styled.img`
  opacity: 0;
`;
const Close = styled.img`
  opacity: 0;
`;
const ContactPage = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
    color: #607b96;
  }
  border-left: 1px solid grey;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 18px;
`;

const HelloPage = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
    color: #607b96;
  }
  border-left: 1px solid grey;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 18px;
  margin-left: 100px;
`;
const PagesTitle = styled.div`
  display: flex;
  align-items: center;
`;
const AboutMePage = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
    color: #607b96;
  }
  border-left: 1px solid grey;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 18px;
  margin-left: 30px;
`;
const ProjectsPage = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
    color: #607b96;
  }
  border-left: 1px solid grey;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 18px;
  margin-left: 30px;
`;
