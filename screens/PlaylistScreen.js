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
  ] = PlaylistConfig();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          {PlaylistData.map((playlist, i) => {
            if (i === 0) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={ChopLife} />
                </View>
              );
            }
            if (i === 1) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={WorkOut} />
                </View>
              );
            }
            if (i === 2) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={Street} />
                </View>
              );
            }
            if (i === 3) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={twentyTwenty} />
                </View>
              );
            }
            if (i === 4) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={Drive} />
                </View>
              );
            }
            if (i === 5) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={Hiphop} />
                </View>
              );
            }
            if (i === 6) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={Reggae} />
                </View>
              );
            }
            if (i === 7) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={Piano} />
                </View>
              );
            }
            if (i === 8) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={office} />
                </View>
              );
            }
            if (i === 9) {
              return (
                <View key={i}>
                  <RenderPlayList playlist={playlist} data={female} />
                </View>
              );
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
