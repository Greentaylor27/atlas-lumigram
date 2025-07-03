import { View, Text, StyleSheet } from "react-native";

export default function CaptionOverlay({ caption }: { caption: string }) {
  return (
    <View style={styles.captionOverlay}>
      <Text style={styles.captionText}>{caption}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  captionOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00003C',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    zIndex: 1,
  },
  captionText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
})
