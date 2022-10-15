import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import React, { useState } from "react";
import { SearchInput } from "../modules/common/SearchInput";
import { MaterialIcons } from "@expo/vector-icons";
import { ArtistSearch } from "../components/Search/ArtistSearch";
import { ArtistConfig } from "../modules/hooks/ArtistConfig";
import { RenderSongs } from "../components/RenderSongs";

export const SearchScreen = ({ navigation }) => {
  // Data //
  const [allSongs] = ArtistConfig();
  const [filterData, setFilterData] = useState([]);
  // List Rendering //
  const renderList = ({ item, i }) => {
    return <RenderSongs item={item} i={i} />;
  };
  // Search Function //
  const searchArtist = (text) => {
    if (text < 3) {
      setFilterData([]);
    } else {
      setFilterData(
        allSongs.filter(
          (artist) =>
            artist.artistName.toLowerCase().includes(text.toLowerCase()) ||
            artist.trackName.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <MaterialIcons
            name="arrow-back-ios"
            size={18}
            color="white"
            style={styles.icon}
            onPress={() => {
              navigation.navigate("home");
            }}
          />
          <View style={styles.search}>
            <SearchInput
              placeholder="Type Artist, Song or Lyrics"
              autoCorrect={false}
              onUpdateValue={(text) => {
                searchArtist(text);
              }}
            />
          </View>
        </View>
        <Text style={styles.artist}>Search By Artists</Text>
        <ArtistSearch />
        <FlatList
          data={filterData}
          renderItem={renderList}
          keyExtractor={(item) => item.id}
          initialNumToRender={20}
        />
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
    padding: 15,
    flex: 1,
  },
  searchWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  search: {
    flex: 2,
    marginLeft: 20,
  },
  artist: {
    color: "white",
    fontSize: 11,
    fontFamily: "Poppins400",
  },
  artwork: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  track: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins500",
    textTransform: "capitalize",
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
});
