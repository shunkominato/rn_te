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
import { schema, SchemaType } from '../../app/(tabs)/baby-profile/validation';
import Button from '../../components/ui/Button/PrimaryButton';
import Input from '../../components/ui/Form/Input';
import Label from '../../components/ui/Form/Label';
import Text from '../../components/ui/Text';
import AlertText from '../../components/ui/Text/AlertText';
import DaySelect from './DaySelect/index.';
import MonthSelect from './MonthSelect/index.';
import YearSelect from './YearSelect/index.';

export default function BabyProfileContent() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({ resolver: zodResolver(schema) });

  const onSubmit = (date: any) => {
    console.log(date);
    setIsLoading(true);
  };

  const { colors } = useTheme();

  return (
    <Center>
      <Container width="64">
        <Box width="full">
          <Label>赤ちゃんの呼び方</Label>
          <Input
            placeholder="おれっち"
            control={control}
            name="nickName"
            isInvalid={!!errors?.nickName?.message}
          />
          <AlertText style={{ marginLeft: 8 }}>{errors?.nickName?.message}</AlertText>
        </Box>
        <Box width="full" marginTop="2">
          <Label>赤ちゃんからあなたの呼び方</Label>
          <Input placeholder="まま" control={control} name="calledName" />
          <AlertText style={{ marginLeft: 8 }}>{errors?.nickName?.message}</AlertText>
        </Box>
        <Box width="full" marginTop="2">
          <Label>一人称</Label>
          <Input placeholder="おれっち" control={control} name="firstPerson" />
          <AlertText style={{ marginLeft: 8 }}>{errors?.nickName?.message}</AlertText>
        </Box>
        <Box width="full" marginTop="2">
          <Label>生年月日</Label>

          <HStack space="2" width="48" alignItems="center">
            <Box width="16">
              <YearSelect control={control} name="aaa" />
            </Box>
            <Text style={{ fontSize: 15 }}>年</Text>
            <Box width="12">
              <MonthSelect control={control} name="aaa" />
            </Box>
            <Text>月</Text>
            <Box width="12">
              <DaySelect control={control} name="aaa" />
            </Box>
            <Text>日</Text>
          </HStack>
        </Box>
        <Box width="full" marginTop="2">
          <Label>性別</Label>
          {/* <TextInput keyboardType="numeric" /> */}
          <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
            <HStack>
              <Radio value="1" colorScheme="pink" size="md">
                <Text>男の子</Text>
              </Radio>
              <Radio value="2" colorScheme="pink" size="md" marginLeft={4}>
                <Text>女の子</Text>
              </Radio>
            </HStack>
          </Radio.Group>
        </Box>
        <Box marginTop="2" width="full" textAlign="end">
          <Box width="80">
            <Button variants="link" onPress={handleSubmit(onSubmit)}>
              <Text style={{ color: colors.rose[300], fontSize: 15 }}>
                ベビ語のプレビューを見る
              </Text>
            </Button>
          </Box>
        </Box>

        <Center width="full">
          <Box marginTop="2" style={{ width: 100 }}>
            <Button onPress={handleSubmit(onSubmit)} isLoading={isLoading}>
              <Text style={{ color: '#fff' }}>保存する</Text>
            </Button>
          </Box>
        </Center>
      </Container>
    </Center>
  );
}
