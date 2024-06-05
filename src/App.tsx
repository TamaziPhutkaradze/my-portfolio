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
function App() {
  let location = useLocation();
  let locationUrl = location.pathname;
  return (
    <>
      <Wrapper>
        <Header />
        <Routes>
          <Route element={<Hello />} path="/" />
          <Route element={<Navbar />} path="/navbar" />
          <Route element={<AboutMe />} path="/AboutMe" />
          <Route element={<Projects />} path="/Projects" />
          <Route element={<Contact />} path="/Contact" />
        </Routes>
        {locationUrl === "/" ? "" : <Footer />}
      </Wrapper>
    </>
  );
}

export default App;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-size: contain;
`;
