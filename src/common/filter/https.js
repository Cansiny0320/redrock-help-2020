export default http => {
  let https;
  try {
    https = http.replace(/^http/,"https")
  } catch (error) {
    https = http
  }
  return https
}