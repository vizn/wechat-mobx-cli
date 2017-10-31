// pages/noNetwork/index.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },
    reload () {
      wx.getNetworkType({
        success: function (res) {
          // 返回网络类型, 有效值：
          // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
          var networkType = res.networkType
          if (networkType == "none") {

          } else {
            wx.navigateBack({
              delta: 1
            })
          }
        }
      })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onUnload () {
        app.globalData.networkFlag = false
    }
})
