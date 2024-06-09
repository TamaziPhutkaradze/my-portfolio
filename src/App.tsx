import Hello from "./components/Hello";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styled from "styled-components";
import bgImg from "./assets/bg.svg";
import { useEffect, useState } from "react";
function App() {
  let location = useLocation();
  let locationUrl = location.pathname;
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return (
    <>
      <Wrapper>
        <Header />
        <Routes>
          <Route element={<Hello windowWidth={windowWidth} />} path="/" />
          <Route element={<Navbar />} path="/navbar" />
          <Route element={<AboutMe />} path="/AboutMe" />
          <Route element={<Projects />} path="/Projects" />
          <Route element={<Contact />} path="/Contact" />
        </Routes>
        {locationUrl === "/" && windowWidth < 1280 ? "" : <Footer />}
      </Wrapper>
    </>
  );
}

export default App;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-size: contain;
  @media screen and (min-width: 1280px) {
    background-image: none;
  }
`;
