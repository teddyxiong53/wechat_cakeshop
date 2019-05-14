const app = getApp()
const jzData = require('../../utils/jzData.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    brand: 0,
    loaded: false,
    cartNum: 0,
  },

  initCake: function(d) {
    var _this = this;
    wx.setNavigationBarTitle({
      title: d.Name,
    })
    this.setData({
      imgMinList: (function() {
        var _list = [];
        if(_this.data.brand ==  0) {

        } else {
          _list.push(app.path.res + "images/ksk/item/w_400/" + d.Name + ".jpg");
        }
        return _list;
      })(),
      name: d.Name,
      num: 1,
      des: d.Means,
      resource: d.Resource,
      fresh: d.KeepFresh,
      current: {
        size: d.CakeType[0].size,
        price: d.CakeType[0].CurrentPrice,
        supplyno: d.CakeType[0].SupplyNo,
        des: d.CakeType[0].PackingList
      },
      CakeType: d.CakeType
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    //console.log(e)
    var brand = e && e.brand ? e.brand : 0;
    this.setData({
      brand: brand
    })
    var _this = this;
    if(brand == 0) {//这个分支现在根本不会进来的。因为brand都是写成了1了。
      var key = e.pname || "极地牛乳";
      var obj = app.cake.getByName(key);
      if(obj) {
        _this.setData({
          loaded: true
        })
        this.initCake(obj)
      } else {
        //从网络读取。这个代码我省略了。
        //因为执行不会成功的。
      }


    } else {//吉致系列
      //直接从文件读取假数据。
      var obj = jzData.data[e.pname]
      this.initCake(obj);
      this.setData({
        loaded: true
      })
    }
  },
  previewImg: function(e) {
    //preview.show(this.data)
    console.log("preview image")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    this.setData({
      cartNum: app.cart.getNum()
    })
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