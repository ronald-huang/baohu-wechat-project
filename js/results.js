$(function(){
	 require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
	// 使用
        require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main1')); 
                var myChart2 = ec.init(document.getElementById('main2')); 
                var option = {
				    title : {
				        text: '建议寿险保额220万元',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				   
				    calculable : true,
				    series : [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:[
				                {value:55, name:'55%'},
				                {value:36, name:'36%'},
				                {value:9, name:'9%'}
				            ]
				        }
				    ]
				};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option);
                myChart2.setOption(option);  
            }
        );
                    

})