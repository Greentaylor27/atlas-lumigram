import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function PasswordInput({ password, setPassword }: { password: string, setPassword: React.Dispatch<React.SetStateAction<string>> }) {

  return (
    <TextInput
      style={[styles.inputBox, { marginBottom: '10%', paddingLeft: '2%' }]}
      onChangeText={setPassword}
      value={password}
      placeholder="Password"
      placeholderTextColor='white'
      secureTextEntry={true}
    />
  )
}

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    width: "90%",
    borderColor: '#1DD2AF',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white'
  }
})
