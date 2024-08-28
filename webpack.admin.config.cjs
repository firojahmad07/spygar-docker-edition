const path = require('path');
let entitryFile = '/main.tsx';
let rootPath = path.resolve(__dirname, './public/admin/');
let distPath = path.resolve(__dirname, './public/dist/admin');
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
		filename: '[name].js',
	},
	resolve: {
		alias: {
			APP: path.resolve(__dirname, './public/admin/app/'),
			PIM: path.resolve(__dirname, './public/admin/pim/'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
		// fallback: {
		// 	util: false,
		// },
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