// Network
// import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';

export const PROJECT_ROOT = process.cwd();
// Directories
export const SOURCE = resolve(PROJECT_ROOT, './src');
export const BUILD = resolve(PROJECT_ROOT, './build');
export const STATIC = resolve(PROJECT_ROOT, './static');

// Network
export const HOST = 'localhost';
export const PORT = 3000;

// Filenames
export const CHUNK_NAME_ASSET = '[name].[hash:5].[ext]';
