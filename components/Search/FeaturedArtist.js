import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ArtistConfig } from "./ArtistConfig";
import { Artists } from "../../Data/data";
import { GlobalStyles } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
import { Description } from "../../modules/common/Description";

export const FeaturedArtist = () => {
  const [allSongs, wizkid, Burna, Fireboy, Kizz, Asake, Tiwa, Davido, Tems] =
    ArtistConfig();
  const navigation = useNavigation();

  const RenderListItem = ({ artist, data }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("PlaylistSongs", {
            data: data,
            img: artist.imageUrl,
          });
        }}>
        <Image source={artist.imageUrl} style={styles.img} />
        <Text style={styles.artist}>{artist.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Description title="Trending Artist" size={15} margin={10} />
      <ScrollView horizontal>
        {Artists.map((artist, i) => {
          switch (i) {
            case 0:
              return (
                <View key={i}>
                  <RenderListItem artist={artist} data={wizkid} />
                </View>
              );
            case 1:
              return (
                <View key={i}>
                  <RenderListItem artist={artist} data={Burna} />
                </View>
              );
            case 2:
              return (
                <View key={i}>
                  <RenderListItem artist={artist} data={Fireboy} />
                </View>
              );
            case 3:
              return (
                <View key={i}>
                  <RenderListItem artist={artist} data={Kizz} />
                </View>
              );
            case 4:
              return (
                <View key={i}>
                  <RenderListItem artist={artist} data={Asake} />
                </View>
              );
            case 5:
              return (
                <View key={i}>
                  <RenderListItem artist={artist} data={Tiwa} />
                </View>
              );
            case 6:
              return (
                <View key={i}>
                  <RenderListItem artist={artist} data={Davido} />
                </View>
              );
            case 7:
              return (
                <View key={i}>
                  <RenderListItem artist={artist} data={Tems} />
                </View>
              );
            default:
              return;
          }
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  artist: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
    textTransform: "capitalize",
    textAlign: "center",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginBottom: 5,
  },
});
