import React from "react";

export default class PeopleList extends React.Component {
  state = {
    people: []
  };

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(data => {
        this.setState({
          people: data
        });
      });
  }

  render() {
    return (
      <div>
        <h2 class="mt-5">People</h2>
        {this.state.people.map(person => (
          <div className="card mt-5 mb-5">
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Age: {person.age}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Hair Color: {person.hair_color}
              </h6>
              <a target="_new" href={person.url}>
                JSON data
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
