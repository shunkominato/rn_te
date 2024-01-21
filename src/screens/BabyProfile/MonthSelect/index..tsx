import { Box, Center, CheckIcon, ChevronDownIcon, Select as NBSelect } from 'native-base';
import { Control, FieldValues } from 'react-hook-form';
import { memo, ReactNode } from 'react';
import Select from '../../../components/ui/Form/Select';

export type Props = {
  control: Control<FieldValues, string>;
  name: string;
};

export default function MonthSelect({ control, name }: Props) {
  return (
    <Select control={control} name={name}>
      {[...Array(12)].map((_, index) => {
        const month = String(1 + index);
        return <NBSelect.Item style={{ borderWidth: 0 }} key={index} label={month} value={month} />;
      })}
    </Select>
  );
}
