import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { FlashList } from '@shopify/flash-list';
import { useHomeFeed } from "@/hooks/useHomeFeed";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { handleDoublePress, handleLongPress } from "@/hooks/gestureHandlers";
import { useAuth } from "@/components/AuthProvider";
export default function Home() {
  const { posts, refreshing, handleRefresh } = useHomeFeed();
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <FlashList
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          const doubleTap = Gesture.Tap()
            .numberOfTaps(2)
            .onEnd(() => {
              if (!user) {
                alert("Please log in to add to favorites.");
                return;
              }
              runOnJS(handleDoublePress)(item, user.uid);
            });

          const longPress = Gesture.LongPress()
            .minDuration(300)
            .onEnd((event, success) => {
              if (success) {
                runOnJS(handleLongPress)(item);
              }
            });
          
          const composed = Gesture.Race(longPress, doubleTap)

          return (
            <GestureDetector gesture={composed}>
              <Pressable style={{ position: 'relative' }}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </Pressable>
            </GestureDetector>
          );
        }}
        refreshing={refreshing}
        onRefresh={handleRefresh}
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
    aspectRatio: 3 / 4,
    alignSelf: 'center',
    borderRadius: 15,
    margin: 2,
  },
})
