import { Box, Input as NBInput } from 'native-base';
import { Control, FieldValues, useController } from 'react-hook-form';
import { TextInput as DefaultTextInput, StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';
import {
  DEFAULT_INPUT_BG_COLOR,
  DEFAULT_INPUT_PLACEHOLDER_COLOR,
  DEFAULT_TEXT_COLOR,
} from '../../../../style/color';
import { DEFAULT_FONT_FAMILY, FONT_SIZE } from '../../../../style/font';
import InputShadow from '../InputShadow';

export type Props = {
  control: Control<FieldValues, string>;
  name: string;
  isInvalid: boolean;
} & DefaultTextInput['props'];

export default function Input(props: Props) {
  const { style, control, name, ...otherProps } = props;
  const { field } = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <InputShadow>
      <NBInput
        size="2xl"
        borderRadius="2xl"
        width="full"
        backgroundColor={DEFAULT_INPUT_BG_COLOR}
        borderWidth="1"
        borderColor={DEFAULT_INPUT_BG_COLOR}
        color={DEFAULT_TEXT_COLOR}
        fontFamily={DEFAULT_FONT_FAMILY}
        fontWeight="bold"
        fontSize={20}
        height="50"
        style={style}
        onChangeText={field.onChange}
        value={field.value}
        placeholderTextColor={DEFAULT_INPUT_PLACEHOLDER_COLOR}
        {...otherProps}
      />
    </InputShadow>
  );
}
