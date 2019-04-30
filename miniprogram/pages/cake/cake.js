const app = getApp();
const config = require("../../common/config.js")
const jzData = require("../../utils/jzData.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: 0,
    list: [],
    listJz: []
  },
  initData: function() {
    var _this = this;
    app.get({
      c: "Product",
      m: "GetAllProduct",
      City: "上海",
    }, function(d) {
      var data = d.data;
      if(data.Status == "ok") {
        app.cake.setCache(data.Tag);
        _this.setlist(data.Tag);
      }
    })
  },
  setlist: function(dic) {
    var _list = [];
    for (var i in dic) {
      //console.log(i);
      _list.push({
        name: i,
        price: dic[i].CakeType[0].CurrentPrice + ".00",
        des: dic[i].Means,
        imgUrl: app.path.res + "/images-2/index-3/jdcake/w_240/" + encodeURI(i) + ".png"
      })
    }
    this.setData({
      "list": _list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var _dic = app.cake.getCache();
    if(_dic) {
      this.setList(_dic);
    } else {
      this.initData();
    }
    //从文件里读取写死的数据。
    var list = []
    var _jzList = []
    var dic = jzData.data;
    for (var i in dic) {
      _jzList.push({
        name: i,
        price: dic[i],
        des: dic[i].Means,
        imgUrl: app.path.res + dic[i].img
      });
      list.push({
        name: i,
        price: dic[i],
        des: dic[i].Means,
        imgUrl: app.path.res + dic[i].img
      });
    }
    this.setData({
      "listJz": _jzList,
      "list": list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.list);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})