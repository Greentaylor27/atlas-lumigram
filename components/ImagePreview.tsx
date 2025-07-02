import { Image, StyleSheet } from "react-native";

export default function ImagePreview({ uri }: { uri: string | null }) {
  if (!uri) return null;

  return <Image source={{ uri }} style={styles.previewImage} />
}

const styles = StyleSheet.create({
  previewImage: {
    marginTop: 80,
    width: '85%',
    height: '55%',
    borderRadius: 15,
    resizeMode: 'cover'
  }
})
