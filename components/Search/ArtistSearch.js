import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ArtistConfig } from "../../modules/hooks/ArtistConfig";
import { Artists } from "../../Data/data";
import { useNavigation } from "@react-navigation/native";

export const ArtistSearch = () => {
  const [allSongs, wizkid, Burna, Fireboy, Kizz, Asake, Tiwa, Davido, Tems] =
    ArtistConfig();
  const navigation = useNavigation();

  const RenderList = ({ data, artist, color }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PlaylistSongs", {
            data: data,
            img: artist.imageUrl,
          });
        }}
        key={artist.name}>
        <View style={[styles.container, { backgroundColor: color }]}>
          <Text style={styles.artist}>{artist.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      {Artists.map((artist, i) => {
        switch (i) {
          case 0:
            return (
              <View key={i}>
                <RenderList artist={artist} data={wizkid} />
              </View>
            );
          case 1:
            return (
              <View key={i}>
                <RenderList artist={artist} data={Burna} />
              </View>
            );
          case 2:
            return (
              <View key={i}>
                <RenderList artist={artist} data={Fireboy} />
              </View>
            );
          case 3:
            return (
              <View key={i}>
                <RenderList artist={artist} data={Kizz} />
              </View>
            );
          case 4:
            return (
              <View key={i}>
                <RenderList artist={artist} data={Asake} />
              </View>
            );
          case 5:
            return (
              <View key={i}>
                <RenderList artist={artist} data={Tiwa} />
              </View>
            );
          case 6:
            return (
              <View key={i}>
                <RenderList artist={artist} data={Davido} />
              </View>
            );
          case 7:
            return (
              <View key={i}>
                <RenderList artist={artist} data={Tems} />
              </View>
            );
          default:
            return;
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  image: { width: 70, height: 70, marginRight: 15, borderRadius: 5 },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
  },
  container: {
    borderColor: "#4c4c4c",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  artist: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins500",
    textTransform: "capitalize",
  },
});
