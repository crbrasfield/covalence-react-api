import React from "react";

export default class FilmsList extends React.Component {
  state = {
    films: []
  };

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(data => {
        this.setState({
          films: data
        });
      });
  }

  render() {
    return (
      <div>
        <h2 className="mt-5">Films</h2>
        {this.state.films.map(film => (
          <div className="card mt-5 mb-5">
            <div className="card-body">
              <h5 className="card-title">{film.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Director: {film.director}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Producer: {film.producer}
              </h6>
              <p className="card-text">{film.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
