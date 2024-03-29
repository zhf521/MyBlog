import { navbar } from 'vuepress-theme-hope';

export default navbar([
    {
        text: '主页',
        icon: 'home',
        link: '/',
    },
    {
        text: '前端',
        icon: 'html',
        link: '/FrontEnd/',
    },
    {
        text: '后端',
        icon: 'back-stage',
        link: '/BackEnd/',
    },
    {
        text: '嵌入式',
        icon: 'process',
        link: '/Embedded/',
    },
    {
        text: '软件工具',
        icon: 'tool',
        link: '/SoftwareTool/',
    },
    {
        text: '关于我',
        icon: 'profile',
        link: '/AboutMe',
    },
]);
