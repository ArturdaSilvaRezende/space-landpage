import React from "react";

//components
import Home from "./home/Home";
import NotFound from "./NotFound";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Header from "./home/Header/Header";

//custom style
import "./StyleConfig.css";

//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Destination" element={<Destination />} />
            <Route path="Crew" element={<Crew />} />
            <Route path="Technology" element={<Technology />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
