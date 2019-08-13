import { format } from 'timeago.js'

export default date => {
  // 解决时区问题
  const time = new Date(date).getTime() + 8 * 1000 * 60 * 60
  return format(time, 'zh_CN')
}