module.exports = {
  stories: [
    '../src/Story/Button/Button.stories.js',
    '../src/Story/Typography/Typography.stories.js',
    '../src/Story/TextField/TextField.stories.js',
    '../src/Story/Select/Select.stories.js',
    '../src/Story/Dialog/Dialog.stories.js',
    '../src/Story/Box/Box.stories.js',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
  ],
};
