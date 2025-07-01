import { Alert, Pressable, StyleSheet } from "react-native";
import ButtonText from "@/components/ButtonText";
import { useAuth } from "./AuthProvider";
import { router } from "expo-router";

export default function SignInButton({ email, password}: { email: string, password: string }) {
  const auth = useAuth();

    async function login() {
      try {
        await auth.login(email, password);
        router.replace('/(tabs)/Home');
      } catch (err) {
        Alert.alert("Email or Password is incorrect");
      }
    }

  return (
    <Pressable
      style={[styles.signinButton, { marginBottom: '2%' }]}
      onPress={() => {
        if (!email && !password || !email || !password) {
          Alert.alert("Please provide Email and/or Password");
        } else {
          login();
        }
      }}
    >
      <ButtonText text="Sign in" />
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
