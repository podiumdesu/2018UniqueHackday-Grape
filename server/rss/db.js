const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const insertData = require("../common/insertData");
const rss = require("./rss");

const uuidv4 = require("uuid/v4");
const dbName = "userlist";

const addScript = userScriptInfo => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      const collection = client.db(dbName).collection("scripts"); // 存放脚本
      console.log("LINK START!");
      insertData(
        { ...userScriptInfo, uuid: uuidv4() },
        dbName,
        collection,
        insert_result => {
          console.log(insert_result);
          client.close();
          resolve();
        }
      );
    });
  });
};

const getAllScripts = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      const collection = client.db(dbName).collection("scripts"); // 存放脚本
      console.log("LINK START!");
      collection
        .find({})
        .toArray()
        .then(r => resolve(r))
        .catch(e => reject(e));
    });
  });
};

const removeScript = uuid => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      const collection = client.db(dbName).collection("scripts"); // 存放脚本
      collection.deleteOne({ uuid }, (err, obj) => {
        if (err) reject(err);

        console.log("1 document deleted");
        client.close();
      });
    });
  });
};

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log(values);
// });
const updateAllScripts = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      const sourceCollection = client
        .db(dbName)
        .collection("scripts")
        .find({});
      sourceCollection
        .toArray()
        .then(r => {
          const a = Promise.all(
            r.map(({ type, uid, other }) => {
              console.log(type, uid);
              return rss(type, uid, ...other);
            })
          )
            .then(v => {
              console.log(v);
              client.close();
              resolve(v);
            })
            .catch(e => {
              client.close();
              reject(e);
            });
        })
        .catch(e => {
          reject(e);
        });
    });
  });
};

module.exports = {
  addScript,
  removeScript,
  updateAllScripts,
  getAllScripts
};
