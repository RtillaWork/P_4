import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
// import Projects from './Projects';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className='app d-flex text-center text-white bg-dark  flex-column'>
        <header className='mb-auto'>
          <Navbar />
        </header>
        <div className='container cover-container d-flex w-100 h-100 p-3 mx-auto flex-column flex-grow-1 justify-content-center'>
          <main className='px-4'>
            <Switch>
              <Route exact path='/' component={Home} />
              {
                // <Route path='/projects' component={Projects} />
              }
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
