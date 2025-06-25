import { Tabs, usePathname } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
  const pathname = usePathname();
  const route = pathname.split('/').pop();

  const titles: Record<string, string> = {
    Home: 'Home Feed',
    Add: 'Add Post',
    Favorites: 'Favorites',
  };

  const headerTitle = titles[route || ''] || '';

  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header */}
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>{headerTitle}</Text>
        <Pressable
          style={{ padding: 6 }}
          onPress={() => Alert.alert('You are logging out!')}
        >
          <Entypo name="log-out" size={20} color="#1DD2AF" />
        </Pressable>
      </View>
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
      </Tabs>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBox: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
  },
})
