import React, { Component } from 'react';
import '../styles/RenderCard.css';

class RenderCard extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            object: null,
        }
    }

    render() {
        console.log(this.props);
        return(
            <div className="m-1">
                <div className="card bg-light">
                    <div className="card-header">
                        {this.props.object.name}
                    </div>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-6">Diameter</dt>
                            <dd className="col-6">{this.props.object.estimated_diameter.meters.estimated_diameter_max} meters</dd>

                            <dt className="col-6">Closest to Earth On</dt>
                            <dd className="col-6">{this.props.object.close_approach_data[0].close_approach_date_full}</dd>

                            <dt className="col-6">Relative Velocity</dt>
                            <dd className="col-6">{this.props.object.close_approach_data[0].relative_velocity.kilometers_per_hour} km/hr</dd>

                            <dt className="col-6">It will miss the Earth by</dt>
                            <dd className="col-6">{this.props.object.close_approach_data[0].miss_distance.kilometers} km</dd>

                            <dt className="col-6">Potentially Hazardous</dt>
                            <dd className="col-6">{this.props.object.is_potentially_hazardous_asteroid? <span className="badge badge-danger">Yes, run for your life!</span> : <span className="badge badge-success">No. Chill, you are safe!</span>}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
}

export default RenderCard;