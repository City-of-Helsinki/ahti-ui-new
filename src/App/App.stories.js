import React from 'react';

// import { action } from '@storybook/addon-actions';
import App from './App.tsx';

export default {
  title: 'App',
  component: App
};

export const Text = () => <App />;

Text.story = {
  name: 'with emoji'
};