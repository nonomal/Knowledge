module.exports = {
  base: '/Knowledge/',
  title: 'EricLiu\'s Blog',

  themeConfig: {
    nav: [
      { text: 'iOS', link: '/iOS/' },
      { text: 'Web', link: '/Web/' },
      { text: 'GitHub', link: 'https://github.com/ericliuhusky' },
    ],

    sidebar: {
      '/iOS/': [
        '',
        'Data-structure',
        'Algorithm',
        'Swift',
        'String',
        'Foundation',
        'UIKit',
        'WebKit',
        'Memory-management',
        'Network',
        'Data-storage',
        'Multi-thread',
        'Design-patterns'
      ],
      '/Web/': [
        '',
        'CSS',
        'HTML',
        'JavaScript',
        'React',
        'Taro',
        'Vue',
        'http',
        'Performance-optimization'
      ]
    }
  }
}
