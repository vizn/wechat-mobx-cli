function fetch(url, data){
  wx.request({
    url: url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json'
    },
    success: function(res){
      successCb(res)
    },
    fail: function(res){
      failCb(res)
    },
    complete: function(res){
      completeCb(res)
    }
  })
}
module.exports = fetch;
