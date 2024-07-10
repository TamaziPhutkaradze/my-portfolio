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
  const [lastLocation, setLastLocation] = useState<Location | null>(null);

  const [lastLocationPath, setLastLocationPath] = useState("");
  useEffect(() => {
    if (lastLocation) {
      setLastLocationPath(lastLocation.pathname);
    }
    setLastLocation(location);
  }, [location]);

  return (
    <Main>
      <PagesTitle
        initial="initial"
        animate="in"
        exit="out"
        variants={variants}
        transition={pageTransition}
      >
        <NameDiv>
          <p>Tamazi-Phutkaradze</p>
        </NameDiv>
        {props.windowWidth >= 1280 && (
          <>
            {" "}
            <Link to={"/"}>
              <HelloPage location={locationPath}>
                <p>_hello</p>
              </HelloPage>
            </Link>
            <Link to={"AboutMe"}>
              <AboutMePage location={locationPath}>
                <p>_about-me</p>
              </AboutMePage>{" "}
            </Link>
            <Link to={"Projects"}>
              <ProjectsPage location={locationPath}>
                <p>_projects</p>
              </ProjectsPage>
            </Link>
          </>
        )}
      </PagesTitle>
      {props.windowWidth <= 1279 ? (
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
          <ContactPage
            location={locationPath}
            as={motion.div}
            initial="initial"
            animate="in"
            variants={ContactDivVariants}
            transition={pageTransition}
          >
            {" "}
            <p>_contact-me</p>
          </ContactPage>
        </Link>
      )}
    </Main>
  );
}
// style-components
import {
  Main,
  NameDiv,
  PagesTitle,
  HelloPage,
  Menu,
  AboutMePage,
  ProjectsPage,
  Close,
  ContactPage,
  variants,
  pageTransition,
  ContactDivVariants,
} from "../styles/HeaderStyles";
