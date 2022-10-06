import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SearchInput } from "../modules/common/SearchInput";
import { MoreIcon } from "../modules/common/MoreIcon";
import { MaterialIcons } from "@expo/vector-icons";
import { ArtistSearch } from "../components/Search/ArtistSearch";
import { ArtistConfig } from "../modules/hooks/ArtistConfig";

export const SearchScreen = ({ navigation }) => {
  const [allSongs] = ArtistConfig();
  const [filterData, setFilterData] = useState([]);

  const renderList = ({ item, i }) => {
    return (
      <View style={styles.trackContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Track", {
              artist: item.artistName,
              track: item.trackName,
              youtubeId: item.youtube,
              itemId: item.id,
              lyrics: item.lyrics,
              image: item.artwork,
            });
          }}>
          <View style={styles.singleTrackContainer} key={item.youtube}>
            <Image source={{ uri: item.artwork }} style={styles.artwork} />
            <View>
              <Text style={styles.track}>{item.trackName}</Text>
              <Text style={styles.artist}>{item.artistName}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <MoreIcon
          youtubeId={item.youtube}
          lyrics={item.lyrics}
          artist={item.artistName}
          track={item.trackName}
          image={item.artwork}
        />
      </View>
    );
  };

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
              navigation.goBack();
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
