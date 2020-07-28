import React, { Component } from 'react';
import RenderCard from './RenderCard';


class Content extends Component {
    constructor(props){
        super(props);

        this.state = {
            neo: null,
            loading: true,
            objects: [],
            apiKey: '9btKaUMbolrOrzpJubGp9I1bQdcVtIlLyRzJGBU0',
            url: 'https://api.nasa.gov/neo/rest/v1/feed?',
        }

    }

    formatDateCustom(date) {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();

        if(m < 9)
            m = '0' + m;
        if(d < 10)
            d = '0' + d;

        return [y, m, d].join('-');
    }

    

    async componentDidMount() {
    
        
        
        let startDate = this.formatDateCustom(this.props.startdate);
        
        let endDate = this.formatDateCustom(this.props.enddate);
        
        //https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=9btKaUMbolrOrzpJubGp9I1bQdcVtIlLyRzJGBU0
        let concaturl = this.state.url;
        
        let finalUrl = concaturl.concat('start_date=', startDate, '&end_date=', endDate, '&api_key=', this.state.apiKey);
    

        const response = await fetch(finalUrl);
        const data = await response.json();

        this.setState ({ neo: Object.values(data.near_earth_objects) });
        this.state.neo.map((obj) => this.setState({objects: obj}));

        for(var i = 0; i < this.state.neo.length; i++) {

            this.setState({
                objects: this.state.objects.concat(Object.values(this.state.neo[i])),
            })
        }
        
        this.state.objects.map((obj) => {
            console.log(obj);
        });

        this.setState({loading: false});
    }

    render(){

        const renderObjects = this.state.objects.map((obj, i) => {
            return(
                    <RenderCard key={i} object={obj} />
            );
        });

        return(
            <div>
                {this.state.loading ? <div>Loading...</div> : <div>{this.state.objects.length}{renderObjects}</div>}
            </div>
        );
    }

}

export default Content;