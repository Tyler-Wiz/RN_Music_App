import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { PlaylistData } from "../Data/data";
import { PlaylistConfig } from "../components/Playlist/PlaylistConfig";
import { RenderPlayList } from "../components/Playlist/components/RenderPlayList";

export const PlaylistScreen = () => {
  const [
    isLoading,
    twentyTwenty,
    Street,
    WorkOut,
    ChopLife,
    Drive,
    Hiphop,
    Reggae,
    Piano,
    office,
    female,
    Bedroom,
  ] = PlaylistConfig();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          {PlaylistData.map((playlist, i) => {
            switch (i) {
              case 0:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={ChopLife} />
                  </View>
                );
              case 1:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={WorkOut} />
                  </View>
                );
              case 2:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={Street} />
                  </View>
                );
              case 3:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={Bedroom} />
                  </View>
                );
              case 4:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={Drive} />
                  </View>
                );
              case 5:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={Hiphop} />
                  </View>
                );
              case 6:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={Reggae} />
                  </View>
                );
              case 7:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={Piano} />
                  </View>
                );
              case 8:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={office} />
                  </View>
                );
              case 9:
                return (
                  <View key={i}>
                    <RenderPlayList playlist={playlist} data={female} />
                  </View>
                );
              default:
                return;
            }
          })}
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
    marginTop: 40,
  },
});
