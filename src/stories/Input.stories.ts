import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input from "../components/Input";

const meta = {
  title: "Data Entry/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Input의 label",
    },
    name: {
      control: "text",
      description: "Input input의 name",
    },
    value: {
      control: "text",
      description: "Input input의 value",
    },
    id: {
      control: "text",
      description: "Input의 id",
    },
    checked: {
      control: "boolean",
      description: "Input의 체크 여부",
    },
  },
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Apple",
    checked: true,
  },
};
