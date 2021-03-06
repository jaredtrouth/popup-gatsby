const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Pop-Up Chicken Shop | Illinois Hot Chicken | Bloomington',
		description: 'TODO',
		siteUrl: 'https://keepitpopup.com',
		image: 'img/popup_logo_badge.jpg',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-preload-fonts',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Pop-Up Chicken Shop`,
				short_name: `Pop-Up Chicken`,
				start_url: `/`,
				background_color: `#ed3825`,
				theme_color: `#002156`,
				display: `browser`,
				icon: 'src/img/logo.png',
			},
		},
		{
			resolve: `gatsby-alias-imports`,
			options: {
				aliases: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@helpers': path.resolve(__dirname, 'src/helpers'),
					'@styles': path.resolve(__dirname, 'src/styles'),
					'@icons': path.resolve(__dirname, 'src/components/icons'),
					'@pages': path.resolve(__dirname, 'src/pages'),
					'@fonts': path.resolve(__dirname, 'src/fonts'),
					'@hooks': path.resolve(__dirname, 'src/hooks'),
					'@img': path.resolve(__dirname, 'src/img'),
				},
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'img',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/content/_menu`,
				name: 'menu',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/content/_menu/specials`,
				name: 'specials',
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
			},
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
};
