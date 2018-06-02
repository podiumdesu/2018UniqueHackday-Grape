const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const insertData = require('../common/insertData')
function runScript(callback) {
  MongoClient.connect(url, function(err, client) {
    const dbName = 'userlist'
    const collection = client.db(dbName).collection('scriptAndNum')
    const sourceCollection = client.db(dbName).collection('uploadInfo').find({})
    // console.log(sourceCollection)
    // 每次更新都需要清空数据库
    collection.remove()
    console.log("数据库连接成功！")
    sourceCollection.each(function(error, doc) {
      if (doc !== null) {
        let scriptWithNum = {
          scriptContent: doc.script,
          scriptNo: doc.scriptNo
        }
        insertData(scriptWithNum, dbName, collection, function(insert_result) {
          client.close()
        })
      } else {
        callback("1")
        return 0
      }
    })
  })
}

module.exports = runScript