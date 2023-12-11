import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
