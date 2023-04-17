import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
