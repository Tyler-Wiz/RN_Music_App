import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from "react-native";
import { useRef, useEffect, useContext } from "react";
import { SongContext } from "../../store/Song-Context";
import { MaterialIcons } from "@expo/vector-icons";

export const FeedBack = () => {
  const { width, height } = useWindowDimensions();
  const fadeIn = useRef(new Animated.Value(0)).current;

  const songCtx = useContext(SongContext);

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [songCtx.isVisible]);

  useEffect(() => {
    setInterval(() => {
      songCtx.setIsVisible(false);
    }, 5000);
  }, [songCtx.isVisible]);

  return (
    <View>
      {songCtx.isVisible === true ? (
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeIn,
              bottom: height / 3,
              width: width / 2,
              height: height / 4,
              left: width / 4,
            },
          ]}>
          <Text style={styles.add}>Added To Library</Text>
          <MaterialIcons name="queue-music" size={144} color="white" />
        </Animated.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 99,
    left: 130,
    backgroundColor: "#000000",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins500",
    textAlign: "center",
  },
});
