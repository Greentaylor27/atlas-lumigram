import { View, StyleSheet, } from "react-native";
import React, { useState } from "react";
import Logo from "@/components/Logo"
import Header from "@/components/Header";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import SignInButton from "@/components/SignInButton";
import RegisterButton from "@/components/RegisterButton";

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.wholeScreen}>
      <Logo />
      <Header text="Login"/>
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput password={password} setPassword={setPassword} />
      <SignInButton email={email} password={password} action="login" />
      <RegisterButton action="login" />
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
