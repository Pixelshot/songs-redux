import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions/";

class Songlist extends Component {
  render() {
    // console.log(this.props);
    const { songs, selectSong } = this.props;
    const renderList = () => {
      return songs.map((song) => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button
                className="ui button primary"
                onClick={() => selectSong(song)}
              >
                Select
              </button>
            </div>

            <div className="content">{song.title}</div>
          </div>
        );
      });
    };

    return <div className="ui divided list">{renderList()}</div>;
  }
}

// connecting React with Redux
// mapStateToProps will always return a state that contains combineReducers
// Technically we can destructure state but for the sake of clarity/readability we'll keep at is.
const mapStateToProps = (state) => {
  // console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(Songlist);
