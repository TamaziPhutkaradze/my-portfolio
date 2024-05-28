import styled from "styled-components";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/closeIcon.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  let location: any = useLocation();
  let locationPath = location.pathname;
  console.log(locationPath);
  const [lastLocation, setLastLocation] = useState<any>(null);
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
      <NameDiv>Tamazi-Phutkaradze</NameDiv>
      {locationPath === "/navbar" ? (
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
      )}
    </Main>
  );
}
const Main = styled.div`
  background: #011627;
  border: 1px solid rgb(30, 45, 61);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 17px 18px 18px 0px;
  display: flex;
  justify-content: space-between;
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
