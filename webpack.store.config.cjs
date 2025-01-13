const path = require('path');
let entitryFile = '/main.tsx';
let rootPath = path.resolve(__dirname, './public/store/');
let distPath = path.resolve(__dirname, './public/dist');
function getEntryFiles() {
	const entries = {
		'bundle': rootPath + entitryFile,
	};

	return entries;
}

const projectConfiguration = {
	mode: 'development',
	entry: getEntryFiles(),
	output: {
		path: path.resolve(__dirname, distPath),
		filename: 'store.bundle.js',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './public')               
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		]
	}
};

module.exports = projectConfiguration