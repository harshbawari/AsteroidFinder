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
      neo: null,
      loading: true,
      url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=9btKaUMbolrOrzpJubGp9I1bQdcVtIlLyRzJGBU0'
    }
  }

  async componentDidMount() {

    
    //this.setState({neo: await fetch(this.state.url).then((results) => {
    //  return results.json();
    //})});

    const response = await fetch(this.state.url);
    const data = await response.json();
    this.setState({neo: data});
    
    this.setState({loading: false});
  }

  render() {
    return(
      <div>
        <Head />
        {if(startDate === null and endDate === null)
          <ChooseTimeRange />
        }
        <hr />
      </div>
    );
  }
}

export default AsteroidFinder;