import React, { Component } from 'react';
import '../styles/ChooseTimeRange.css';
import DatePicker from 'react-date-picker';
import Content from './Content';

class ChooseTimeRange extends Component {
    constructor() {
        super();

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        }
    }

    onChangeStart = startDate => this.setState({ startDate });

    onChangeEnd = endDate => this.setState({ endDate });

    submit = () => {

        const differenceInDays = (a, b) => Math.floor(
            (a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24)
        );


        if( differenceInDays(this.state.endDate, this.state.startDate) < 0 ) 
            alert("End Date cannot be smaller than Start Date!");
        else if( differenceInDays(this.state.endDate, this.state.startDate ) > 7 ) 
            alert("Maximum range is 7 days!");
        else {
            console.log("else");
            return(
                <div>
                    here
                    <Content startDate={this.startDate} endDate={this.endDate} />
                </div>
            );
        }
    }

    render() {
        
        return(
            <div>
                <div>
                    <DatePicker
                        onChange={this.onChangeStart} 
                        value={this.state.startDate}
                    />
                    <DatePicker
                        onChange={this.onChangeEnd}
                        value={this.state.endDate}
                    />
                </div>
                <div>
                    <input type="submit" className="btn btn-block btn-primary" value="Submit" onClick={this.submit} />
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default ChooseTimeRange;