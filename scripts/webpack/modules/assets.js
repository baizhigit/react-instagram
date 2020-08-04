// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Instruments
import { STATIC, CHUNK_NAME_ASSET } from '../constants';

export const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./images/${CHUNK_NAME_ASSET}`,
            },
          },
        ],
      },
    ],
  },
});

export const loadSvg = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(ts|js)x?$/,
        },
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: `./images/${CHUNK_NAME_ASSET}`,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.css$/,
        },
        use: [
          {
            loader: 'file-loader',
            options: {
              // limit: 0,
              name: `./images/${CHUNK_NAME_ASSET}`,
            },
          },
        ],
      },
    ],
  },
});

export const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.woff2$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./fonts/${CHUNK_NAME_ASSET}`,
            },
          },
        ],
      },
    ],
  },
});

export const connectHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App Title',
      template: `${STATIC}/template.html`,
      favicon: `${STATIC}/favicon.ico`,
    }),
  ],
});
