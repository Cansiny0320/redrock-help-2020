export default http => {
  // 解决时区问题
  return http.replace(/^http/,"https")
}