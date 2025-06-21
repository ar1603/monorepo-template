import React from 'react';
import type { Preview } from '@storybook/react';
import Provider from './Provider';

import '../src/index.css';

const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

const decorators = [
  (StoryFn: any) => (
    <Provider>
      <StoryFn />
    </Provider>
  ),
];

const preview: Preview = {
  parameters,
  decorators,
};

export default preview;
