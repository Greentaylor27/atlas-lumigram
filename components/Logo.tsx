import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image
      source={require('../assets/images/logo.png')}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 250,
    resizeMode: "contain",
    marginTop: "50%",
    marginBottom: "2%"
  }
})
