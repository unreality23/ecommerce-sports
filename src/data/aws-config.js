let AWS = require("aws-sdk");

AWS.config.update({
  region: "",
  accessKeyId: "",
  secretAccessKey: "",
});

module.exports = AWS;
