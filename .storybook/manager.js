// Import from the manager-api that's available in Storybook v10
import { addons } from 'storybook/internal/manager-api';
import { themes } from 'storybook/internal/theming';

// Create custom theme matching the Atomik UI website color scheme
const customTheme = {
  ...themes.dark,
  brandTitle: 'Atomik UI',
  brandUrl: 'https://example.com',
  brandImage: '/logo.svg',
  brandTarget: '_self',
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',
  
  // Dark teal/navy color scheme from the website
  colorPrimary: '#5dd9e8', // Cyan accent color
  colorSecondary: '#5dd9e8',
  
  // Dark backgrounds
  appBg: '#1a2332',
  appContentBg: '#1e2936',
  appBorderColor: '#2d3748',
  appBorderRadius: 4,
  
  // Text colors
  textColor: '#e2e8f0',
  textInverseColor: '#1a2332',
  textMutedColor: '#a0aec0',
  
  // Toolbar colors
  barTextColor: '#a0aec0',
  barSelectedColor: '#5dd9e8',
  barBg: '#1a2332',
  barHoverColor: '#5dd9e8',
  
  // Form colors
  inputBg: '#2d3748',
  inputBorder: '#4a5568',
  inputTextColor: '#e2e8f0',
  inputBorderRadius: 4,
  
  // Button colors
  buttonBg: '#2d3748',
  buttonBorder: '#4a5568',
};

addons.setConfig({
  theme: customTheme,
});
