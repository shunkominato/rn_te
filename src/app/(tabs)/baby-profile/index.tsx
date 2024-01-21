import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from 'expo-router';
import {
  Box,
  Center,
  Container,
  HStack,
  Stack as NBStack,
  Radio,
  useTheme,
  VStack,
} from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import { z } from 'zod';
import { useState } from 'react';
import Button from '../../../components/ui/Button/PrimaryButton';
import Input from '../../../components/ui/Form/Input';
import Label from '../../../components/ui/Form/Label';
import Select from '../../../components/ui/Form/Select';
import ScreenView from '../../../components/ui/ScreenView';
import Text from '../../../components/ui/Text';
import AlertText from '../../../components/ui/Text/AlertText';
import BabyProfileContent from '../../../screens/BabyProfile';
// import BabyProfileContent from '../../../screen-contents/BabyProfile';
// import YearSelect from '../../../screens/BabyProfile/YearSelect/index.';
import { schema, SchemaType } from './validation';

export default function BabyProfile() {
  const { colors } = useTheme();

  return (
    <ScreenView>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: '赤ちゃんのプロフィール',
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: colors.rose[300] },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
          headerShown: true,
          // headerRight: () => <Menu />,
        }}
      />
      <BabyProfileContent />
    </ScreenView>
  );
}
