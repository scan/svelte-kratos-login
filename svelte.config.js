import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import { windi } from 'svelte-windicss-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess(),
        windi({
            configPath: './windi.config.js',
        }),
    ],

    ssr: true,

    kit: {
        adapter: node(),
    },
};

export default config;
