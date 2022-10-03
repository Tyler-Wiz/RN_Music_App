// Play Audio
export const play = async (playback, uri) => {
  try {
    return await playback.loadAsync({ uri }, { shouldPlay: true });
  } catch (error) {
    console.log(error);
  }
};

// Pause Audio
export const pause = async (playback) => {
  try {
    return await playback.pauseAsync();
  } catch (error) {
    console.log(error);
  }
};

// Resume Audio
export const resume = async (playback) => {
  try {
    return await playback.playAsync();
  } catch (error) {
    console.log(error);
  }
};
// Selected Another Audio
export const another = async (playback, uri, object) => {
  try {
    await object.stopAsync();
    await object.unloadAsync();
    return await playback.loadAsync({ uri }, { shouldPlay: true });
  } catch (error) {
    console.log(error);
  }
};
