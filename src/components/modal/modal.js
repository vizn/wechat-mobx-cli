function showModal(couponName,isShowBtnDetail) {
    var that = this;
    that.setData({
        modal: {
            couponName: couponName,
            isShowBtnDetail: isShowBtnDetail,
            show: true
        }
    })
}
function clearModal(){
    var that = this;
    that.setData({
       "modal.show":false
    })
}
module.exports = {
    showModal:showModal,
    clearModal:clearModal
}