import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home/Home';
import Post from './screens/Post/Post';
import Profile from './screens/Profile/Profile';
import Editer from './screens/Editer/Editer';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/post/:_id' element={<Post />} />
        <Route path='/profile' element={<Profile />} exact />
        <Route path='/edit' element={<Editer />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
