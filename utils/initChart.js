import * as echarts from '../ec-canvas/echarts';

/**
 * 饼状图（pie）
 */
const initPieChart = function(canvas, width, height, params) {
  var echartData = [];
  var echartColor = [];
  console.log( params );

  if (params.data && params.data.length && params.color && params.color.length){
    for (var i = 0; i < params.data.length; i++) {
      if (i < params.color.length){
        echartColor[i] = params.color[i];
      } else {
        var j = i % params.color.length;
        echartColor[i] = params.color[j];
      }
    };
    // 最后一个颜色和开始第一个颜色一样，需要调整
    if (params.data.length % params.color.length == 1 && params.color[1]){
      echartColor[ echartColor.length -1 ] = params.color[1];
    };
    echartData = params.data
  };

  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  // var option = {
  //   backgroundColor: "#ffffff",
  //   color: echartColor,
  //   series: [{
  //     label: {
  //       normal: {
  //         fontSize: 14,
  //         formatter: '{b}\n({d}%)'
  //       }
  //     },
  //     type: 'pie',
  //     center: ['50%', '37%'],
  //     radius: [0, '50%'],
  //     data: echartData,
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
    legend: {
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
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: echartData
        // data: [
        //   { value: 335, name: '直接访问' },
        //   { value: 310, name: '邮件营销' },
        //   { value: 234, name: '联盟广告' },
        //   { value: 135, name: '视频广告' },
        //   { value: 1548, name: '搜索引擎' }
        // ]
      }
    ]
  };

  chart.setOption(option);
  return chart;
};

module.exports = {
  pie: initPieChart
}