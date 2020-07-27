import React, { Component } from 'react';


class Content extends Component {
    constructor(props){
        super(props);

        this.state = {
            neo: null,
            startDate: null,
            endDate: null,
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
        
        this.setState({loading: false, startDate: this.props.startdate, endDate: this.props.enddate});

        console.log(this.startDate, this.endDate);
    }

    render(){
        return(
            <div>
                show contents
            </div>
        );
    }

}

export default Content;