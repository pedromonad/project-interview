import type { Meta, StoryObj } from '@storybook/react';

import { UserDetail } from './UserDetail';

const meta: Meta<typeof UserDetail> = {
  component: UserDetail
};

export default meta;
type Story = StoryObj<typeof UserDetail>;

export const Primary: Story = {
  args: {},
  parameters: {
    username: 'pedromonad'
  }
};
