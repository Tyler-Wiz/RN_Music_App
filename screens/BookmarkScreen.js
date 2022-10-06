import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { RenderBookmarkContent } from "../components/Bookmark/RenderBookmarkContent";
import { RenderRemoveContent } from "../components/Bookmark/RenderRemoveContent";

export const BookmarkScreen = ({ navigation, route }) => {
  //Track params//
  const artist = route.params.artist;
  const track = route.params.track;
  const image = route.params.image;
  const lyrics = route.params.lyrics;
  const youtubeId = route.params.youtubeId;
  const id = route.params.itemId;
  const bookmarkedId = route.params.bookmarkedId;
  const favorite = route.params.favorite;

  return (
    <View style={styles.container}>
      {favorite ? (
        <View style={styles.favoriteWrapper}>
          <RenderRemoveContent id={id} />
        </View>
      ) : (
        <View style={styles.wrapper}>
          <RenderBookmarkContent
            artist={artist}
            track={track}
            image={image}
            lyrics={lyrics}
            youtubeId={youtubeId}
            id={id}
            bookmarkedId={bookmarkedId}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  wrapper: {
    height: "40%",
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
  },
  favoriteWrapper: {
    height: "25%",
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
  },
});
