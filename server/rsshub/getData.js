const a = {
  bangumiUpdate: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: 'b站订阅番剧',
            author: '',
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
            author: '',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: [],
            source: data.items[i].url
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
            author: '',
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
            author: '',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: [],
            source: data.items[i].url
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
            author: '',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: [],
            source: data.items[i].url
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
            author: '',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: data.items[i].image,
            source: data.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/jianshu/user/'
  },
  // 知乎用户
  zhihuWriter: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        let name = data.title.split('的')
        const dynamicTitle = data.items[i].title.split('：')
        result.push(
          {
            type: '知乎用户',
            author: name[0],
            lastUpdate: data.items[i].date_published,
            title: dynamicTitle[0],
            isNew: true,
            content: dynamicTitle[1],
            images: data.items[i].image,
            source: this.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/zhihu/people/activities/'
  },
  //pixiv 周排行
  pixivRank: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: 'p站周排行',
            author: '',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: '',
            images: data.items[i].image,
            source: data.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/pixiv/ranking/'
  },
  // 开发者今日头条
  developerToutiao: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: '开发者头条',
            author: '',
            lastUpdate: new Date(),
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: data.items[i].image,
            source: data.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/toutiao/'
  },
  // 今日头条
  toutiaoKeyword: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: data.title,
            author: '',
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: data.items[i].image,
            source: data.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/jinritoutiao/keyword/'
  },
  // 斗鱼直播间
  douyuStream: {
    filter: function(data) {
      let name = data.title.split('的')
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: '斗鱼直播',
            author: name[0],
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: data.items[i].image,
            source: data.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/douyu/room/'
  },
  // v2ex最新
  v2exPopular: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: 'V2EX最新',
            author: data.items[i].author,
            lastUpdate: data.items[i].date_published,
            title: data.items[i].title,
            isNew: true,
            content: data.items[i].summary,
            images: data.items[i].image,
            source: data.items[i].url
          }
        )
      }
      return result
    },
    scriptWeb: 'https://rsshub.app/v2ex/topics/'
  },
}

module.exports = a

