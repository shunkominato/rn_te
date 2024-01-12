import { ReactNode } from 'react';
import { Text as DefaultText, StyleSheet } from 'react-native';
import Text from '../../Text';
import { FONT_SIZE } from '../../../../style/font';

export type Props = {
  children: ReactNode;
} & DefaultText['props'];

export default function Label(props: Props) {
  const { style, children, ...otherProps } = props;

  return (
    <Text style={[{ padding: 4, fontSize: FONT_SIZE.LABEL }, style]} {...otherProps}>
      {children}
    </Text>
  );
}
