import { background } from 'native-base/lib/typescript/theme/styled-system';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export default function ScreenView({ children }: { children: ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFAF5',
  },
});
