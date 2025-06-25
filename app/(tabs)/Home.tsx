import { View, StyleSheet, Image, Dimensions } from "react-native";
import { FlashList } from '@shopify/flash-list';
import { homeFeed } from "@/placeholder";

const screenWidth = Dimensions.get('window').width;

export default function Home() {
  return (
      <View style={styles.container}>
        {/* This is where the images goes */}
        <FlashList
          data={homeFeed}
          keyExtractor={(item) => item.id}
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
    borderRadius: 15,
    maxWidth: screenWidth,
    height: 400,
    marginVertical: 4,
  }
})
