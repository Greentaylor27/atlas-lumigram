import { StyleSheet, Text } from "react-native";


export default function ButtonText({ text }: { text: string }) {
  return(
    <Text style={styles.buttonText}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white'
  }
})
