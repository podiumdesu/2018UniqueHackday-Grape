var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'
//下面两个测试数据不要了！！！再见！！！
// var newtestdata = require("../ddd").newtestdata
// var datatestdd = require("../ddd").testdata
/***** datatest应该为从client处传过来的JSON信息 ******/
var query = require("./query")
var insertData = require("../common/insertData")

function register(testdata, callback) {
    MongoClient.connect(url, function(err, client) {
        const dbName = "userlist"
        var collection = client.db(dbName).collection("user")
        console.log("数据库连接成功！")
        query(dbName, collection, {"name": testdata.name}, function(query_result) {
            if (query_result === 1) {
                console.log(testdata)
                console.log("用户已注册，不可重复注册")
                callback("-2")
                client.close()
            } else if(query_result === -1) {
                callback("-1")
                console.log("出错了!!!")
                client.close()
            }else {
                insertData(testdata, dbName, collection, function(insert_result) {
                    console.log(insert_result)
                    console.log("注册成功！")
                    callback("1")
                    client.close()
                })
            }
        })
    })
}
module.exports = register
