import { Text, StyleSheet } from "react-native";

export default function Header({ text }: { text: string }) {
  return (
    <Text style={styles.headerText}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  headerText: {
  color: "white",
  fontWeight: "bold",
  fontSize: 24,
}
})
