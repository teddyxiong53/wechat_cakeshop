const config = require("./common/config.js")
const user = require("./model/user.js")
const cart = require("./model/cart.js")
const cake = require("./model/cake.js")

App({
  version: config.version,
  user: user,
  cart: cart,
  cake: cake,
  path: config.path,

  loading: (function() {
    return {
      show: function(p) {
        p = p? p: {};
        wx.showToast({
          title: p.title || '加载中',
          icon: 'loading',
          duration: p.duration || 10000
        })
      },
      hide: function() {
        wx.hideToast();
      }
    }
  })(),
  toast: function(p) {
    wx.showToast(p);
  },
  /*
    p：产品对象。
    suc：成功的回调。
    tit：应该是标题。
  */
  get: function(p, suc, tit) {
    var _this = this;
    this.loading.show({
      title: tit
    });
    if(_this.user.isLogin()) {//这里就没有实现，一定是false
      p.userid = _this.user.userid;
      p.sessionid = _this.user.sessionid;
    }
    wx.request({
      url: this.path.www + "client.ashx?v=" + Math.random(),
      data: p,
      header: {
        "Content-Type": "application/json"
      },
      method: 'GET',
      success: function(res) {
        suc(res);
      },
      fail: function(e) {
        _this.toast({
          title: '请求出错'
        })
      },
      complete: function() {
        _this.loading.hide();
      }
    })
  },
  post: function(p, suc) {

  },
  onLaunch: function () {
    //console.log(this.cake);
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    var _this = this;
    // 读取缓存的用户信息。
    var obj = _this.user.getCache();
    if(obj != null) {
      // 读取到了，则填充进来。
      _this.user.userid = obj.userid;
      _this.user.sessionid = obj.sessionid;
      _this.user.jzb = obj.jzb;
      _this.user.exp = obj.exp;
      _this.user.phone = obj.phone;
      _this.user.levels = obj.levels;
      _this.user.headimg = obj.headimg;
    }
    
  },
  onLoad: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },

  globalData: {
    userInfo: null
  },
})
