insertData = (data, db, collection, callback) => {
  collection.insert(data, function(err, result) {
    if (err) {
      console.log("ERROR:" + err);
      return;
    }
    callback(result);
  });
};

module.exports = insertData;
