import { format } from 'timeago.js'

export default date => {
  // 解决时区问题
  let u = navigator.userAgent;   //判断浏览器型号
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  let time
  if (isiOS) {
    time = new Date((date).replace(/-/g, '/')).getTime();
  } else {
    time = new Date(date).getTime();
  }
  time = time + 8 * 1000 * 60 * 60
  return format(time, 'zh_CN')
}