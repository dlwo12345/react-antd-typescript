const { override, disableChunk, addLessLoader, addWebpackAlias, addWebpackPlugin, disableEsLint, fixBabelImports, addWebpackModuleRule } = require('customize-cra');
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
// const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader');
const path = require('path');
// const sassToJS = require('sass-vars-to-js'); // sass 변환

// const themeVariables = sassToJS(path.resolve(__dirname, 'src/styles/variables.scss')); // less 주입을 위한 커스텀 variables

// refs = https://github.com/arackaf/customize-cra
// refs = https://medium.com/deskera-engineering/creating-path-aliases-in-create-react-app-with-react-app-rewired-c2cde81b472
module.exports = override(
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true,
  // }),
  // disableEsLint(),
  // addWebpackModuleRule(
	// 	{
	// 		test: /\.(svg|png|jp(e*)g|gif)$/,
	// 		loader: 'url-loader',
	// 	},
	// ),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   importLoaders: true,
  //   modifyVars: themeVariables,
  // }),
  // disableChunk(),
  // addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
		['@']: path.resolve(__dirname, 'src'),
  }),
  // (config, env) => {
	// 	config = rewireSvgReactLoader(config, env);
	// 	return config;
	// },
);