import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { play, pause, resume, another } from "./AudioController";
import { RenderPlayContent } from "./RenderPlayContent";

const AudioPlayer = () => {
  const [audioObj, setAudioObj] = useState({
    playbackObj: null,
    audioStatus: null,
    currentAudio: {},
    isplaying: false,
  });

  const [duration, setDuration] = useState({
    playbackPosition: null,
    playbackDuration: null,
  });

  const OnPlaybackStatusUpdate = (playBackStatus) => {
    if (playBackStatus.isLoaded && playBackStatus.isPlaying) {
      setDuration({
        playbackPosition: playBackStatus.positionMillis,
        playbackDuration: playBackStatus.durationMillis,
      });
    }
  };

  console.log(audioObj.isplaying);

  const handleAudioPress = async (audio) => {
    const playback = new Audio.Sound();
    if (audioObj.audioStatus === null) {
      const status = await play(playback, audio.uri);
      setAudioObj({
        currentAudio: audio,
        playbackObj: playback,
        audioStatus: status,
        isplaying: true,
      });
      return playback.setOnPlaybackStatusUpdate(OnPlaybackStatusUpdate);
    }

    // Pause //
    if (
      audioObj.audioStatus.isLoaded &&
      audioObj.isplaying &&
      audioObj.currentAudio.id === audio.id
    ) {
      const status = await pause(audioObj.playbackObj);
      return setAudioObj({
        ...audioObj,
        audioStatus: status,
        isplaying: false,
      });
    }
    // Resume
    if (
      audioObj.audioStatus.isLoaded &&
      !audioObj.isplaying &&
      audioObj.currentAudio.id === audio.id
    ) {
      const status = await resume(audioObj.playbackObj);
      return setAudioObj({
        ...audioObj,
        audioStatus: status,
        isplaying: true,
      });
    }

    // Select Another Audio
    if (
      audioObj.audioStatus.isLoaded &&
      audioObj.currentAudio.id !== audio.id
    ) {
      const status = await another(playback, audio.uri, audioObj.playbackObj);
      return setAudioObj({
        currentAudio: audio,
        playbackObj: playback,
        audioStatus: status,
        isplaying: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <RenderPlayContent
        handleAudioPress={handleAudioPress}
        audioObj={audioObj}
        duration={duration}
      />
    </View>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    position: "absolute",
    bottom: 70,
    width: "100%",
    backgroundColor: "black",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "none",
  },
});
