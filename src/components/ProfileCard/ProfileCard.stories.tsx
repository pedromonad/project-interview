import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    name: 'Pedro Monad',
    description: 'undefined',
    image: 'https://avatars.githubusercontent.com/u/5639968?v=4',
    username: 'pedromonad'
  }
};
