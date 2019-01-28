const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 当前日期
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}

// 根据时期计算星期几
const formatDay = date => {
  const weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const myDate = new Date(Date.parse(date.replace(/-/g, "/")));
  const day = weekDay[myDate.getDay()];

  return day
}

// 前三年日期
const beforeThreeYear = date => {
  const year = date.getFullYear()
  const beforeYear = [year].map(formatNumber).join() - 3;

  return beforeYear.toString() + '-01-01'
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  formatDay: formatDay,
  beforeThreeYear: beforeThreeYear
}