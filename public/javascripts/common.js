function getCurrentTime(date = new Date()) {
  var keep = '';
  var y = date.getFullYear();
  var m = formatNumber(date.getMonth() + 1);
  var d = formatNumber(date.getDate());
  var h = formatNumber(date.getHours());
  var f = formatNumber(date.getMinutes());
  var s = formatNumber(date.getSeconds());
  keep = y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s;
  return keep;
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

module.exports = {
  getCurrentTime,
};
