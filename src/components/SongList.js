import React, { Component } from "react";
import { connect } from "react-redux";

class Songlist extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>SongList</h1>
        <h2>SongList</h2>
      </div>
    );
  }
}

// connecting React with Redux
// mapStateToProps will always return a state that contains combineReducers
// Technically we can destructure state but for the sake of clarity/readability we'll keep at is.
const mapStateToProps = (state) => {
  // console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(Songlist);
