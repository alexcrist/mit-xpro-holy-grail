const redis = require('redis');

const client = redis.createClient();

client.set('header', 0);
client.set('menu', 0);
client.set('content', 0);
client.set('ad', 4);
client.set('footer', 0);

const getData = (dataKey) => {
  const promise = new Promise((resolve, reject) => {
    client.get(dataKey, (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  });
  return promise;
};

const setData = (dataKey, newValue) => {
  client.set(dataKey, newValue);
};

module.exports = {
  getData,
  setData
};