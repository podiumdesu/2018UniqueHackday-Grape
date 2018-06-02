const a = {
  bangumiUpdate: {
    filter: function(data) {
      const result = []
      for (let i = 0; i < data.items.length; i++) {
        result.push(
          {
            type: 'bilibili',
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

}

module.exports = a

