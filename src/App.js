import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Home from './pages/home'
import Destination from './pages/destination'
import Crew from './pages/crew'
import Technology from './pages/technology'
import GlobalStyles from './styles/global'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="destination" element={<Destination />}></Route>
          <Route path="crew" element={<Crew />}></Route>
          <Route path="technology" element={<Technology />}></Route>
          </Routes>
      </Router>
    </>
  );
}

