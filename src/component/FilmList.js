import React, { Component } from "react";
import Film from "./Film";

class FilmList extends Component {
    render() {
        const commentNodes = this.props.data.map(film => {
            return (
                <Film name={film.name}  key={film.id}></Film>
            );
        });

        return (
            <div className="film-list">
                {commentNodes}
            </div>
        );
    }
}

export default FilmList;