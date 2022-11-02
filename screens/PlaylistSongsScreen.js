import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import { PlaylistNavigation } from "../modules/common/PlaylistNavigation";
import { SongContext } from "../store/Song-Context";
import { RenderSongs } from "../components/RenderSongs";
import { GlobalStyles } from "../constants/color";

export const PlaylistSongsScreen = ({ route }) => {
  const data = route.params.data;
  const name = route.params.name;
  const img = route.params.img;

  // Context //
  const songCtx = useContext(SongContext);

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 280;
  const Header_Minimum_Height = 30;

  const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height],
    outputRange: ["#000000", "#000000"],
    extrapolate: "clamp",
  });

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: "clamp",
  });

  const DisplayLeadImage = () => {
    if (img) {
      return (
        <View>
          <Animated.View
            style={[
              styles.header,
              {
                height: animateHeaderHeight,
                backgroundColor: animateHeaderBackgroundColor,
              },
            ]}>
            <Image source={{ uri: img }} style={styles.image} />
          </Animated.View>
        </View>
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <DisplayLeadImage />
      <PlaylistNavigation name={name} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { y: AnimatedHeaderValue },
                  },
                },
              ],
              { useNativeDriver: false }
            )}>
            {data.map((item, i) => {
              return (
                <View key={i}>
                  <RenderSongs item={item} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primaryBg,
  },
  wrapper: {
    flex: 1,
    backgroundColor: "black",
  },
  image: { width: "100%", height: 500, marginRight: 15, borderRadius: 5 },
  container: {
    padding: 15,
    marginVertical: 10,
    flex: 1,
  },
});
