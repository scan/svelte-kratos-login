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
                sans: ['Open Sans', 'Roboto', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
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
