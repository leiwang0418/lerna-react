const CracoAlias = require('craco-alias');

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				baseUrl: './src',
				tsConfigPath: './tsconfig.extend.json'
			}
		}
	],
	babel: {
		plugins: [
			[
				'formatjs',
				{
					idInterpolationPattern: '[sha512:contenthash:base64:6]',
					ast: true
				}
			]
		]
	}
};
