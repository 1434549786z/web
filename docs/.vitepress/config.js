export default {
    title: '我的文档', // 网站标题
    description: '个人技术文档库', // SEO描述
    themeConfig: {
      logo: '/logo.png', // 导航栏logo
      nav: [ // 导航栏
        { text: '指南', link: '/guide/getting-started' },
        { text: '示例', link: '/examples/basic-usage' },
        { text: 'API', link: '/api/core-api' },
        { text: '更新日志', link: 'https://github.com/...' }
      ],
      sidebar: { // 侧边栏导航
        '/guide/': [
          {
            text: '指南',
            items: [
              { text: '快速开始', link: '/guide/getting-started' },
              { text: '配置指南', link: '/guide/configuration' }
            ]
          }
        ],
        '/api/': [
          {
            text: '核心 API',
            items: [
              { text: '基础 API', link: '/api/core-api' }
            ]
          }
        ]
      },
      socialLinks: [ // 社交链接
        { icon: 'github', link: 'https://github.com/yourname' },
      ],
      footer: { // 页脚
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present '
      },
      algolia: { // 搜索配置（可选）
        appId: '...',
        apiKey: '...',
        indexName: '...'
      }
    },
    markdown: {
      lineNumbers: true // 显示代码行号
    },
    
  }