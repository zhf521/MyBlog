import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.js';
import sidebar from './sidebar.js';
import { cut } from 'nodejs-jieba';

export default hopeTheme({
    hostname: 'https://zhf521.github.io',
    favicon: '/favicon.ico',
    author: {
        name: '茕茕',
        url: 'https://zhf521.github.io/MyBlog/',
    },

    iconAssets: 'iconfont',

    logo: '/logo.png',

    repo: 'https://github.com/zhf521/MyBlog',

    docsDir: 'src',

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    // 页脚
    footer: 'Copyright © 2024-present 茕茕',
    displayFooter: true,
    copyright: '',

    // 博客相关
    blog: {
        description: '热爱学习和生活的程序员',
        intro: '/AboutMe',
        medias: {
            // Baidu: 'https://example.com',
            BiliBili: 'https://space.bilibili.com/401106272',
            // Bitbucket: 'https://example.com',
            // Dingding: 'https://example.com',
            // Discord: 'https://example.com',
            // Dribbble: 'https://example.com',
            Email: 'mailto:zhf5256@qq.com',
            // Evernote: 'https://example.com',
            // Facebook: 'https://example.com',
            // Flipboard: 'https://example.com',
            Gitee: 'https://gitee.com/zhf521',
            GitHub: 'https://github.com/zhf521',
            // Gitlab: 'https://example.com',
            // Gmail: 'mailto:info@example.com',
            // Instagram: 'https://example.com',
            // Lark: 'https://example.com',
            // Lines: 'https://example.com',
            // Linkedin: 'https://example.com',
            // Pinterest: 'https://example.com',
            // Pocket: 'https://example.com',
            // QQ: 'https://example.com',
            // Qzone: 'https://example.com',
            // Reddit: 'https://example.com',
            // Rss: 'https://example.com',
            // Steam: 'https://example.com',
            // Twitter: 'https://example.com',
            // Wechat: 'https://example.com',
            // Weibo: 'https://example.com',
            // Whatsapp: 'https://example.com',
            // Youtube: 'https://example.com',
            // Zhihu: 'https://example.com',
        },
    },

    // // 加密配置
    // encrypt: {
    //     config: {
    //         '/demo/encrypt.html': ['1234'],
    //     },
    // },

    // 多语言配置
    metaLocales: {
        editLink: '在 GitHub 上编辑此页',
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    hotReload: false,

    // 在这里配置主题提供的插件
    plugins: {
        blog: true,
        searchPro: {
            indexContent: true,
            indexOptions: {
                // 使用 nodejs-jieba 进行分词
                tokenize: (text, fieldName) =>
                    fieldName === 'id' ? [text] : cut(text, true),
            },
        },

        comment: {
            provider: 'Giscus',
            //   serverURL: "https://waline-comment.vuejs.press",
            repo: 'zhf521/MyBlog',
            repoId: 'R_kgDOLPFQgwR_kgDOLPFQgw',
            category: 'Announcements',
            categoryId: 'DIC_kwDOLPFQg84CdS3s',
        },

        components: {
            components: ['Badge', 'VPCard'],
        },

        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        mdEnhance: {
            align: true,
            attrs: true,
            codetabs: true,
            component: true,
            demo: true,
            figure: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            mark: true,
            stylize: [
                {
                    matcher: 'Recommended',
                    replacer: ({ tag }) => {
                        if (tag === 'em')
                            return {
                                tag: 'Badge',
                                attrs: { type: 'tip' },
                                content: 'Recommended',
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,

            // 在启用之前安装 chart.js
            // chart: true,

            // insert component easily

            // 在启用之前安装 echarts
            // echarts: true,

            // 在启用之前安装 flowchart.ts
            // flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // gfm: true,

            // 在启用之前安装 katex
            // katex: true,

            // 在启用之前安装 mathjax-full
            // mathjax: true,

            // 在启用之前安装 mermaid
            // mermaid: true,

            // playground: {
            //   presets: ["ts", "vue"],
            // },

            // 在启用之前安装 reveal.js
            // revealJs: {
            //   plugins: ["highlight", "math", "search", "notes", "zoom"],
            // },

            // 在启用之前安装 @vue/repl
            // vuePlayground: true,

            // install sandpack-vue3 before enabling it
            // sandpack: true,
        },

        // 如果你需要 PWA。安装 vuepress-plugin-pwa2 并取消下方注释
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
