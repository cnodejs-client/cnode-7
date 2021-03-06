//滚动条在Y轴上的滚动距离

const ScrollTop = () => {
  let scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0
  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop
  return scrollTop
}

//文档的总高度

const ScrollHeight = () => {
  let scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight
  return scrollHeight
}

//浏览器视口的高度

const WindowHeight = () => {
  let windowHeight = 0
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}

const loadMore = () => {
  return Math.abs(ScrollTop() + WindowHeight() - ScrollHeight()) < 1
}

const formatTime = data => {
  const date = new Date(data);
  const time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
      return '';
  } else if (time / 1000 < 60) {
      return '刚刚';
  } else if ((time / 60000) < 60) {
      return parseInt(time / 60000,10) + '分钟前';
  } else if ((time / 3600000) < 24) {
      return parseInt(time / 3600000,10) + '小时前';
  } else if ((time / 86400000) < 31) {
      return parseInt(time / 86400000,10) + '天前';
  } else if ((time / 2592000000) < 12) {
      return parseInt(time / 2592000000,10) + '月前';
  } else {
      return parseInt(time / 31536000000,10) + '年前';
  }
}
export {loadMore, ScrollTop, WindowHeight, ScrollHeight, formatTime}
