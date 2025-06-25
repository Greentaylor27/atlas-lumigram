import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='Home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          )
        }}
      />
    </Tabs>
  )
}
