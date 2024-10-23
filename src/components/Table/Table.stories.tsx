import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';

const meta: Meta<typeof Table> = {
  component: Table
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    items: [
      { key: 'username', value: 'pedromonad' },
      { key: 'name', value: 'Pedro Monad' }
    ]
  }
};
