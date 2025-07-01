import { Alert, Pressable, StyleSheet } from "react-native";
import ButtonText from "@/components/ButtonText";
import { useAuth } from "./AuthProvider";
import { router } from "expo-router";

type SignInButtonProps = {
  email: string;
  password: string;
  action: "login" | "register"
}

export default function SignInButton({ email, password, action }: SignInButtonProps) {
  const auth = useAuth();

  async function login() {
    try {
      await auth.login(email, password);
    } catch (err) {
      Alert.alert("Email or Password is incorrect");
    }
  }

  async function register() {
    try {
      await auth.register(email, password);
    } catch (err) {
      Alert.alert("Unable to create account");
    }
  }

    async function handlepress() {
      if (!email || !password) {
        Alert.alert("Please provide Email and/or Password");
        return;
      }

      try {
        if (action === "login") {
          await login();
        } else {
          await register();
        }
        router.replace("/Home");

      } catch (err) {
        Alert.alert(action === "login" ? "LEmail or Password is incorrect" : "Unable to create account")
      }
    }

  return (
    <Pressable
      style={[styles.signinButton, { marginBottom: '2%' }]}
      onPress={handlepress}
    >
      <ButtonText text={action === "login" ? "Sign in": "Create account"} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  signinButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DD2AF',
    height: 50,
    width: '90%',
    borderRadius: 5,
  }
})
