import { Button as NBButton } from 'native-base';
import {
  IButtonComponentType,
  IButtonProps,
} from 'native-base/lib/typescript/components/primitives/Button/types';
import { Button, Button as DefaultButton, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

type BaseButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
  variants?: IButtonProps['variant'];
  variantProps: {
    bg: IButtonProps['bg'];
    shadow: IButtonProps['shadow'];
  };
} & Omit<DefaultButton['props'], 'title'> &
  IButtonProps;

function BaseButton({
  children,
  color,
  isLoading,
  variants = 'solid',
  variantProps,
  ...otherProps
}: BaseButtonProps) {
  return (
    <>
      <NBButton
        variant={variants}
        isLoading={isLoading}
        size="xs"
        colorScheme="rose"
        width="full"
        bg={variantProps.bg}
        color={(color as string) || 'white'}
        borderRadius="2xl"
        shadow={variantProps.shadow}
        padding="3"
        paddingLeft="0"
        paddingRight="0"
        {...otherProps}
      >
        {children}
      </NBButton>
    </>
  );
}

const getVariantsProps = (
  variants: IButtonProps['variant']
): {
  bg: IButtonProps['bg'];
  shadow: IButtonProps['shadow'];
} => {
  if (variants === 'solid')
    return {
      bg: 'rose.300',
      shadow: '3',
    };

  return {
    bg: '',
    shadow: '',
  };
};

type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
  variants?: IButtonProps['variant'];
} & Omit<DefaultButton['props'], 'title'>;

export default function PrimaryButton({
  children,
  color,
  isLoading,
  variants = 'solid',
  ...otherProps
}: ButtonProps) {
  const variantsProps = getVariantsProps(variants);

  return (
    <>
      <BaseButton
        variants={variants}
        isLoading={isLoading}
        {...otherProps}
        variantProps={variantsProps}
      >
        {children}
      </BaseButton>
    </>
  );
}
