import Hello from "./components/Hello";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Hello />} path="/" />
        <Route element={<Navbar />} path="/navbar" />
      </Routes>
    </>
  );
}

export default App;
