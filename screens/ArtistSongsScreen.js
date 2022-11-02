import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { RenderSongs } from "../components/RenderSongs";
import { NavWithSearch } from "../modules/common/NavWithSearch";
import { GlobalStyles } from "../constants/color";

export const ArtistSongsScreen = ({ route }) => {
  // data from artist //
  const data = route.params.data;
  // Flitered Data //
  const [loadedData, setLoadedData] = useState(data);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <NavWithSearch
          description="All Songs"
          data={data}
          setLoadedData={setLoadedData}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
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
    backgroundColor: GlobalStyles.colors.primaryBg,
  },
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
    flex: 1,
  },
});
