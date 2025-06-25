import { View, StyleSheet, Image } from "react-native";

export default function Home() {
  return (
      <View style={styles.container}>
        {/* This is where the images goes */}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBox: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
  },
  imageElement: {
    borderRadius: 5,
  }
})
