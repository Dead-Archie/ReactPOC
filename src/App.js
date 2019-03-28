import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Foooter from './components/Foooter';
import Discover from './components/Body/Discover';
import Movies from './components/Body/Movies';
import TvSeries from './components/Body/TvSeries';
import Details from './components/Body/Details';
import NoMatch from './components/Body/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
        <div style={{paddingTop:70+'px'}}>
          <Switch>
            <Route exact strict path="/discover" component={Discover} />
            <Route exact strict path="/movies" component={Movies} />
            <Route exact strict path="/tv-series" component={TvSeries}/>
            <Route path={`/**/:id`} component={Details} />
            <Route  component={NoMatch}/>
          </Switch>
        </div>
        <Foooter/>
        </div>
      </Router>
    );
  }
}

export default App;

