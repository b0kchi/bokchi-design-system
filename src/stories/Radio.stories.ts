import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Radio from "../components/Radio";

const meta = {
  title: "Data Entry/Raido",
  component: Radio,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "checkbox의 label",
    },
    name: {
      control: "text",
      description: "checkbox input의 name",
    },
    value: {
      control: "text",
      description: "checkbox input의 value",
    },
    id: {
      control: "text",
      description: "checkbox의 id",
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Radio",
  },
};
