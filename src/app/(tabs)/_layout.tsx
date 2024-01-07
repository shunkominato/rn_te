import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { useNavigationState, useRoute } from '@react-navigation/native';
import { Link, Tabs, useNavigation } from 'expo-router';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const routeName = useNavigationState((state) => state.routes[state.index].name);

  console.log(routeName);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'pink',
        tabBarActiveBackgroundColor: 'red',
        tabBarStyle: { backgroundColor: '#FCF8F8', height: 70 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab ssOne',
          tabBarIcon: ({ color }) => <TabBarIcon name="child" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two/index"
        options={{
          // tabBarStyle: { display: "none" },
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="photo" color={color} />,
        }}
      />
    </Tabs>
  );
}
