import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Router>
        <div>
          <HeaderNavbar />
          <div className="page">
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/profile`} component={Profile} />
            <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
            <Route path={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
            <Route path={`${process.env.PUBLIC_URL}/resume`} component={Resume} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
