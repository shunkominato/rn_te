import { background } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';
import { DEFAULT_SCREEN_COLOR } from '../../../style/color';

export default function ScreenView({ children }: { children: ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DEFAULT_SCREEN_COLOR,
  },
});
