import { Tabs, usePathname } from 'expo-router';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

function CustomeHeader() {
  const pathname = usePathname();
  const route = pathname.split('/').pop();

  const titles: Record<string, string> = {
    Home: 'Home Feed',
    Add: 'Add Post',
    Favorites: 'Favorites',
  };

  const headerTitle = titles[route || ''] || '';

  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>{headerTitle}</Text>
      <Pressable
        style={{ padding: 6 }}
        onPress={() => Alert.alert('You are logging out!')}
      >
        <Entypo name="log-out" size={24} color="#1DD2AF" />
      </Pressable>
    </View>
  );
}


export default function TabLayout() {
  return (
    <>
      <CustomeHeader />
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name='Home'
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <AntDesign name="home" size={24} color='black' />
            )
          }}
        />
        <Tabs.Screen
          name="Add"
          options={{
            tabBarIcon: () => <AntDesign name="plus" size={24} color='black' />
          }}
        />
        <Tabs.Screen
          name="Favorites"
          options={{
            tabBarIcon: () => <AntDesign name="heart" size={24} color='black' />
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
  },
})
