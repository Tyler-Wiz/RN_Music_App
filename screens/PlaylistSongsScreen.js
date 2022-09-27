import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PlaylistNavigation } from "../modules/common/PlaylistNavigation";
import { MoreIcon } from "../modules/common/MoreIcon";
import { useContext, useState, useEffect } from "react";
import { SongContext } from "../store/Song-Context";

export const PlaylistSongsScreen = ({ route }) => {
  const data = route.params.data;
  const name = route.params.name;
  const img = route.params.img;
  const navigation = useNavigation();

  // Context //
  const songCtx = useContext(SongContext);

  // Get Id Of Current Playlist //
  const [bookmarkedId, setBookmarkedId] = useState("");

  const checkName = (id) => {
    songCtx.markPlaylist?.map((item) => {
      if (item === id) {
        setBookmarkedId(id);
      }
    });
  };

  useEffect(() => {
    checkName(name);
  }, []);

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 250;
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
            <Image source={img} style={styles.image} />
          </Animated.View>
        </View>
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <DisplayLeadImage />
      <PlaylistNavigation name={name} bookmarkedId={bookmarkedId} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ScrollView
            scrollEventThrottle={16}
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
              let number = i + 1;
              return (
                <View style={styles.trackContainer} key={i}>
                  <TouchableOpacity
                    style={styles.singleTrackContainer}
                    onPress={() => {
                      navigation.navigate("Track", {
                        artist: item[0].artistName,
                        track: item[0].trackName,
                        youtubeId: item[0].youtube,
                        itemId: item.id,
                        lyrics: item[0].lyrics,
                        image: item[0].artwork,
                      });
                    }}>
                    <Image
                      source={{ uri: item[0].artwork }}
                      style={styles.artwork}
                    />
                    <View>
                      <Text style={styles.artist}>{item[0].artistName}</Text>
                      <Text style={styles.track}>{item[0].trackName}</Text>
                    </View>
                  </TouchableOpacity>
                  <MoreIcon
                    youtubeId={item[0].youtube}
                    lyrics={item[0].lyrics}
                    artist={item[0].artistName}
                    track={item[0].trackName}
                    image={item[0].artwork}
                  />
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
    backgroundColor: "black",
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
  trackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  singleTrackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  artist: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins500",
  },
  artwork: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  track: {
    color: "white",
    fontSize: 11,
    fontFamily: "Poppins400",
  },
  icon: {
    marginRight: 2,
  },
  viewCount: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
});
