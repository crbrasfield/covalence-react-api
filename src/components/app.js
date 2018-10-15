import React from "react";

import peopleList from "./people";
import FilmsList from "./films";
import PeopleList from "./people";

class App extends React.Component {
  state = {
    viewingFilms: false,
    viewingPeople: false
  };

  loadFilms = () => {
    this.setState({ viewingFilms: true, viewingPeople: false });
  };

  loadPeople = () => {
    this.setState({ viewingFilms: false, viewingPeople: true });
  };

  render() {
    return (
      <div className="container">
        <button className="btn btn-primary mt-5 mr-5" onClick={this.loadFilms}>
          Load Films
        </button>
        <button className="btn btn-primary mt-5" onClick={this.loadPeople}>
          Load People
        </button>
        {this.state.viewingFilms && <FilmsList />}
        {this.state.viewingPeople && <PeopleList />}
      </div>
    );
  }
}

export default App;
