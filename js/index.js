//简介
var goods = Vue.extend({
  template: "#goods",
  data: function() {
    return {
      da: {}
    }
  }
})
//详情
var brand = Vue.extend({
  template: "#s_brand"
})

//简介-个人
var watc = Vue.extend({
  template: "#watc",
  data: function() {
    return {
      da: {
        "goods": [{
            "imgSrc": "./img/h-img/z3_1.png",
            "title": "山不在高",
            "p": "有仙则名",
            "p2": "史如川 男"
          },
          {
            "imgSrc": "./img/h-img/y3_2.png",
            "title": "水不在深",
            "p": "有龙则灵",
            "p2": "河北 邯郸"
          },
          {
            "imgSrc": "./img/h-img/z3_3.jpg",
            "title": "斯是陋室",
            "p": "惟吾德馨",
            "p2": "联系电话13126906254"
          }
        ],

        "goods1": [{
            "imgSrc": "./img/h-img/y01.png",
            "title": "精通HTML5",
            "p": "布局排版",
            "p2": "超文本标记语言"
          },
          {
            "imgSrc": "./img/h-img/k1.jpg",
            "title": "掌握CSS3",
            "p": "珍爱程序猿，远离IE678",
            "p2": "层叠样式表"
          },
          {
            "imgSrc": "./img/h-img/k2.png",
            "title": "掌握JavaScript",
            "p": "JQ框架少不了",
            "p2": "动态脚本语言"
          }
        ]
      }
    }
  }
})
//简介-技能
var flat = Vue.extend({
  template: "#flat",
  data: function() {
    return {
      da: {
        "goods": [{
            "imgSrc": "./img/h-img/z3_1.png",
            "title": "山不在高",
            "p": "有仙则名",
            "p2": "史如川 男"
          },
          {
            "imgSrc": "./img/h-img/y3_2.png",
            "title": "水不在深",
            "p": "有龙则灵",
            "p2": "河北 邯郸"
          },
          {
            "imgSrc": "./img/h-img/z3_3.jpg",
            "title": "斯是陋室",
            "p": "惟吾德馨",
            "p2": "联系电话13126906254"
          }
        ],

        "goods1": [{
            "imgSrc": "./img/h-img/y01.png",
            "title": "精通HTML5",
            "p": "布局排版",
            "p2": "超文本标记语言"
          },
          {
            "imgSrc": "./img/h-img/k1.jpg",
            "title": "掌握CSS3",
            "p": "珍爱程序猿，远离IE678",
            "p2": "层叠样式表"
          },
          {
            "imgSrc": "./img/h-img/k2.png",
            "title": "掌握JavaScript",
            "p": "JQ框架少不了",
            "p2": "动态脚本语言"
          }
        ]
      }
    }
  }
})

//详情-作品
var s_pinpai = Vue.extend({
  template: "#s_pinpai",
  data: function() {
    return {
      shu: [{
          "src": "./img/s_img/wx.png",
          "text": "如意旗舰盒饭之家",
          "text2": "主要负责：页面基本布局、router 切换、动态交互",
          "date": "微信小程序"
        },
        {
          "src": "./img/s_img/kanshu01.jpg",
          "text": "看书网",
          "text2": "主要负责：页面基本布局、router 切换、兼容测试",
          "date": "PC端"
        },
        {
          "src": "./img/s_img/kanshu02.jpg",
          "text": "看书网",
          "text2": "主要负责：页面基本布局、router 切换、兼容测试",
          "date": "移动端"
        }
      ]
    }
  }
})
//详情-履历
var s_pingao = Vue.extend({
  template: "#s_pingao",
  data: function() {
    return {
      shu: [{
          "src": "./img/s_img/logo.jpg",
          "text": "北京网拍科技有限公司任前端工程师",
          "text2": "2014-08到2015-06"
        },
        {
          "src": "./img/s_img/logo.jpg",
          "text": "北京古羌科技有限公司任前端工程师",
          "text2": "2015-07到2017-10"
        }
      ]
    }
  }
})
//详情-自荐信
var s_guanyu = Vue.extend({
  template: "#s_guanyu",
  data: function() {
    return {
      shu: [{
        "name": "这就是个黑历史，还是别看了",
        "text": "黑历史：",
        "text01": "黑历史",
        "text02": "黑历史",
        "text03": "黑历史",
        "text04": "黑历史",
        "text05": "黑历史",
        "text06": "黑历史",
        "text07": "黑历史",
        "text08": "黑历史",
        "text09": "黑历史",
        "text10": "黑历史",
        "text11": "黑历史",
        "text12": "黑历史",
        "text13": "黑历史",
        "text14": "黑历史",
        "text15": "黑历史",
        "text16": "黑历史",
        "text2": "黑历史",
        "text3": "(｀･ω･´)ゞ黑历史っ",
        "text4": "黑历史"
      }]
    }
  }
})
//配置路由
var router = new VueRouter({
  routes: [{
      path: "/goods",
      component: goods,
      children: [{
          path: "/goods/watc",
          component: watc
        },
        {
          path: "/goods/flat",
          component: flat
        },
        {
          path: "/",
          redirect: "/goods/watc"
        }
      ]
    },
    {
      path: "/brand",
      component: brand,
      children: [{
          path: "/brand/s_pinpai",
          component: s_pinpai
        },
        {
          path: "/brand/s_pingao",
          component: s_pingao
        },
        {
          path: "/brand/s_guanyu",
          component: s_guanyu
        },
        {
          path: "/",
          redirect: "/brand/s_pinpai"
        }
      ]
    },
    {
      path: "/",
      redirect: "/goods"
    }
  ]
})

var vue = new Vue({
  el: "#app",
  router: router,
  data: {
    show: false
  },
  methods: {
    tab: function() {
      if (this.show == false) {
        this.show = true;
        $(".h-show").stop(true).animate({
          "height": "0.9rem"
        }, 300);
      } else {
        this.show = false;
        $(".h-show").stop(true).animate({
          "height": "0"
        }, 300);
      }
    },
    noshow: function() {
      console.log("点击测试");
      this.show = false;
      $(".h-show").stop(true).animate({
        "height": "0"
      }, 300);
    }
  },
  created: function() {
    const it = this
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 160) {
        it.show = false;
        $(".h-show").stop(true).animate({
          "height": "0"
        }, 300);
      }
      if ($(window).scrollTop() >= 290) {
        $(".h-tab").css({
          "position": "fixed",
          "top": "0"
        })
      }
      if ($(window).scrollTop() <= 290) {
        $(".h-tab").css({
          "position": "absolute",
          "top": "0"
        })
      }
      if ($(window).scrollTop() >= 290) {
        $(".s_con-nav").css({
          "position": "fixed",
          "top": "0"
        })
      }
      if ($(window).scrollTop() <= 290) {
        $(".s_con-nav").css({
          "position": "absolute",
          "top": "0"
        })
      }
      if ($(window).scrollTop() >= 720) {
        if ($(".h-tab>li>a:eq(0)").hasClass('router-link-exact-active')) {
          $(".h-tab>li>a:eq(1)").addClass("router-link-active")
          $(".h-tab>li>a:eq(0)").removeClass("router-link-active")
        } else {
          $(".h-tab>li>a:eq(0)").addClass("router-link-active")
          $(".h-tab>li>a:eq(1)").removeClass("router-link-active")
        }
      } else {
        if ($(".h-tab>li>a:eq(0)").hasClass('router-link-exact-active')) {
          $(".h-tab>li>a:eq(0)").addClass("router-link-active")
          $(".h-tab>li>a:eq(1)").removeClass("router-link-active")
        } else {
          $(".h-tab>li>a:eq(1)").addClass("router-link-active")
          $(".h-tab>li>a:eq(0)").removeClass("router-link-active")
        }
      }
    })
  }

})
