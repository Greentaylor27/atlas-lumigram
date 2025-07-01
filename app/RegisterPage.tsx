import { View, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "@/components/AuthProvider";
import Logo from "@/components/Logo";
import Header from "@/components/Header";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import SignInButton from "@/components/SignInButton";
import RegisterButton from "@/components/RegisterButton";

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  async function register() {
    Alert.alert(`Creating account using ${email} and ${password}`);
    try{
      await auth.register(email, password);
      router.replace('/Home');
    } catch (err) {
      Alert.alert("Unable to create account");
    }
  }

  return (
    <View style={styles.wholeScreen}>
      <Logo />
      <Header text="Register" />
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput password={password} setPassword={setPassword} />
      <SignInButton email={email} password={password} action="register" />
      <RegisterButton action="register" />
    </View>
  );
}

const styles = StyleSheet.create({
  wholeScreen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#00003C",
  },
})
