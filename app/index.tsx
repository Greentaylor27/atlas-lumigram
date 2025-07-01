import { Text, View, StyleSheet, TextInput, Image, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "@/components/AuthProvider";

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <View style={styles.wholeScreen}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.image}/>
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        style={[styles.inputBox, { marginTop: '5%', marginBottom: 8, paddingLeft: 16 }]}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor='white'
      />
      <TextInput 
        style={[styles.inputBox, { marginBottom: '10%', paddingLeft: '2%' }]}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
      />
      <Pressable
        style={[styles.signinButton, { marginBottom: '2%'}]}
        onPress={() => {
          if (!email && !password || !email || !password) {
            Alert.alert("Please provide Email and/or Password");
          } else {
            login();
          }
        }}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
      <Pressable
        style={styles.registerButton}
        onPress={() => {
          router.replace('/RegisterPage');
        }}
      >
        <Text style={styles.buttonText}>Create a new account</Text>
      </Pressable>
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
  inputBox: {
    height: 50,
    width: '90%',
    borderColor: '#1DD2AF',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white'
  },
  image: {
    height: 150,
    width: 250,
    resizeMode: "contain",
    marginTop: '50%',
    marginBottom: '2%'
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  buttonText: {
    color: 'white',
  },
  signinButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DD2AF',
    height: 50,
    width: '90%',
    borderRadius: 5,
  },
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
