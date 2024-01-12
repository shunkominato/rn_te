import { Box, Input as NBInput } from 'native-base';
import { DEFAULT_TEXT_COLOR } from '../../../../style/color';
import { DEFAULT_FONT_FAMILY, FONT_SIZE } from '../../../../style/font';
import { StyleSheet, TextInput } from 'react-native';

export default function Input() {
  return (
    // <NBInput
    //   size="2xl"
    //   borderRadius="2xl"
    //   width="3/4"
    //   backgroundColor="#F6F4E0"
    //   borderColor="#F3EEDA"
    //   color={DEFAULT_TEXT_COLOR}
    //   fontFamily={DEFAULT_FONT_FAMILY}
    //   fontWeight="bold"
    //   fontSize={20}
    //   style={[styles.text]}
    //   // shadow="1"
    // />
    <TextInput
      style={{
        backgroundColor: '#F6F4E0',
        width: '100%',
        height: 42,
        shadowColor: '#aaa',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 2,
        borderRadius: 8,
        color: DEFAULT_TEXT_COLOR,
      }}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#F6F4E0',
    // width: '100%',
    height: 42,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 2,
    borderRadius: 8,
    color: DEFAULT_TEXT_COLOR,
  },
});
