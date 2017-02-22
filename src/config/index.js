const config = {
  logo: 'static/img/logo.png',
  title: 'static/img/logo-tit.png',
  login: [{
    img: 'static/img/user.png',
    text: '陈志文，欢迎您'
  }, {
    img: 'static/img/lock.png',
    text: '修改密码'
  }, {
    img: 'static/img/logout.png',
    text: '安全退出'
  }],
  menu: [{
    text: '首页',
    name: 'home',
    icon: 'static/img/home.png',
    url: {name: 'home'}
  }, {
    text: '公文处理',
    name: 'document',
    icon: 'static/img/document.png',
    url: {name: 'document'}
  }, {
    text: '内务管理',
    name: 'interior',
    icon: 'static/img/interior.png',
    url: {name: 'interior'}
  }, {
    text: '督办任务',
    name: 'supervise',
    icon: 'static/img/supervise.png',
    url: {name: 'supervise'}
  }, {
    text: '重要资料',
    name: 'data',
    icon: 'static/img/data.png',
    url: {name: 'data'}
  }],
  content: [{
    tit: '发文',
    name: 'publish',
    url: {name: 'publish'},
    url1: '/home/publish',
    icon: 'static/img/publish.png',
    list: [{
      type: '督',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '急',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '督',
      text: '咨政参考  [关于在东进战略架构下振兴先进制造业的对策建议]',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }]
  }, {
    tit: '内呈件',
    name: 'give',
    url: {name: 'give'},
    url1: '/home/give',
    icon: 'static/img/give.png',
    list: [{
      type: '督',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '急',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '督',
      text: '咨政参考  [关于在东进战略架构下振兴先进制造业的对策建议]',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }]
  }, {
    tit: '办件',
    name: 'file',
    url: {name: 'file'},
    url1: '/home/file',
    icon: 'static/img/file.png',
    list: [{
      type: '督',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '急',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '督',
      text: '咨政参考  [关于在东进战略架构下振兴先进制造业的对策建议]',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }]
  }, {
    tit: '内务',
    name: 'chrome',
    url1: '/home/chrome',
    url: {name: 'chrome'},
    icon: 'static/img/chrome.png',
    list: [{
      type: '督',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '急',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '督',
      text: '咨政参考  [关于在东进战略架构下振兴先进制造业的对策建议]',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }]
  }, {
    tit: '阅件',
    name: 'view',
    url: {name: 'view'},
    url1: '/home/view',
    icon: 'static/img/view.png',
    list: [{
      type: '督',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '急',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '督',
      text: '咨政参考  [关于在东进战略架构下振兴先进制造业的对策建议]',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }]
  }, {
    tit: '通知公告',
    name: 'notice',
    url1: '/home/notice',
    url: {name: 'notice'},
    icon: 'static/img/notice.png',
    list: [{
      type: '督',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '急',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '督',
      text: '咨政参考  [关于在东进战略架构下振兴先进制造业的对策建议]',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '中共深圳市委办公厅  深圳市人民政府办公厅关于成立',
      url: {name: 'home'},
      time: '01-12'
    }, {
      type: '平',
      text: '深圳市人民政府关于进一步完善房屋征收补偿机制的若干意见',
      url: {name: 'home'},
      time: '01-12'
    }]
  }]
}
export default config
