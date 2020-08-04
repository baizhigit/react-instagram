/**
 * 1. webpack
 * 2. webpack dev server
 * 3. webpack hot middleware
 * 4. webpack config
 * 5. compiler
 * 6. init
 */

// Core
import webpack from 'webpack';
import chalk from 'chalk';
import DevServer from 'webpack-dev-server';
import hot from 'webpack-hot-middleware';
import openBrowser from 'react-dev-utils/openBrowser';
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils';

// Config
import getConfig from './config/webpack.dev';

// Constants
import { HOST, PORT } from './constants';

const compiler = webpack(getConfig());

(async () => {
    const port = await choosePort(HOST, PORT);

    const server = new DevServer(compiler, {
        host:               HOST,
        port,
        historyApiFallback: true,
        overlay:            true,
        quiet:              true,
        clientLogLevel:     'none',
        noInfo:             true,
        after:              (app) => {
            app.use(
                hot(compiler, {
                    log: false,
                }),
            );
        },
    });

    server.listen(port, HOST, () => {
        const url = `http://${HOST}:${port}`;
        console.log(
            `${chalk.greenBright('→ Server listening on')} ${chalk.blueBright(
                url,
            )}`,
        );

        openBrowser(url);
    });

    // ! Альтернатива ↓
    // server.listen(0, HOST, () => {
    //     const port = server.listeningApp.address().port;
    //     const url = `http://${HOST}:${port}`;
    //     console.log(
    //         `${chalk.greenBright('→ Server listening on')} ${chalk.blueBright(
    //             url,
    //         )}`,
    //     );

    //     openBrowser(url);
    // });
})();
