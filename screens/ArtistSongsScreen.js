import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import { RenderSongs } from "../components/RenderSongs";
import { NavWithSearch } from "../modules/common/NavWithSearch";
import { SearchInput } from "../modules/common/SearchInput";

export const ArtistSongsScreen = ({ route }) => {
  // data from artist //
  const data = route.params.data;
  const [loadedData, setLoadedData] = useState(data);
  // toggle visibility //
  const [isVisible, setIsVisible] = useState(false);
  // Animation //
  const slideDown = useRef(new Animated.Value(-20)).current;
  const animatedSearch = () => {
    Animated.timing(slideDown, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  // Search Function //
  const searchArtist = (text) => {
    setLoadedData(
      data.filter((artist) =>
        artist.trackName.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <NavWithSearch
          description="All Songs"
          setIsVisible={setIsVisible}
          isVisible={isVisible}
          animatedSearch={animatedSearch}
        />

        <Animated.View
          style={{
            position: "relative",
            transform: [
              {
                translateY: slideDown,
              },
            ],
          }}>
          {isVisible && (
            <SearchInput
              placeholder="Type Artist, Song or Lyrics"
              autoCorrect={false}
              onUpdateValue={(text) => {
                searchArtist(text);
              }}
            />
          )}
        </Animated.View>
        <ScrollView>
          {loadedData &&
            loadedData.map((item, i) => (
              <View key={i}>
                <RenderSongs item={item} />
              </View>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
    flex: 1,
  },
});
