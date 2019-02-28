$(function () {
    loadImg()
	var Pie1=echarts.init(document.getElementById('StatusCanvas'));
    Pie1.setOption(option1);
    tabToggle();
})
window.onresize = function () {
	HautoFit();
}

var startedData=[   //!!!!!需要后台传入的数据
	{value:24, name:'工业污染防治方法'},
	{value:15, name:'城镇生活污染治理方面'},
	{value:15, name:'加强水环境管理方法'},
	{value:15, name:'水生态环境保护方法'},
	{value:15, name:'农业农村污染防治方面'},
	{value:15, name:'船舶港口污染控制方面'},
	{value:15, name:'重点流域及库区生态环境保护方面'},
	//{value:40, name:'rose8'}
];
var finishedData=[   //!!!!!需要后台传入的数据
	{value:26, name:'工业污染防治方法'},
	{value:14, name:'城镇生活污染治理方面'},
	{value:15, name:'加强水环境管理方法'},
	{value:13, name:'水生态环境保护方法'},
	{value:15, name:'农业农村污染防治方面'},
	{value:25, name:'船舶港口污染控制方面'},
	{value:15, name:'重点流域及库区生态环境保护方面'},
	//{value:40, name:'rose8'}
];
var option1={
    color:['#64cb66','#a6b7ff','#158eff','#4cdeeb','#ff6529','#ffac29','#ffe451'],
    tooltip : {//提示框
        show : true,
        trigger: 'item',
        //formatter: "{a} <br/>{b} : {c} ({d}%)",
        formatter: "{b} : {c} ({d}%)"
    },
    toolbox: {//工具栏
        show : false
    },
    title: {
        x: '48%',
        y: '33%',
        subtext: '19%',
        textAlign: 'center',
        subtextStyle: {
          fontSize: 25,
          color: '#333333'
        }
      },
    calculable : true,
    series : [
        {
           // name:'已启动项目',
            type:'pie',
            radius : [65, 85],
            center : ['25%', '50%'],
            roseType : 'radius',
            startAngle: 135,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true,
                    smooth:true,
                    length: 20,
                    length2: 0
                }
            },
            data:startedData
        },
        {
           //name:'已完成项目',
            type:'pie',
            radius : [65, 85],
            center : ['75%', '50%'],
            roseType : 'radius',
            startAngle: 135,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:finishedData
        }
    ]
};
