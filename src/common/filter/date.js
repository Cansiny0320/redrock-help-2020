import { format } from 'timeago.js';

export default date => {
  // 解决时区问题
  // let u = navigator.userAgent; //判断浏览器型号
  // let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  const time = new Date(date.replace(/-/g, '/')).getTime() - 1000; //避免出现片刻后的情况
  // time = time + 8 * 1000 * 60 * 60;
  return format(time, 'zh_CN');
};
