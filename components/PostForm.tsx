import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

type PostFormProps = {
  caption: string;
  setCaption: (text: string) => void;
  onSave: () => void;
  onReset: () => void;
}

export default function PostForm({ caption, setCaption, onSave, onReset }: PostFormProps) {
  return (
    <View style={styles.otherContent}>
      <TextInput
        style={styles.input}
        placeholder="Add a caption"
        placeholderTextColor="#D3D3D3"
        multiline={true}
        value={caption}
        onChangeText={setCaption}
      />
      <Pressable style={styles.saveButton} onPress={onSave}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>

      <Pressable style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  otherContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    width: '90%',
  },
  input: {
    width: '95%',
    height: 65,
    borderColor: '#1DD2AF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'center',
    fontSize: 16,
  },
  saveButton: {
    height: '20%',
    width: '75%',
    marginTop: 16,
    backgroundColor: '#1DD2AF',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButton: {
    height: '20%',
    width: '75%',
    paddingTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetText: {
    fontSize: 18,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  }
})
