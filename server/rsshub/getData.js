const a = {
  bangumiUpdate: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: 'b站订阅番剧',
            author: 'none',
            lastUpdate: data.items[i].date_published,
            title: data.title,
            isNew: true,
            content: data.items[i].title,
            images: [],
            source: data.items[i].url,
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/bilibili/bangumi/'
  },
  // b站用户投稿
  upSubmit: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: 'Up主投稿',
            author: 'none',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: [],
            source: this.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/bilibili/user/video/'
  },
  // b站动态
  upDynamic: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: 'Up主动态',
            author: 'none',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: [],
            source: this.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/bilibili/user/dynamic/'
  },
  // 微博关注
  weiboUser: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: '微博关注',
            author: 'none',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: [],
            source: this.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/weibo/user/'
  },
  // 掘金
  juejin: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: data.title,
            author: 'none',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: [],
            source: this.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/juejin/category/'
  },
  //简书作者
  jianshuWriter: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: '简书关注',
            author: 'none',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: data.items[i].image,
            source: this.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/jianshu/user/'
  },
  // 知乎用户
  jianshuWriter: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: '简书首页',
            author: 'none',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: data.items[i].image,
            source: this.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/zhihu/people/activities/'
  },



}

module.exports = a

