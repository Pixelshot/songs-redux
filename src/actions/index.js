// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    // type is just name of the action
    type: "SONG_SELECTED",
    // Payload is a non-official, community accepted (de facto) naming convention for the property that holds the actual data in a Redux action object.
    // Payload is what is keyed ( the key value pairs ) in your actions and passed around between reducers in your redux application.
    // From https://stackoverflow.com/questions/51357412/what-is-a-payload-in-redux-context
    payload: song,
  };
};
