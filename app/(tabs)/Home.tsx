import { View, StyleSheet, Image, Dimensions } from "react-native";
import { FlashList } from '@shopify/flash-list';
import { homeFeed } from "@/placeholder";
import firestore from "@/lib/firestore";
import type { Post } from "@/lib/firestore";
import { useEffect, useState } from "react";


const screenWidth = Dimensions.get('window').width;

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchedPosts = await firestore.getPost();
        const sorted = fetchedPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        setPosts(sorted);
      } catch (err) {
        console.error("Failled to fetch posts:", err);
      }
    })();
  }, []);

  return (
      <View style={styles.container}>
        {/* This is where the images goes */}
        <FlashList
          data={posts}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
          estimatedItemSize={200}
          contentContainerStyle={styles.listContent}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 8,
  },
  image: {
    width: '98%',
    aspectRatio: 3/4,
    alignSelf: 'center',
    borderRadius: 15,
    margin: 2,
  }
})
