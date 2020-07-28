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
            canPass: false,
        }
    }

    onChangeStart = startDate => {
        this.setState({ startDate });
        this.setState({ canPass: false });
    };

    onChangeEnd = endDate => {
        this.setState({ endDate });
        this.setState({ canPass: false });
    };

    submit = () => {

        const differenceInDays = (a, b) => Math.floor(
            (a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24)
        );


        if( differenceInDays(this.state.endDate, this.state.startDate) < 0 ) {
            alert("End Date cannot be smaller than Start Date!");
            this.setState({ canPass: false });
        }
        else if( differenceInDays(this.state.endDate, this.state.startDate ) > 7 ) {
            alert("Maximum range is 7 days!");
            this.setState({ canPass: false });
        }
        else {
            this.setState({ canPass: true });
        }
    }    

    render() {
        
        const sendContent = this.state.canPass ? <Content startdate={this.state.startDate} enddate={this.state.endDate} /> : <div> </div>

        return(
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                    <DatePicker className="col-4 col-md-3 mb-4"
                        onChange={this.onChangeStart} 
                        value={this.state.startDate}
                    />
                    <DatePicker className="ml-md-5 ml-5 col-4 col-md-3"
                        onChange={this.onChangeEnd}
                        value={this.state.endDate}
                    />
                </div>
                <div className="col-6 offset-md-2 col-md-2">
                    <input type="submit" className="btn btn-block btn-primary" value="Submit" onClick={this.submit} />
                </div>
                <div>
                    {sendContent}
                </div>
            </div>
        );
    }
}

export default ChooseTimeRange;