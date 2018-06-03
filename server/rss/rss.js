const request = require("request-promise");

const config = {
  bangumiUpdate: {
    filter: data => {
      const result = [];
      for (let i = 0; i < data.items.length; i++) {
        result.push({
          type: "b站订阅番剧",
          author: "",
          lastUpdate: data.items[i].date_published,
          title: data.title,
          isNew: true,
          content: data.items[i].title,
          images: [],
          source: data.items[i].url
        });
      }
      return result;
    },
    scriptWeb: uid => `https://rsshub.app/bilibili/bangumi/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/bilibili/user/video/${uid}.JSON`
  },
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
    scriptWeb: uid => `https://rsshub.app/bilibili/user/dynamic/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/weibo/user/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/juejin/category/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/jianshu/user/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/zhihu/people/activities/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/pixiv/ranking/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/toutiao/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/jinritoutiao/keyword/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/douyu/room/${uid}.json`
  },
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
    scriptWeb: uid => `https://rsshub.app/v2ex/topics/${uid}.json`
  },
};

const mapArgvToPromise = (type, uid, ...argv) => {
  return new Promise((resolve, reject) => {
    request(config[type].scriptWeb(uid, ...argv))
      .then(html => {
        resolve(config.bangumiUpdate.filter(eval("(" + html + ")")));
      })
      .catch(e => reject(e));
  });
};

// mapArgvToPromise('bangumiUpdate', '21680').then(c => console.log(c))
module.exports = mapArgvToPromise;
