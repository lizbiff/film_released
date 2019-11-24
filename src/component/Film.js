import React, { Component } from "react";

class Film extends Component {
    render() {
        return (
            <div className="film">
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Film;