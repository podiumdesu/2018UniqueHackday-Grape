const MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'
var insertData = require('../common/insertData')

function saveScript(userScriptInfo, callback) {
  MongoClient.connect(url, function(err, client) {
    const dbName = "userlist"
    const collection = client.db(dbName).collection('uploadInfo') // 存放脚本
    console.log("数据库连接成功！准备上传数据...")
    insertData(userScriptInfo, dbName, collection, function(insert_result) {
      console.log(insert_result)
      callback("1")
      client.close()
    })
  })
}

module.exports = saveScript