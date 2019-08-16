export default http => {
  let https;
  try {
    https = http ? http.replace(/^http/,"https") : http
  } catch (error) {
    https = http
  }
  return https
}