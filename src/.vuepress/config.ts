import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
    base: '/MyBlog/',

    lang: 'zh-CN',
    title: '茕茕の博客',
    description: '茕茕の博客，分享学习、生活中的心得体会',

    theme,

    // 和 PWA 一起启用
    // shouldPrefetch: false,
});
