const exec = require('child_process').exec;

module.exports = function(source) {
  const callback = this.async();
  const cmd = `opal -c '${this.resourcePath}' -I '${this.context}' --no-opal`;

  exec(cmd, { maxBuffer: 1024 * 5000 }, function (error, stdout, stderr) {
    if (error) { return callback(error, null); }
    callback(null, stdout);
  });
};
