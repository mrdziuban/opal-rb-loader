const exec = require('child_process').exec;

module.exports = function(source) {
  const callback = this.async();
  const dontIncludeOpal = typeof this.query === 'string'
    ? /(\?|&)includeOpal=false/.test(this.query)
    : (this.query.includeOpal === false || this.query.includeOpal === 'false');
  const cmd = `opal -c '${this.resourcePath}' -I '${this.context}'${dontIncludeOpal ? ' --no-opal' : ''}`;

  exec(cmd, { maxBuffer: 1024 * 5000 }, function (error, stdout, stderr) {
    if (error) { return callback(error, null); }
    callback(null, stdout);
  });
};
