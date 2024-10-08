import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Typhography from "../components/Typhography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // 해당 컴포넌트가 받는 props를 정의한다.
  title: "General/Typhography", // 경로를 의미한다.
  component: Typhography, // 스토리로 다룰 컴포넌트이다.
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: { control: "select", description: "Typhography의 성격" },
    children: { control: "text", description: "Typhography의 내용" },
    state: { control: "select", description: "Typhography의 상태" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Typhography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "h1",
    children: "Hello world",
    state: "default",
  },
};
