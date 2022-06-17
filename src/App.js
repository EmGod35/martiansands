/* File: App.js
   Author: Emily Betenbaugh
   Description: This file contains front end handling for useState and useEffect
      which fetches data from Backend API server.py
      This is the base App file that helps the tabs to route
*/
import React from "react";
import './App.css';
import {Helmet} from "react-helmet";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages"
import Gallery from "./pages/gallery"
import Music from "./pages/music"
import Shop from "./pages/shop"
import About from "./pages/about"
import "./pages/pages.css"

function App(){
  return (
      <div className="App">
        <header className="App-header">
            <div>
            <Helmet>
                <title>Martian Sands</title>
                <meta name="description" conent="Martian Sands" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <Router>
            <NavBar />
              <Routes>
                  <Route index element={<Home />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="music" element={<Music />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="about" element={<About />} />
              </Routes>
            </Router>
            </div>
        </header>
        <body className="App-body">
        </body>
        </div>
  );
}

export default App