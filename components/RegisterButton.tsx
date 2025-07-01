import { router } from "expo-router";
import { StyleSheet, Pressable } from "react-native";
import ButtonText from "./ButtonText";

export default function RegisterButton() {
  return (
    <Pressable
      style={styles.registerButton}
      onPress={() => router.replace('/RegisterPage')}
    >
      <ButtonText text="Create a new account" />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  registerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 5,
    height: 50,
    width: '90%',
    borderWidth: 2,

  }
})
