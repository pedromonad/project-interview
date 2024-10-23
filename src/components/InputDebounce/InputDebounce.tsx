import React, { ReactNode } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@material-tailwind/react';

export type Props = {
  name: string;
  placeholder?: string;
  type: string;
  onChange: (value: string) => void;
  label: string;
  icon?: ReactNode;
};

export const InputDebounce = ({ onChange, ...props }: Props) => {
  const onChangeDebounced = useDebouncedCallback((value) => {
    onChange(value);
  }, 1000);

  return (
    <div className="w-72">
      <Input
        {...props}
        onChange={(e) => {
          onChangeDebounced(e.target.value);
        }}
      />
    </div>
  );
};
