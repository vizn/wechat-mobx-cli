function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function formatDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getNextMonth(currentDate, scaleStep) {
  //scaleStep = 1 向后计算后一个月
  //scaleStep = -1 向前计算前一个月
  for (var minIncrements = 1; ; minIncrements++) {
    var nextDate = new Date(currentDate);
    nextDate.setHours(currentDate.getHours() + scaleStep * minIncrements);

    if (nextDate.getMonth() != currentDate.getMonth()) {
      return nextDate;
    }
  }
}
function getNextDate(currentDate, scaleStep) {
  //scaleStep = 1 向后计算后一天
  //scaleStep = -1 向前计算前一天
  for (var minIncrements = 1; ; minIncrements++) {
    var nextDate = new Date(currentDate);
    nextDate.setHours(currentDate.getHours() + scaleStep * minIncrements);

    if (nextDate.getDate() != currentDate.getDate()) {
      return nextDate;
    }
  }
}
module.exports = {
  getNextMonth: getNextMonth,
  getNextDate: getNextDate,
  formatTime: formatTime,
  formatDate: formatDate
}
