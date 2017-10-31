
const env = 'development';
// const env = 'production'
const host = env == "development" ? 'http://127.0.0.1:3000/ticket/v1/' : 'https://api.vizn.cn/ticket/v1/'

module.exports = {
  GETTOKEN: host + '/auth/wechat'
}
