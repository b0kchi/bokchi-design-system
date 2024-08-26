import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Typhography from '../components/Typhography';

const meta = {              
    title: 'Data Entry/DatePicker', 
    component: Typhography,       
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof Typhography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: "h1",
        children: "Hello world",
        state: "primary"
    }
}