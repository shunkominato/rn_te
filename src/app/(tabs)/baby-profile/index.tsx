import { Box, Center, Container, VStack } from 'native-base';
import Input from '../../../components/ui/Form/Input';
import ScreenView from '../../../components/ui/ScreenView';
import Text from '../../../components/ui/Text';
import Label from '../../../components/ui/Form/Label';
import { useState } from 'react';
import Button from '../../../components/ui/Button/PrimaryButton';

export default function BabyProfile() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <ScreenView>
      <Center>
        <Container width="64">
          <Box width="full">
            <Label>赤ちゃんの呼び方</Label>
            <Input />
          </Box>
          <Box width="full" marginTop="4">
            <Label>赤ちゃんからあなたの呼び方</Label>
            <Input />
          </Box>
          <Box width="full" marginTop="4">
            <Label>一人称</Label>
            <Input />
          </Box>
          <Box width="full" marginTop="4">
            <Label>生年月日</Label>
            <Input />
          </Box>
        </Container>
      </Center>
      <Box marginTop="4">
        <Button>
          <Text style={{ color: '#fff' }}>保存する</Text>
        </Button>
      </Box>
    </ScreenView>
  );
}
