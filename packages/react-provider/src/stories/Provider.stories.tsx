import * as React from 'react';
import { Provider } from '../index';
import { webLightTheme } from '@pongo-ui/react-theme';

export const BasicProviderExample = () => {
  return <Provider theme={webLightTheme} />;
};

export default {
  title: 'Components/Provider',
  component: Provider,
};
