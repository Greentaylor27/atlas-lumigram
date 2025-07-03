import { View, StyleSheet, Image, Dimensions } from "react-native";
import { FlashList } from '@shopify/flash-list';
import { useHomeFeed } from "@/hooks/useHomeFeed";

export default function Home() {
  const { posts, refreshing, handleRefresh } = useHomeFeed();

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
          refreshing={refreshing}
          onRefresh={handleRefresh}
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
