import React from "react";

//components
import Hero from "./Hero/Hero";
import Header from "./Header/Header";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
      </>
    );
  }
}

export default Home;
