// Core
import env from 'postcss-preset-env';
import cssnano from 'cssnano';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const loadPostCss = (
    { sourceMap, minimize } = { sourceMap: false, minimize: false },
) => {
    const plugins = [
        env({
            stage:    0, // default: 2
            features: {
                'custom-media-queries': {
                    importFrom: [
                        {
                            customMedia: {
                                '--phonePortrait':  '(width <= 414px)',
                                '--phoneLandscape':
                                    '(width >= 415px) and (width <= 667px)',
                                '--tabletPortrait':
                                    '(width >= 668px) and (width <= 768px)',
                                '--tabletLandscape':
                                    '(width >= 769px) and (width <= 1024px)',
                                '--desktopS':
                                    '(width >= 1025px) and (width <= 1366px)',
                                '--desktopM':
                                    '(width >= 1367px) and (width <= 1680px)',
                                '--desktopL':
                                    '(width >= 1681px) and (width <= 1920px)',
                                '--desktopXL': '(width >= 1921px)',
                            },
                        },
                    ],
                },
            },
        }),
    ];

    if (minimize) {
        plugins.push(cssnano({ preset: [ 'default', { normalizeUrl: false }] }));
    }

    return {
        loader:  'postcss-loader',
        options: {
            plugins,
            sourceMap,
        },
    };
};

const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
    loader:  'css-loader',
    options: {
        modules:        true,
        importLoaders:  1,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
        sourceMap,
    },
});

export const loadDevCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    'style-loader',
                    loadCss({ sourceMap: true }),
                    loadPostCss({ sourceMap: true, minimize: false }),
                ],
            },
        ],
    },
});

export const loadProdCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    MiniCssExtractPlugin.loader,
                    loadCss({ sourceMap: false }),
                    loadPostCss({ sourceMap: false, minimize: true }),
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:      'css/[name].[chunkhash:5].css',
            chunkFilename: 'css/[name].[chunkhash:5].css',
        }),
    ],
});
