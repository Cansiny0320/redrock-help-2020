import { format } from 'timeago.js'

export default date => {
  let time = new Date(date)
  return format(time, 'zh_CN')
}