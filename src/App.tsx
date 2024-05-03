import Hello from "./components/Hello";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  let location = useLocation();
  let locationUrl = location.pathname;
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Hello />} path="/" />
        <Route element={<Navbar />} path="/navbar" />
      </Routes>
      {locationUrl === "/" ? "" : <Footer />}
    </>
  );  
}

export default App;
