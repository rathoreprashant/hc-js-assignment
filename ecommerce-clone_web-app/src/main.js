import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import wrapper from 'axios-cache-plugin'

let http = wrapper(axios, {
    maxCacheSize: 15, // cached items amounts. if the number of cached items exceeds, the earliest cached item will be deleted. default number is 15.
    ttl: 60000, // time to live. if you set this option the cached item will be auto deleted after ttl(ms).
    excludeHeaders: true // should headers be ignored in cache key, helpful for ignoring tracking headers
})
export default http


createApp(App).use(router).mount('#app')