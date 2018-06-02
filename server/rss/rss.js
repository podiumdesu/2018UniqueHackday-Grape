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
  }
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
