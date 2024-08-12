import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {              // 해당 컴포넌트가 받는 props를 정의한다. 
  title: 'General/Button',  // 경로를 의미한다. 
  component: Button,        // 스토리로 다룰 컴포넌트이다.
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    primary: { control: 'boolean' , description: 'Primary 버튼 여부', defaultValue: false},
    size: { control: 'select' , description: '버튼의 사이즈', defaultValue: 'medium'},
    children: { control: 'text' , description: '버튼 내 텍스트', defaultValue: 'button'},
    type: { control: 'select' , description: '버튼의 종류', defaultValue: 'textIcon'},
    disabled: {control: 'boolean', description: '버튼 비활성화 여부', defaultValue: false}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryButton: Story = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const LargeButton: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const SmallButton: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
