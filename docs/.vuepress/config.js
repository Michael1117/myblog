module.exports = {
  title: '我的个人主页',
  description: '我的个人网站',
  head: [
    ['link', {
      rel: 'icon',
      href: '/hero.jpg'
    }], // 增加一个自定义的 favicon
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }], //PWA 插件需要引入的manifest
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }], //<meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon-152x152.png'
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    displayAllHeaders: true,
    logo: '/assets/img/logo.jpg',
    // 添加导航栏
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '生活',
        link: '/life/'
      },
      {
        text: '学习',
        items: [{
            text: '英语',
            link: '/study/english/english01'
          },
          {
            text: '数学',
            link: '/study/math/math01'
          },
        ]
      }
    ],
    // 为以下路由添加左侧边栏
    sidebar: {
      '/life/': [{
        title: '生活测试',
        collapsable: false,
        children: [{
            title: '生活测试01',
            path: '/life/life01'
          },
          {
            title: '生活测试02',
            path: '/life/life02'
          },
          {
            title: '生活测试03',
            path: '/life/life03'
          },
        ]
      }],
      '/study/english/': [{
        title: '英语',
        collapsable: false,
        children: [{
            title: '第一节',
            path: '/study/english/english01'
          },
          {
            title: '第二节',
            path: '/study/english/english02'
          },
          {
            title: '第三节',
            path: '/study/english/english03'
          },
        ]
      }],
      '/study/math/': [{
        title: '数学',
        collapsable: false,
        children: [{
            title: '第一节',
            path: '/study/math/math01'
          },
          {
            title: '第二节',
            path: '/study/math/math02'
          },
          {
            title: '第三节',
            path: '/study/math/math03'
          },
        ]
      }],
    },
    sidebarDepth: 2, //左侧导航显示的层级
    lastUpdated: 'Last Updated'
  }
};