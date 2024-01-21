// import { Picker } from '@react-native-picker/picker';
import { Box, Center, CheckIcon, ChevronDownIcon, Select as NBSelect } from 'native-base';
import { Control, FieldValues } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ReactNode, useState } from 'react';
import {
  DEFAULT_INPUT_BG_COLOR,
  DEFAULT_SCREEN_COLOR,
  DEFAULT_TEXT_COLOR,
} from '../../../../style/color';
import { DEFAULT_FONT_FAMILY, FONT_SIZE } from '../../../../style/font';
import InputShadow from '../InputShadow';

export type Props = {
  control: Control<FieldValues, string>;
  name: string;
  children: ReactNode;
};

export default function Select({ control, name, children }: Props) {
  return (
    <InputShadow>
      <NBSelect
        borderWidth="0"
        // shadow="6"
        style={styles.text}
        dropdownIcon={
          <View
            style={{
              // backgroundColor: DEFAULT_INPUT_BG_COLOR,
              // height: 50,
              // width: 0,
              // alignItems: 'center',
              // justifyContent: 'center',
              // borderTopRightRadius: 8,
              // borderBottomRightRadius: 8,
              // borderColor: 'transparent',
              width: 0,
              borderWidth: 0,
            }}
          >
            {/* <ChevronDownIcon size="5" /> */}
          </View>
        }
      >
        {children}
      </NBSelect>
    </InputShadow>
  );
}

// co
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE.INPUT,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: 'bold',
    padding: 8,
    // backgroundColor: '#F6F4E0',
    backgroundColor: DEFAULT_INPUT_BG_COLOR,
    width: '100%',
    height: 50,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    borderRadius: 16,
    // borderTopLeftRadius: 16,
    // borderBottomLeftRadius: 16,
    color: DEFAULT_TEXT_COLOR,
    borderWidth: 0,
    overflow: 'visible',
  },
});
