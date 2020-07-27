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
            Curious to know which asteroid are nearby you? 
            Choose one the weeks or input a custom date to find Near-Earth-Asteroids in that date range!
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