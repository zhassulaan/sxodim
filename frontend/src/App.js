import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";
import Home from "./screens/Home/HomeScreen";
import Event from "./screens/Post/PostScreen";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } exact />
        <Route path="/event/:_id" element={ <Event /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
