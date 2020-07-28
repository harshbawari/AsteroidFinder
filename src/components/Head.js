import React, { Component } from 'react';
import '../styles/head.css';

class Head extends Component {

    render() {
        return(
            <div>
                <div className="justify-content-center">
                    <h1>
                        Asteroid Finder
                    </h1>
                </div>
                <div className="d-flex flex-row-reverse">
                    <span>by Harsh Bawari</span>
                </div>
            </div>
        );
    }
}

export default Head;