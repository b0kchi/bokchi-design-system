import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from '../components/IconButton';
import testIcon from '../assets/testIcon.svg';

const meta = {             
  title: 'General/IconButton', 
  component: IconButton,       
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: {control:"text", description: "icon 이미지의 대체 텍스트", defaultValue:"icon"},
    iconPath: {control:"text", description: "icon 이미지의 경로", defaultValue:""}
  },
  args: {
    onClick: fn()
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconAlt: "icon",
        iconPath: testIcon,
    }
}