import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { FaHeart } from 'react-icons/fa';

const meta = {
  title: 'myButton',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    type: 'button',
  },
};

export const ButtonCard: Story = {
  args: {
    children: <FaHeart />,
    className: 'bg-blue-300 text-white ml-auto mt-4',
  },
};

export const ButtonModal: Story = {
  args: {
    children: 'Cerrar',
    className:
      'bg-slate-400 text-white px-6 mt-4 rounded-md hover:bg-cyan-600 ',
  },
};
