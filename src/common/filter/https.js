export default http => {
  let https;
  try {
    https = http ? http.replace(/http[^s]/, 'https') : http;
  } catch (error) {
    https = http;
  }
  return https;
};
