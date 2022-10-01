import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
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

  const RenderList = ({ item, i }) => {
    return (
      <View style={styles.trackContainer}>
        <TouchableOpacity
          style={styles.singleTrackContainer}
          key={i}
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
          <Image source={{ uri: item.artwork }} style={styles.artwork} />
          <View>
            <Text style={styles.track}>{item.trackName}</Text>
            <Text style={styles.artist}>{item.artistName}</Text>
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
    setFilterData(
      allSongs.filter(
        (artist) =>
          artist.artistName.toLowerCase().includes(text.toLowerCase()) ||
          artist.trackName.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
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
                placeholder="Artists, Songs, Lyrics"
                autoCorrect={false}
                onUpdateValue={(text) => {
                  searchArtist(text);
                }}
              />
            </View>
          </View>
          <Text style={styles.artist}>Search By Artists</Text>
          <ArtistSearch />
          {filterData.map((artist, i) => (
            <RenderList item={artist} i={i} />
          ))}
        </View>
      </ScrollView>
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
