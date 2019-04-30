var app = getApp()
var config = require("./../../common/config.js")

Page({
  data: {
    path: config.path.res + "smallexe/index/",
    userInfo: {},
    array: config.cityArray,
    index: 0
  },
  goCake: function(e) {
    var brand = e.currentTarget.dataset.brand;
    if(brand && brand == 1) {
      app.cake.tab = 1;
    }
    wx.swithTab({ url: '../cake/cake' });
  },
  goDetail: function(e) {
    var nm = e.currentTarget.dataset.pname;
    var b = e.currentTarget.dataset.brand;
    wx.navigateTo({
      url: '../cakeDetail/cakeDetail?pname=' + nm + "&brand=" + (b||0)
    })
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  }
})