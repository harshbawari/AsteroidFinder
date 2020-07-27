import React, { Component } from 'react';
import '../styles/ChooseTimeRange.css';
import DatePicker from 'react-date-picker';
import Content from './Content';

class ChooseTimeRange extends Component {
    constructor() {
        super();

        this.state = {
            startDate: null,
            endDate: null,
            date: new Date(),
        }


    }

    prevWeek() {
        
    }

    thisWeek() {

    }

    nextWeek() {

    }

    onChange = date => {
        this.setState({date});
        this.setState({startDate: date, endDate: date});
    }

    


    render() {
        
        
        return(
            <div>
                <div>
                    <label>Choose a Week: </label>
                    <button className="btn btn-primary col-12 col-md-3" onClick={this.prevWeek}>Previous Week</button>
                    <button className="btn btn-danger col-12 col-md-3 offset-1" onClick={this.thisWeek}>This Week</button>
                    <button className="btn btn-secondary col-12 col-md-3 offset-1" onClick={this.nextWeek}>Next Week</button>
                </div>
                <div>
                    <DatePicker
                        onChange={this.onChange} 
                        value={this.state.date}
                    />
                </div>
            </div>
        );
    }
}

export default ChooseTimeRange;