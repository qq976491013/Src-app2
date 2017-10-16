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
      da: {}
    }
  },
  created: () => {
    this.$http.get("./data/h-data-1.json").then(function(res) {
      this.da = JSON.parse(res.body)
    })
  }
})
//简介-技能
var flat = Vue.extend({
  template: "#flat",
  data: function() {
    return {
      da: {}
    }
  },
  created: function() {
    this.$http.get("./data/h-data-1.json").then(function(res) {
      this.da = JSON.parse(res.body)
    })
  }
})

//详情-作品
var s_pinpai = Vue.extend({
  template: "#s_pinpai",
  data: function() {
    return {
      shu: []
    }
  },
  created: function() {
    this.$http.get("./data/s.json").then(function(data) {
      this.shu = JSON.parse(data.body)
    })
  }
})
//详情-履历
var s_pingao = Vue.extend({
  template: "#s_pingao",
  data: function() {
    return {
      shu: []
    }
  },
  created: function() {
    this.$http.get("./data/s.json").then(function(data) {
      this.shu = JSON.parse(data.body)
    })
  }
})
//详情-自荐信
var s_guanyu = Vue.extend({
  template: "#s_guanyu",
  data: function() {
    return {
      shu: []
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
