import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../components/ErrorMessage';

const meta = {             
  title: 'Data Entry/ErrorMessage', 
  component: ErrorMessage,       
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {control:"color", description: "ErrorMessage의 색상"},
    children: {control: "text", description: "ErrorMessage의 내용"}
  },
  args: {},
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Errormessage Here",
        color: "#FF4D4F"
    }
}