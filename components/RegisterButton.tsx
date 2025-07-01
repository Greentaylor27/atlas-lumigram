import { router } from "expo-router";
import { StyleSheet, Pressable } from "react-native";
import ButtonText from "./ButtonText";

export default function RegisterButton({ action }: { action: "login" | "register"}) {
  function handlepress() {
    if (action === "login") {
      router.replace("/RegisterPage");
    } else {
      router.replace('/');
    }
  }
  
  return (
    <Pressable
      style={styles.registerButton}
      onPress={handlepress}
    >
      <ButtonText text={action === "login" ? "Create a new account": "Login to exsisting account"} />
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
