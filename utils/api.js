let app = getApp();
const api = function(obj){
    wx.getNetworkType({
        success: function (res) {
            // 返回网络类型, 有效值：
            // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
            var networkType = res.networkType
            console.log('networkType', networkType)
            if (networkType=="none"){
                if(app.globalData.networkFlag) return;
                app.globalData.networkFlag = true
                wx.navigateTo({
                    url: '/pages/noNetwork/noNetwork',
                })
            }else{
                wx.request(obj)
            }
        }
    })
}
module.exports = api;