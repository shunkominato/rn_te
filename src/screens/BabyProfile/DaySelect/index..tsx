import { Box, Center, CheckIcon, ChevronDownIcon, Select as NBSelect } from 'native-base';
import { Control, FieldValues } from 'react-hook-form';
import { memo, ReactNode } from 'react';
import Select from '../../../components/ui/Form/Select';

export type Props = {
  control: Control<FieldValues, string>;
  name: string;
};

export default function DaySelect({ control, name }: Props) {
  return (
    <Select control={control} name={name}>
      {[...Array(31)].map((_, index) => {
        const day = String(1 + index);
        return <NBSelect.Item style={{ borderWidth: 0 }} key={index} label={day} value={day} />;
      })}
    </Select>
  );
}
