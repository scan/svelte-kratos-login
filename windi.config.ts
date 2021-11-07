import { defineConfig } from 'windicss/helpers';

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
        require('windicss/plugin/filters'),
        require('windicss/plugin/forms'),
        require('windicss/plugin/aspect-ratio'),
        require('windicss/plugin/line-clamp'),
        require('windicss/plugin/typography'),
        require('@windicss/plugin-icons'),
    ],
});
