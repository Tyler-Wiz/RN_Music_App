import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SearchInput } from "../modules/common/SearchInput";
import { MaterialIcons } from "@expo/vector-icons";
import { ArtistSearch } from "../components/Search/ArtistSearch";
import { allSongsConfig } from "../modules/hooks/allSongs-config";
import { RenderSongs } from "../components/RenderSongs";
import { AlbumConfig } from "../components/Albums/AlbumConfig";
import { GlobalStyles } from "../constants/color";
import { RenderAlbums } from "../components/RenderAlbums";

export const SearchScreen = ({ navigation }) => {
  // Data //
  const [allSongs] = allSongsConfig();
  const [albums] = AlbumConfig();
  const [filterData, setFilterData] = useState([]);
  const [filterAlbum, setFilterAlbum] = useState([]);
  // Search Function //
  const searchArtist = (text) => {
    if (text < 3) {
      setFilterData([]);
      setFilterAlbum([]);
    } else {
      setFilterData(
        allSongs.filter(
          (artist) =>
            artist.artistName.toLowerCase().includes(text.toLowerCase()) ||
            artist.trackName.toLowerCase().includes(text.toLowerCase())
        )
      );
      setFilterAlbum(
        albums.filter(
          (album) =>
            album[0].AlbumName.toLowerCase().includes(text.toLowerCase()) ||
            album[0].artistName.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  const showfirstFive = filterData.slice(0, 5);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <Pressable
            onPress={() => {
              navigation.navigate("home");
            }}>
            <MaterialIcons
              name="arrow-back-ios"
              size={18}
              color={GlobalStyles.colors.iconColor}
              style={styles.icon}
            />
          </Pressable>

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
        <ScrollView showsVerticalScrollIndicator={false}>
          {filterAlbum.length !== 0 && (
            <View style={styles.desc}>
              <Text style={styles.descTitle}>Album</Text>
            </View>
          )}
          {filterAlbum &&
            filterAlbum.map((item, i) => (
              <View key={i}>
                <RenderAlbums
                  item={item}
                  width={50}
                  height={50}
                  flex="row"
                  bottom={0}
                />
              </View>
            ))}
          {showfirstFive.length !== 0 && (
            <View style={styles.desc}>
              <Text style={styles.descTitle}>Songs</Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("songs", {
                    data: filterData,
                  });
                }}>
                {filterData.length > 5 && (
                  <Text style={styles.viewMore}>View all</Text>
                )}
              </Pressable>
            </View>
          )}
          {showfirstFive &&
            showfirstFive.map((item, i) => (
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
    backgroundColor: GlobalStyles.colors.primaryBg,
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
    marginBottom: 10,
  },
  search: {
    flex: 2,
    marginLeft: 20,
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
  viewMore: {
    color: GlobalStyles.colors.accentPrimary,
    fontSize: 14,
    fontFamily: "Poppins600",
  },
  desc: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  descTitle: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 16,
    fontFamily: "Poppins600",
  },
});
