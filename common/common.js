var crypto = require('crypto');
//Build sha1 hash
exports.sha1 = function sha1(text) {
  return crypto.createHash('sha1').update(text).digest('hex');
};
//Is login
exports.authorize = function(backUrl) {
  if (this.session && this.session.name) {
    return true;
  } else {
    this.redirect('/login?backUrl=' + backUrl);
    return false;
  }
};
//Get Post query
exports.query = function(url, name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
    r1 = url.match(/\?[\S]*/),
    r;

  if (r1) {
    r = r1[0].substr(1).match(reg);
  }
  if (r != null) return unescape(r[2]);
  return null;
}
