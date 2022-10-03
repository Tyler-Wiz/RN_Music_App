import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { audioFile } from "../Data/data";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import { GlobalStyles } from "../constants/color";

export const RenderPlayContent = ({ handleAudioPress, audioObj, duration }) => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  console.log(windowWidth);

  const calculateSeekBar = () => {
    if (
      duration.playbackPosition !== null &&
      duration.playbackDuration !== null
    ) {
      return (duration.playbackPosition / duration.playbackDuration) * 100;
    }
    return 0;
  };

  return (
    <View>
      <View style={styles.playContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={audioFile[currentAudioIndex].imageUrl}
            style={styles.image}
          />
        </View>
        <View style={styles.controlContainer}>
          <TouchableOpacity
            onPress={() => {
              handleAudioPress(audioFile[currentAudioIndex]);
            }}>
            <Ionicons
              name={
                audioObj.isplaying &&
                audioObj.currentAudio.id === audioFile[currentAudioIndex].id
                  ? "ios-pause-sharp"
                  : "ios-play-sharp"
              }
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-forward-sharp" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "grey",
          height: 2,
          marginTop: 10,
        }}>
        <View
          style={{
            width: `${calculateSeekBar()}%`,
            backgroundColor: GlobalStyles.colors.accentPrimary,
            height: 2,
          }}
        />
      </View>
      {/* <Slider
        style={{ width: 350, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="white"
        value={calculateSeekBar()}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    flex: 3,
  },
  track: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins600",
    marginRight: 10,
  },
  playContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  controlContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginRight: 15,
  },
});
