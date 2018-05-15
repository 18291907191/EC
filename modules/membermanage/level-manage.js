angular.module("com.ec.modules.levelmanage",[])
    .controller("levelManageController",["$scope",function ($scope) {
        dialog();
        $('.none').click(function () {
            $('.product-left').animate({"width": "0"}, 250);
            $('.bebig').show();
            $(this).hide();
        });
        $('.bebig').click(function () {
            $('.product-left').animate({"width": "220px"}, 250);
            $('.none').show();
            $(this).css("display","none");
        });
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var weatherIcons = {
            'Sunny': '',
            'Cloudy': '',
            'Showers': ''
        };
        option = {
            title: {
                text: '用户等级统计',
                subtext: '实时更新最新等级',
                left: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                // orient: 'vertical',
                // top: 'middle',
                bottom: 10,
                left: 'center',
                data: ['普通用户', '铁牌用户','铜牌用户','银牌用户','金牌用户','钻石用户','蓝钻用户','红钻用户']
            },
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data:[
                        {
                            // value:1548,
                            // name: '幽州',
                            label: {
                                normal: {
                                    backgroundColor: '#eee',
                                    borderColor: '#777',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    rich: {
                                        title: {
                                            color: '#eee',
                                            align: 'center'
                                        },
                                        abg: {
                                            backgroundColor: '#333',
                                            width: '100%',
                                            align: 'right',
                                            height: 25,
                                            borderRadius: [4, 4, 0, 0]
                                        },
                                        // Sunny: {
                                        //     height: 30,
                                        //     align: 'left',
                                        //     backgroundColor: {
                                        //         image: weatherIcons.Sunny
                                        //     }
                                        // },
                                        // Cloudy: {
                                        //     height: 30,
                                        //     align: 'left',
                                        //     backgroundColor: {
                                        //         image: weatherIcons.Cloudy
                                        //     }
                                        // },
                                        Showers: {
                                            height: 30,
                                            align: 'left',
                                            backgroundColor: {
                                                image: weatherIcons.Showers
                                            }
                                        },
                                        // weatherHead: {
                                        //     color: '#333',
                                        //     height: 24,
                                        //     align: 'left'
                                        // },
                                        hr: {
                                            borderColor: '#777',
                                            width: '100%',
                                            borderWidth: 0.5,
                                            height: 0
                                        },
                                        value: {
                                            width: 20,
                                            padding: [0, 20, 0, 30],
                                            align: 'left'
                                        },
                                        valueHead: {
                                            color: '#333',
                                            width: 20,
                                            padding: [0, 20, 0, 30],
                                            align: 'center'
                                        },
                                        rate: {
                                            width: 40,
                                            align: 'right',
                                            padding: [0, 10, 0, 0]
                                        },
                                        rateHead: {
                                            color: '#333',
                                            width: 40,
                                            align: 'center',
                                            padding: [0, 10, 0, 0]
                                        }
                                    }
                                }
                            }
                        },
                        {value:535, name: '普通用户'},
                        {value:510, name: '铁牌用户'},
                        {value:634, name: '铜牌用户'},
                        {value:735, name: '银牌用户'},
                        {value:735, name: '金牌用户'},
                        {value:735, name: '钻石用户'},
                        {value:735, name: '蓝钻用户'},
                        {value:735, name: '红钻用户'},
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

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

    }])
    .service("levelManageService",function () {
    });