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
import { ArtistConfig } from "../components/Search/ArtistConfig";

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
              artist: item[0].artistName,
              track: item[0].trackName,
              youtubeId: item[0].youtube,
              itemId: item.id,
              lyrics: item[0].lyrics,
              image: item[0].artwork,
            });
          }}>
          <Image source={{ uri: item[0].artwork }} style={styles.artwork} />
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
  };

  const searchArtist = (text) => {
    setFilterData(
      allSongs.filter(
        (artist) =>
          artist[0].artistName.toLowerCase().includes(text.toLowerCase()) ||
          artist[0].trackName.toLowerCase().includes(text.toLowerCase())
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
    fontSize: 13,
    fontFamily: "Poppins500",
    textTransform: "capitalize",
  },
  artwork: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  track: {
    color: "white",
    fontSize: 11,
    fontFamily: "Poppins400",
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
