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
  
})