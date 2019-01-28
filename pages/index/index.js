import * as echarts from '../../ec-canvas/echarts';
const app = getApp()

var echartcanvas;
var echartwidth;
var echartheight;

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  // var option = {
  //   backgroundColor: "#ffffff",
  //   color: ['#ffce22', '#f16d7b', '#00a0b8', '#ff8533', '#ffc649'],
  //   series: [{
  //     label: {
  //       normal: {
  //         fontSize: 14,
  //         formatter: '{b}\n({d}%)'
  //       }
  //     },
  //     type: 'pie',
  //     center: ['50%', '37%'],
  //     radius: [0, '60%'],
  //     data: [{
  //       value: 55,
  //       name: 'ITSM(2h)'
  //     }, {
  //       value: 20,
  //       name: '运维APP'
  //     }, {
  //       value: 10,
  //       name: '保密法制进校园'
  //     }, {
  //       value: 20,
  //       name: '市中院云柜'
  //     }, {
  //       value: 38,
  //       name: '其他'
  //     },
  //     ],
  //     itemStyle: {
  //       emphasis: {
  //         shadowBlur: 10,
  //         shadowOffsetX: 0,
  //         shadowColor: 'rgba(0, 2, 2, 0.3)'
  //       }
  //     }
  //   }]
  // };

  var option = {
    backgroundColor: "#ffffff",
    color: ['#ffce22', '#f16d7b', '#00a0b8', '#ff8533', '#ffc649'],
    // tooltip: {
    //   trigger: 'item',
    //   formatter: "{a} <br/>{b}: {c} ({d}%)"
    // },
    legend: {
      // orient: 'vertical',
      // x: 'left',
      bottom: '30rpx',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['20%', '60%'],
        center: ['50%', '40%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            position: 'inside',
            formatter: '{d}%'
          }
          // emphasis: {
          //   show: true,
          //   textStyle: {
          //     fontSize: '30',
          //     fontWeight: 'bold'
          //   }
          // }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  data: {
    name: '丁明明',
    startDate: '',    // 日历起始日期
    endDate: '',      // 日历结束日期
    date: '',         // 当前选择日期
    day: '',          // 当前周几
    startMonth: '',
    endMonth: '',
    pieDate: '',
    list: [
      { id: 1, name: '保密法制进校园', value: 2 },
      { id: 2, name: '合肥中院云柜', value: 4 },
      { id: 3, name: '运维ITSM3.0', value: 6 },
      { id: 4, name: '保密法制进校园', value: 8 },
      { id: 5, name: '运维ITSM3.0', value: 2 },
    ],
    ec: {
      onInit: initChart
    },
    echartIsEmpty: false,
    // ec: {},           // echart使用
    echartData: [],   // echart饼状图的数据
    echartColor: ['#7dcc56', '#45b1ff', '#b58cf2', '#ff8533', '#ffc649'],  // echart饼状图的颜色
    echartIsEmpty: false
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    var date = app.util.formatDate(new Date());
    var day = app.util.formatDay(date);
    var beforeThree = app.util.beforeThreeYear(new Date());
    var pieDate = app.util.formatDate(new Date()).substring(0,7);
    console.log(pieDate)
    this.setData({
      startDate: beforeThree.toString(),
      endDate: date.toString(),
      date: date,
      day: day,
      pieDate: pieDate,
      startMonth: '2018-01',
      endMonth: '2019-01'
    });
  },
 
  // 点击日期
  bindDateChange(e) {
    var dateStr = e.detail.value;
    var day = app.util.formatDay(dateStr);
    this.setData({
      date: dateStr,
      day: day
    });

    // this.getTableData(this.data.date);
    // this.getMonthData(this.data.date)
  },

  bindDateChange2(e) {

  },

  // 到打卡页面
  clockIn() {
    // wx.navigateTo({
    //   url: '/pages/clock/clock',
    // });
  }
  
})
