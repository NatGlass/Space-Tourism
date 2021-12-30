import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Home from './pages/home'
import Destination from './pages/destination'
import Crew from './pages/crew'
import Technology from './pages/technology'

export default function App() {
  return (
      <Router>
        <div className="App">
        <Header />
          <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="destination" element={<Destination />}></Route>
          <Route exact path="crew" element={<Crew />}></Route>
          <Route exact path="technology" element={<Technology />}></Route>
          </Routes>
            </div>
      </Router>
  );
}

