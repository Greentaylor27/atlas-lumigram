import { Pressable, Text, View, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function ImagePickerButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View>
        <FontAwesome5 name="images" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Choose a photo</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: '#1DD2AF',
    borderRadius: 15,
    height: '8%',
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  }
})
