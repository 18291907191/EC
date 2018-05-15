angular.module("com.ec.brandmanage",[])
    .controller("brandManageController",["$scope",function ($scope) {
        dialog();
        /*echarts引入*/
        $(document).ready(function(){
            var myChart = echarts.init(document.getElementsByClassName('brand-left')[0]);
            var option = {
                title : {
                    text: '国内国外品牌比例',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['国内品牌','国外品牌']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'国内品牌',itemStyle:{color:'#ff7f50'}},
                            {value:210, name:'国外品牌',itemStyle:{color:'#87cefa'}}

                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        });
        /*复选框全选*/
        $('.quan').children('input').click(function () {
            var sel=$(this).prop('checked');
            $('td').children('input').prop('checked',sel);
        })
        /*页面显示*/
        $('.none').click(function () {
            $('.suibian').fadeToggle(200,0);
            $('.bebig').fadeTo(300,1);
        })
        $('.bebig').click(function () {
            $('.suibian').fadeToggle(200,0);
            $('.bebig').css('display','none');
        })
    }])