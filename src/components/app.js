import React from "react";
import FilmsList from "./films";
import PeopleList from "./people";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container">
          <Router>
            <div>
              <Link to='/films' onClick={this.goToFilmsList} className="btn btn-primary mt-5 mr-5">
                Show Films
              </Link>
              <Link to='/people' onClick={this.goToPeopleList} className="btn btn-primary mt-5">
                Show People
              </Link>
              <Switch>
                <Route path='/films' component={FilmsList} />
                <Route path='/people' component={PeopleList} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
