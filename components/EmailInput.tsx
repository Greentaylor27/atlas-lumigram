import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function EmailInput({ email, setEmail }: { email: string, setEmail: React.Dispatch<React.SetStateAction<string>>}) {

  return (
    <TextInput
      style={[styles.inputBox, { marginTop: "5%", marginBottom: 8, paddingLeft: 16 }]}
      onChangeText={setEmail}
      value={email}
      placeholder="Email"
      placeholderTextColor='white'
    />
  )
}

const styles = StyleSheet.create({
  inputBox: {
  height: 50,
  width: '90%',
  borderColor: '#1DD2AF',
  borderWidth: 1,
  borderRadius: 5,
  color: 'white'
  }
})
