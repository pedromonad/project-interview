import type { Meta, StoryObj } from '@storybook/react';

import { InputDebounce } from './InputDebounce';

const meta: Meta<typeof InputDebounce> = {
  component: InputDebounce
};

export default meta;
type Story = StoryObj<typeof InputDebounce>;

export const Primary: Story = {
  args: {
    name: 'username',
    type: 'text',
    label: 'Type an username',
    onChange: (value: string) => {}
  }
};
