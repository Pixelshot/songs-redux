import React, { Component } from "react";
import { connect } from "react-redux";

class Songlist extends Component {
  render() {
    return (
      <div>
        <h1>SongList</h1>
        <h2>SongList</h2>
      </div>
    );
  }
}

export default connect()(Songlist);
