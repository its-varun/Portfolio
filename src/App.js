import Main from './Main'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './Project'
import Contact from './Contact'
import Resume from "./Resume"

function App() {
  return (
    <>
      {/* <Main/> */}
      {/* <Navbar/>
      <Main/>
      <Bottom/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/project" element={<Project/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/resume" element={<Resume/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
