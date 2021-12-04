import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Calendar from './pages/Calendar';
import Payment from './pages/Payment';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/guide' component={Guide} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/payment' component={Payment} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;