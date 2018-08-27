import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import HeaderNavbar from './components/HeaderNavbar';
import Footer from './components/Footer';

import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderNavbar />
          <div className="page">
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
