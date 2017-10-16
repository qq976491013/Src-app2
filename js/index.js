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
          "src": "./img/s_img/logo2.jpg",
          "text": "以猪八戒网、一品威客、小鱼儿网为主要项目来源进行零散敏捷式前端开发",
          "text2": "2014-08到2014-11"
        },
        {
          "src": "./img/s_img/logo.jpg",
          "text": "北京古羌科技有限公司任前端工程师",
          "text2": "2015-02到2017-01"
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
        "name": "自荐书",
        "text": "尊敬的领导：",
        "text01": "您好!",
        "text02": "我是史如川，我是来自河北邯郸的一员普普通通的北漂一族。来到北京也",
        "text03": "有大半年了，刚开始激情澎湃想做一番事业，如今却已然心灰意冷了。没有哪",
        "text04": "份工作不辛苦，没有哪份事业不委屈。如人饮水冷暖自知。",
        "text05": "最初我们是三人一起来北京寻找心仪工作的，还记得当初我们海投之后接到",
        "text06": "一个电话是有多么的开心，纵然再忙于各种面试仍然汇聚在一起举杯同庆；由",
        "text07": "于我们并非科班出身，只是因为兴趣才去研究的技术终究不被只看学历的大公",
        "text08": "司认可，虽然谨小慎微，仍被抓住机会以“公司不收野路子出身为由”予以开",
        "text09": "除。",
        "text10": "如今，他二人一人改行写文案、一人返家务农。独留我一人仍在坚持，我并",
        "text11": "不知道是什么在支撑着我继续坚持，但是初心不改我就有继续坚持梦想的理由。",
        "text12": "只要有机会我仍旧会努力奋斗...",
        "text13": "这里，也希望贵公司能够尊重我们这些求职者。您或许只是随手翻阅，翻阅",
        "text14": "的是纸张、看到的是文字、记载的却是我们这些求职者的前半生，或许您的一",
        "text15": "个临时决定、影响的可能就是我们的一生！谢谢您能在百忙之中抽空来看我们",
        "text16": "的简历，祝您身心健康，万事如意",
        "text2": "此致",
        "text3": "(｀･ω･´)ゞ敬礼っ",
        "text4": "2017-10-9"
      }]
    }
  },
  created: function() {
    this.$http.get("./data/s.json").then(function(data) {
      this.shu = JSON.parse(data.body)
    })
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
