import React from "react";

class SearchBar extends React.Component {
  state = { lat: "", long: "" };

  checkLocation = (e) => {
    e.preventDefault();

    this.props.checkUserLocation(this.state.lat, this.state.long);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Latitude</label>
            <input
              type="text"
              placeholder="42.35"
              value={this.state.lat}
              onChange={(e) => this.setState({ lat: e.target.value })}
            ></input>
            <label>Longitude</label>
            <input
              type="text"
              placeholder="-71.1"
              value={this.state.long}
              onChange={(e) => this.setState({ long: e.target.value })}
            ></input>
          </div>
          <button onClick={this.checkLocation}>Check Location</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
