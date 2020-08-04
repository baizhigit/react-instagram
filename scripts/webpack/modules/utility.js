// Core
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const setupBuildAnalysis = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});
