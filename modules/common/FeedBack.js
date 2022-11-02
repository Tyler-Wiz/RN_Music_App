import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from "react-native";
import { useContext } from "react";
import { SongContext } from "../../store/Song-Context";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/color";

export const FeedBack = () => {
  const { width, height } = useWindowDimensions();
  const songCtx = useContext(SongContext);

  return (
    <View>
      {songCtx.addToFavorite ? (
        <Animated.View
          style={[
            styles.container,
            {
              bottom: height / 2.5,
              width: width / 2,
              height: height / 12,
              left: width / 4.5,
            },
          ]}>
          <MaterialIcons
            name="queue-music"
            size={30}
            color={GlobalStyles.colors.lightGrey}
          />
          <Text style={styles.add}>Added To Favorites</Text>
        </Animated.View>
      ) : songCtx.removedToFavorite ? (
        <Animated.View
          style={[
            styles.container,
            {
              bottom: height / 2.5,
              width: width / 1.8,
              height: height / 12,
              left: width / 5,
            },
          ]}>
          <MaterialIcons
            name="highlight-remove"
            size={30}
            color={GlobalStyles.colors.lightGrey}
          />
          <Text style={styles.add}>Removed From Favorites</Text>
        </Animated.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 9999999,
    backgroundColor: GlobalStyles.colors.iconColor,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    color: GlobalStyles.colors.lightGrey,
    fontSize: 11,
    fontFamily: "Poppins500",
    textAlign: "center",
    marginTop: 5,
  },
});
