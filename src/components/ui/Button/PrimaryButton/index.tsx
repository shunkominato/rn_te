import { Button as NBButton } from 'native-base';
import Text from '../../Text';
import { Button as DefaultButton, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
} & Omit<DefaultButton['props'], DefaultButton['props']['title']>;

export default function PrimaryButton(props: Props) {
  const { children, ...otherProps } = props;
  return (
    <NBButton
      size="sm"
      colorScheme="rose"
      bg="rose.300"
      color="white"
      borderRadius="xl"
      shadow="3"
      padding="3"
    >
      {children}
    </NBButton>
  );
}
