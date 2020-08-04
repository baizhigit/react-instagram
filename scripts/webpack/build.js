/**
 * 1. ✓ webpack
 * 2. ✓ webpack config
 * 3. ✓ compiler
 * 4. ✓ init
 */

// Core
import webpack from 'webpack';
import getConfig from './config/webpack.prod';
import chalk from 'chalk';

const compiler = webpack(getConfig());

compiler.run((error, stats) => {
    if (error) {
        // ошибка конфигурации
        console.error(error.stack || error);

        if (error.details) {
            console.error(error.details);
        }

        return;
    }

    const info = stats.toString({
        hash:     true,
        colors:   true,
        modules:  false,
        children: false,
    });

    console.log(info);
    console.log(chalk.greenBright('✓ Build completed!'));

    if (stats.hasErrors()) {
        // ошибка во время компиляции (битый импорт, ошибка синтаксиса, etc)
        console.log(chalk.redBright('→ Error!'));
        console.error(info);
    }

    if (stats.hasWarnings()) {
        // ворнинг во время компиляции
        console.log(chalk.yellowBright('→ Warning!'));
        console.warn(info);
    }
});
