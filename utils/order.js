const app = getApp()

function postBilling (data, resolve) {
  data['token'] = app.globalData.token
  wx.request({
    method: 'POST',
    url: `${app.globalData.API_URL}/orders`,
    data: data,
    header: { 'Content-Type': 'application/json'},
    success: resolve,
    fail: function(){}
  })
}

module.exports = {
  postBilling (data, resolve) {
    return postBilling(data, resolve)
  }
}