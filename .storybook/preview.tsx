import type { Preview } from "@storybook/react";
import React from "react";
import "../src/App.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="reset">
        <Story />
      </div>
    ),
  ],
};

export default preview;
