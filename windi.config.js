import { defineConfig } from 'windicss/helpers';

import filtersPlugin from 'windicss/plugin/filters';
import formsPlugin from 'windicss/plugin/forms';
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio';
import lineClampPlugin from 'windicss/plugin/line-clamp';
import typographyPlugin from 'windicss/plugin/typography';
import iconsPlugin from '@windicss/plugin-icons';

export default defineConfig({
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Fira Sans', 'sans-serif'],
                monospace: ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [
        filtersPlugin,
        formsPlugin,
        aspectRatioPlugin,
        lineClampPlugin,
        typographyPlugin(),
        iconsPlugin,
    ],
});
