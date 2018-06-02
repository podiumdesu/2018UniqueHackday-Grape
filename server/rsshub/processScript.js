const request = require('request-promise')
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const insertData = require('../common/insertData')
const getData = require('./getData')

function runScript(callback) {
  MongoClient.connect(url, function(err, client) {
    const dbName = 'userlist'
    const collection = client.db(dbName).collection('finalResult')
    const sourceCollection = client.db(dbName).collection('uploadInfo').find({})
    // console.log(sourceCollection)
    // 每次更新都需要清空数据库，重新获取数据
    //collection.remove()
    console.log("数据库连接成功！")
    sourceCollection.each(function(error, doc) {  // 存放了scriptContent, scriptNo, info
      let temp = 1
      while (temp) {
        let scriptContent = doc.script
        let scriptNo = doc.scriptNo
        let requestUrl = getData[scriptNo].scriptWeb + doc.script + '.json'
        console.log(requestUrl)
        new Promise((resolve) => {
          request(requestUrl)
            .then(body = function(body) {
              const parseJsonResult = eval("(" + body + ")")
              // console.log(parseJsonResult.items.length)
              const result = getData[scriptNo].filter(parseJsonResult)
              for (let i = 0; i < result.length; i++) {
                new Promise((resolve, reject) => {
                  collection.insert(result, function(err, res) {
                      // if (err) {
                      //     console.log("ERROR:" + err)
                      // }
                  })
                }).then()
              }
              console.log('done promise')
              resolve(temp)
            })
        }).then(() => {
          if (doc === null) temp = 0
        })
      }
      callback("1")
      console.log('ok')
      return 0
    })
  })
}
const a = 
{
  uploadScript: {
    content: '21680',
    id: 'bangumiUpdate'
  },
  info: {
    name: 'ggg'
  }
}
module.exports = runScript
