import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import testIcon from '../assets/testIcon.svg';
import InputField from '../components/InputField';

const meta = {             
    title: 'Data Entry/InputField',
    component: InputField,       
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        iconAlt: {control:"text", description: "icon 이미지의 대체 텍스트", defaultValue:"icon"},
        iconPath: {control:"text", description: "icon 이미지의 경로", defaultValue:""},   
        placeholder: {control:"text", description: "input의 placeholder", defaultValue:""},
        value: {control:"text", description: "입력된 값", defaultValue:""},
        errorMessage: {control:"text", description: "유효하지 않은 입력값에 대한 에러 메세지", defaultValue:""},
        isError: {control:"boolean", description:"에러 메세지 노출 여부", defaultValue:false},
    },
    args: {
        onChange: fn(),
        onIconClick: fn()
    },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconAlt: "icon",
        iconPath: testIcon,
        placeholder: "텍스트를 입력해주세요.",
        value: "",
        errorMessage: "텍스트를 확인해주세요.",
        isError: false
    }
}