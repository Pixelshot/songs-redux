import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return (
    <div>
      {song == null ? (
        <h1>Select a song</h1>
      ) : (
        <>
          <h1>Song Title: {song.title}</h1>
          <p>
            <b>Duration: {song.duration}</b>
          </p>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
