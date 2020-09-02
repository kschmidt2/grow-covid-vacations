// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


function drawHighcharts() {
    Highcharts.chart("chart-container-CV1", {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 5,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1a53u8oNxFoH69P6uoChh8P2899e2KG5NhLYjfhDY9Vk',
            googleSpreadsheetWorksheet: 1,
            endRow: 13
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                autoRotation: false,
                overflow: 'allow',
                style: {
                    whiteSpace: 'nowrap',
                }
            },
            tickLength: 5,
            type: 'category'
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueDecimals: 0,
            valueSuffix: '%'
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        step: 2
                    },
                }
            }
            }]
        }
    })

    Highcharts.chart("chart-container-CV2", {
        chart: {
            type: 'dumbbell',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 10,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1a53u8oNxFoH69P6uoChh8P2899e2KG5NhLYjfhDY9Vk',
            googleSpreadsheetWorksheet: 3,
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                autoRotation: false,
                overflow: 'allow',
                style: {
                    whiteSpace: 'nowrap',
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueDecimals: 0,
            valuePrefix: '$',
            shared: true,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
            }
            }]
        }
    })

    Highcharts.chart("chart-container-CV3", {
        chart: {
            type: 'dumbbell',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 5,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1a53u8oNxFoH69P6uoChh8P2899e2KG5NhLYjfhDY9Vk',
            googleSpreadsheetWorksheet: 4,
            startColumn: 6
        },
        // for bar charts only
        plotOptions: {
            lowColor: 'red',
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                autoRotation: false,
                overflow: 'allow',
                style: {
                    whiteSpace: 'nowrap',
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueDecimals: 0,
            shared: true,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
            }
            }]
        }
    })

    Highcharts.chart("chart-container-CV4", {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 5,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1a53u8oNxFoH69P6uoChh8P2899e2KG5NhLYjfhDY9Vk',
            googleSpreadsheetWorksheet: 5,
            endRow: 3
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            itemMarginTop: -10
        },
        xAxis: {
            labels: {
                autoRotation: false,
                overflow: 'allow',
                style: {
                    whiteSpace: 'nowrap',
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueDecimals: 0,
            shared: true,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
            }
            }]
        }
    })

    // Highcharts.chart("chart-container-CV5", {
    //     chart: {
    //         type: 'column',
    //         styledMode: true,
    //         spacingBottom: 25,
    //         spacingRight: 100,
    //         spacingLeft: 5,
    //         spacingTop: 20
    //     }, 
    //     title: {
    //         text: null
    //     },
    //     data: {
    //         googleSpreadsheetKey: '1a53u8oNxFoH69P6uoChh8P2899e2KG5NhLYjfhDY9Vk',
    //         googleSpreadsheetWorksheet: 5,
    //         endRow: 3
    //     },
    //     // for bar charts only
    //     plotOptions: {
    //         series: {
    //             groupPadding: 0.1
    //         } 
    //     },
    //     // for line charts only
    //     // plotOptions: {
    //     //     series: {
    //     //         lineWidth: 1,
    //     //         // clip: false,
    //     //         marker: {
    //     //             enabled: false,
    //     //             symbol: 'circle',
    //     //             fillColor: '#ffffff',
    //     //             states: {
    //     //                 hover: {
    //     //                     fillColor: '#ffffff'
    //     //                 }
    //     //             }
    //     //         }
    //     //     }
    //     // },
    //     legend: {
    //         align: 'right',
    //         symbolRadius: 0,
    //         verticalAlign: 'top',
    //         x: 10,
    //         itemMarginTop: -10
    //     },
    //     xAxis: {
    //         labels: {
    //             autoRotation: false,
    //             overflow: 'allow',
    //             style: {
    //                 whiteSpace: 'nowrap',
    //             }
    //         },
    //         tickLength: 5,
    //         // edits xAxis ticks
    //         // dateTimeLabelFormats: {
    //         //     week: '%b. %e',
    //         // },
    //         // tickInterval: 24 * 3600 * 1000 * 7
    //     },
    //     yAxis: {
    //         title: false,
    //         labels: {
    //             useHTML: true,
    //             overflow: 'allow'
    //         },
    //         // adds commas to thousands
    //         // formatter: function () {
    //         //     return Highcharts.numberFormat(this.value,0,'.',',');
    //         // },
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     tooltip: {
    //         shadow: false,
    //         padding: 10,
    //         valueDecimals: 0,
    //         shared: true,
    //     },
    //     responsive: {
    //         rules: [{
    //         condition: {
    //             maxWidth: 500
    //         },
    //         chartOptions: {
    //             chart: {
    //             spacingRight: 10
    //             },
    //             legend: {
    //                 align: 'left',
    //                 x: -18
    //             },
    //             tooltip: {
    //                 enabled: false
    //             },
    //         }
    //         }]
    //     }
    // })

    Highcharts.chart("chart-container-CV6", {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 5,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1a53u8oNxFoH69P6uoChh8P2899e2KG5NhLYjfhDY9Vk',
            googleSpreadsheetWorksheet: 7,
            endRow: 4
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                autoRotation: false,
                overflow: 'allow',
                style: {
                    whiteSpace: 'nowrap',
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 60
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueDecimals: 0,
            shared: true,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
            }
            }]
        }
    })

    // Highcharts.chart("chart-container-CV7", {
    //     chart: {
    //         type: 'bar',
    //         styledMode: true,
    //         spacingBottom: 25,
    //         spacingRight: 100,
    //         spacingLeft: 5,
    //         spacingTop: 20
    //     }, 
    //     title: {
    //         text: null
    //     },
    //     data: {
    //         googleSpreadsheetKey: '1a53u8oNxFoH69P6uoChh8P2899e2KG5NhLYjfhDY9Vk',
    //         googleSpreadsheetWorksheet: 7,
    //         endRow: 4
    //     },
    //     // for bar charts only
    //     plotOptions: {
    //         lowColor: 'red',
    //         series: {
    //             groupPadding: 0.1
    //         } 
    //     },
    //     // for line charts only
    //     // plotOptions: {
    //     //     series: {
    //     //         lineWidth: 1,
    //     //         // clip: false,
    //     //         marker: {
    //     //             enabled: false,
    //     //             symbol: 'circle',
    //     //             fillColor: '#ffffff',
    //     //             states: {
    //     //                 hover: {
    //     //                     fillColor: '#ffffff'
    //     //                 }
    //     //             }
    //     //         }
    //     //     }
    //     // },
    //     legend: {
    //         align: 'right',
    //         symbolRadius: 0,
    //         verticalAlign: 'top',
    //         x: 10,
    //         itemMarginTop: -10
    //     },
    //     xAxis: {
    //         labels: {
    //             autoRotation: false,
    //             overflow: 'allow',
    //             style: {
    //                 whiteSpace: 'nowrap',
    //             }
    //         },
    //         tickLength: 5,
    //         // edits xAxis ticks
    //         // dateTimeLabelFormats: {
    //         //     week: '%b. %e',
    //         // },
    //         // tickInterval: 24 * 3600 * 1000 * 7
    //     },
    //     yAxis: {
    //         title: false,
    //         labels: {
    //             useHTML: true,
    //             overflow: 'allow'
    //         },
    //         max: 60
    //         // adds commas to thousands
    //         // formatter: function () {
    //         //     return Highcharts.numberFormat(this.value,0,'.',',');
    //         // },
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     tooltip: {
    //         shadow: false,
    //         padding: 10,
    //         valueDecimals: 0,
    //         shared: true,
    //     },
    //     responsive: {
    //         rules: [{
    //         condition: {
    //             maxWidth: 500
    //         },
    //         chartOptions: {
    //             chart: {
    //             spacingRight: 10
    //             },
    //             legend: {
    //                 align: 'left',
    //                 x: -18
    //             },
    //             tooltip: {
    //                 enabled: false
    //             },
    //         }
    //         }]
    //     }
    // })

}



if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}