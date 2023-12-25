import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/contacts" element={<ContactForm />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
