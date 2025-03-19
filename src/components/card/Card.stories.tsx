import type { Meta, StoryObj } from '@storybook/react';
import { Book } from '../../types';
import { Card } from '.';

const sampleBook: Book = {
  name: 'El amor en los tiempos del cólera',
  authors: ['Gabriel García Márquez'],
  country: 'Colombia',
  numberOfPages: 368,
  publisher: 'Editorial Mondadori',
  released: '1985-04-25',
  url: 'https://example.com/book',
};

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div className="max-w-sm mx-auto">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    book: sampleBook,
  },
};
