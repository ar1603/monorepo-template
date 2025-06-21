import type { Meta, StoryObj } from '@storybook/react';
import { TitleBoxContainer } from '../../src';

const meta = {
  title: 'HourcodingUI/TitleBoxContainer',
  component: TitleBoxContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { title: 'Test container', children: 'Test children' },
} satisfies Meta<typeof TitleBoxContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};
