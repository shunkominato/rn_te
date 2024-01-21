import { Text as DefaultText, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { FONT_SIZE } from '../../../../style/font';
import Text from '../../Text';

export type Props = {
  children: ReactNode;
} & DefaultText['props'];

export default function Label(props: Props) {
  const { style, children, ...otherProps } = props;

  return (
    <Text style={[{ padding: 4, marginLeft: 2, fontSize: FONT_SIZE.LABEL }, style]} {...otherProps}>
      {children}
    </Text>
  );
}
