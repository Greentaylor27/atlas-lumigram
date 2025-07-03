import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router, Tabs, usePathname } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useAuth } from '@/components/AuthProvider';

function CustomHeader() {
  const pathname = usePathname();
  const route = pathname.split('/').pop();
  const auth = useAuth();

  const titles: Record<string, string> = {
    Home: 'Home Feed',
    Add: 'Add Post',
    Favorites: 'Favorites',
    Testing: 'Testing',
  };

  const headerTitle = titles[route || ''] || '';

  async function logout() {
    await auth.logout();
    router.replace("/");
  }

  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>{headerTitle}</Text>
      <Pressable style={{ padding: 6 }} onPress={logout}>
        <Entypo name="log-out" size={24} color="#1DD2AF" />
      </Pressable>
    </View>
  );
}


export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CustomHeader />
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
    </GestureHandlerRootView>
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

