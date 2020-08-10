import React from "react";
import onwater from "../api/onwater";
import SearchBar from "./SearchBar";

class App extends React.Component {
  checkUserLocation = async (lat, long) => {
    const response = await onwater.get(`${lat},${long}`);

    console.log(response.data.water);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <h1>Water or Land</h1>
        <SearchBar checkUserLocation={this.checkUserLocation} />
      </div>
    );
  }
}

export default App;
