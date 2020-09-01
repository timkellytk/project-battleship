const CracoLessPlugin = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');
const darkTheme = getThemeVariables({
  dark: true,
});

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: darkTheme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
