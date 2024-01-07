import { Box, Button, HamburgerIcon, Menu as MenuButton, Pressable } from 'native-base';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../Themed';
import { Link } from 'expo-router';
import Text from '../Text';

function BurgerMenuButton() {
  return (
    <TouchableOpacity style={styles.hamburgerMenu}>
      {[...Array(3)].map((_, index) => {
        return <View key={`bar_${index}`} style={styles.hamburgerMenuBar} />;
      })}
    </TouchableOpacity>
  );
}

export default function Menu() {
  const [shouldOverlapWithTrigger] = useState(false);
  return (
    <MenuButton
      w="160"
      // shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
      placement={'bottom right'}
      trigger={(triggerProps) => {
        return (
          <TouchableOpacity style={styles.hamburgerMenu} {...triggerProps}>
            {[...Array(3)].map((_, index) => {
              return <View key={`bar_${index}`} style={styles.hamburgerMenuBar} />;
            })}
          </TouchableOpacity>
        );
      }}
    >
      <MenuButton.Item>
        <Link href="/(tabs)">
          <Text>赤ちゃんのプロフィール</Text>
        </Link>
      </MenuButton.Item>
      <MenuButton.Item>Nunito Sans</MenuButton.Item>
      <MenuButton.Item>Roboto</MenuButton.Item>
    </MenuButton>
  );
}

const styles = StyleSheet.create({
  hamburgerMenu: {
    width: 30,
    height: 25,
  },
  hamburgerMenuBar: {
    width: 25,
    borderBottomWidth: 3,
    borderColor: '#fff',
    marginBottom: 7,
  },
  menu: {
    marginTop: 40,
  },
});
