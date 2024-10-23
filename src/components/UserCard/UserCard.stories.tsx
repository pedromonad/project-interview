import type { Meta, StoryObj } from '@storybook/react';

import '../../style.css';

import { UserCard } from './UserCard';

const meta: Meta<typeof UserCard> = {
  component: UserCard
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Primary: Story = {
  args: {
    name: 'Pedro Monad',
    description: 'undefined',
    image: 'https://avatars.githubusercontent.com/u/5639968?v=4'
  }
};
