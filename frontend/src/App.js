import React from "react";
import styled from 'styled-components';
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Wrapper>body</Wrapper>
      <Footer />
    </div>
  );
}

const Wrapper = styled.h1`
  margin: 5.2em 0;
  text-align: center;
`;

export default App;
