import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
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
  }
})
