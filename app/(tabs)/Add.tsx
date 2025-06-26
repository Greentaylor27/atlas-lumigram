import { View, Text, Pressable, StyleSheet, Image, TextInput } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function AddPost() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.previewImage} />
      )}

      {!selectedImage && (
        <Pressable style={styles.button} onPress={pickImage}>
          <View>
            <FontAwesome5 name="images" size={20} color='white' style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Choose a photo</Text>
          </View>
        </Pressable>
      )}

      {selectedImage && (
        <View style={styles.otherContent}>
          <TextInput
            style={styles.input}
            placeholder='Add a caption'
            placeholderTextColor='#D3D3D3'
            multiline={true}
          />
          <Pressable style={styles.saveButton}>
            <Text style={styles.buttonText}>
              Save
            </Text>
          </Pressable>
          <Pressable style={styles.resetButton}>
            <Text style={styles.resetText}>Reset</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1DD2AF',
    borderRadius: 15,
    height: '8%',
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },
  previewImage: {
    marginTop: 20,
    width: '85%',
    height: '55%',
    borderRadius: 15,
    resizeMode: 'cover'
  },
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
    marginTop: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetText: {
    fontSize: 18,
  }
})
