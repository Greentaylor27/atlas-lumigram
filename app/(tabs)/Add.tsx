import { View, StyleSheet, } from 'react-native';
import { useImagePicker } from '@/hooks/useImagePicker';
import storage from '@/lib/storage';
import ImagePreview from '@/components/ImagePreview';
import PostForm from '@/components/PostForm';
import ImagePickerButton from '@/components/ImagePickerButton';
import firestore from '@/lib/firestore';
import { useState } from 'react';
import { useAuth } from '@/components/AuthProvider';


export default function AddPost() {
  const auth = useAuth();
  const {image: selectedImage, pickImage, reset } = useImagePicker();
  const [caption, setCaption] = useState('');

  function resetAll() {
    reset();
    setCaption('');
  }

  async function save() {
    if (!selectedImage) return;

    const name = selectedImage?.split("/").pop() as string;
    const { downloadUrl, metadata } = await storage.upload(selectedImage, name);

    alert("Post added!");

    firestore.addPost({
      caption,
      image: downloadUrl,
      createdAt: new Date(),
      createBy: auth.user?.uid!!,
    });

    resetAll();
  }

  return (
    <View style={styles.container}>
      {selectedImage ? (
        <>
          <ImagePreview uri={selectedImage} />
          <PostForm
            caption={caption}
            setCaption={setCaption}
            onSave={save}
            onReset={reset}
          />
        </>
      ) : (
        <ImagePickerButton onPress={pickImage} />
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
})
