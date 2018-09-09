import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import HeaderNavbar from './components/HeaderNavbar';
import Footer from './components/Footer';

import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderNavbar />
        <div className="page">
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
