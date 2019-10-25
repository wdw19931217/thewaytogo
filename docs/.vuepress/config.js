module.exports = {
  dest: 'dist',
  title: 'The Way To Go',
  description: '《Go语言入门指南》',
  themeConfig: {
    sidebar: [
      {
        title: 'class1',
        collapsable: true,
        children: [
          'class1/01.1',
          'class1/01.2'
        ]
      }
    ]
  }
}