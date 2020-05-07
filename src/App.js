import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//Components
import Header from './components/header';
import Footer from './components/footer';

import Home from './components/home';
import Radicals from './components/radicals';

import './App.css';

function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Amiri&display=swap" rel="stylesheet"/>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/radicals" component={Radicals} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
