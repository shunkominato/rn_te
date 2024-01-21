import { Text as DefaultText, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { DEFAULT_ALERT_COLOR, DEFAULT_TEXT_COLOR } from '../../../../style/color';
import { DEFAULT_FONT_FAMILY, FONT_SIZE } from '../../../../style/font';

export type Props = {
  children: ReactNode;
} & DefaultText['props'];

export default function AlertText(props: Props) {
  const { style, children, ...otherProps } = props;
  return (
    <DefaultText style={[{ fontFamily: DEFAULT_FONT_FAMILY }, styles.text, style]} {...otherProps}>
      {children}
    </DefaultText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE.ALERT_TEXT,
    fontWeight: 'bold',
    color: DEFAULT_ALERT_COLOR,
  },
});
