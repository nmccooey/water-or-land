import React from "react";
import onwater from "../api/onwater";
import SearchBar from "./SearchBar";
import Location from "./Location";

class App extends React.Component {
  state = { onWater: false };

  checkUserLocation = async (lat, long) => {
    const response = await onwater.get(`${lat},${long}`);

    console.log(this.setState({ onWater: response.data.water }));
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <h1>Water or Land</h1>
        <SearchBar checkUserLocation={this.checkUserLocation} />
        <Location onWater={this.state.onWater} />
      </div>
    );
  }
}

export default App;
