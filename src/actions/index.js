// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    // type is just name of the action
    type: "SONG_SELECTED",
    payload: song,
  };
};
