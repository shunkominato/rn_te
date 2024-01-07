import { ReactNode } from 'react';
import { Text as DefaultText, StyleSheet } from 'react-native';

export type Props = {
  children: ReactNode;
} & DefaultText['props'];

export default function Text(props: Props) {
  const { style, children, ...otherProps } = props;
  return (
    <DefaultText style={[{ fontFamily: 'MPLUSRounded' }, styles.text, style]} {...otherProps}>
      {children}
    </DefaultText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
