import React, { Component } from 'react';
import './styles/AsteroidFinder.css';
import Head from './components/Head';
import ChooseTimeRange from './components/ChooseTimeRange';


class AsteroidFinder extends Component{

  constructor() {
    super();

    this.state = {
      startDate: null,
      endDate: null,
      dateReturned: false,
    }
  }

  render() {
    return(
      <div className="container-fluid">
        <Head />

        <hr />

        <div>
          <p> 
            Curious to know which Asteroids are nearby you? 
            Select a range of date(max 7 days) to find Asteroids that will be close to earth during that time!
          </p>
        </div>

        {!this.state.dateReturned &&
          <ChooseTimeRange />
        }

        <hr />

      </div>
    );
  }
}

export default AsteroidFinder;