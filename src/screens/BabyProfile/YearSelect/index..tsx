import { Box, Center, CheckIcon, ChevronDownIcon, Select as NBSelect } from 'native-base';
import { Control, FieldValues } from 'react-hook-form';
import { memo, ReactNode } from 'react';
import Select from '../../../components/ui/Form/Select';

export type Props = {
  control: Control<FieldValues, string>;
  name: string;
};

export default function YearSelect({ control, name }: Props) {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 12;
  const rangeYear = currentYear - minYear + 1;

  return (
    <Select control={control} name={name}>
      {[...Array(rangeYear)].map((_, index) => {
        const year = String(minYear + index);
        return <NBSelect.Item style={{ borderWidth: 0 }} key={index} label={year} value={year} />;
      })}
    </Select>
  );
}
