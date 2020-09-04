Highcharts.setOptions({lang:{thousandsSep:","}});let chartId=document.getElementById("chart-container");function drawHighcharts(){Highcharts.chart(chartId,{chart:{type:"bar",styledMode:!0,spacingBottom:25,spacingRight:100,spacingLeft:0,spacingTop:20},title:{text:null},data:{googleSpreadsheetKey:"1YOKb5l2VM4aAB2r20N_1aT_1vEajYrP3U-U3A6lZbC0"},plotOptions:{series:{groupPadding:.1}},legend:{align:"right",symbolRadius:0,verticalAlign:"top",x:10,itemMarginTop:-10},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"}},credits:{enabled:!1},tooltip:{shadow:!1,padding:10},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})}setTimeout(function(){if(""===chartId.innerHTML){let e=document.getElementsByClassName("chart-area");for(var t=0;t<e.length;t++)e[t].style.display="none";document.getElementById("chart-fallback").innerHTML+='<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">'}},500),"complete"===document.readyState||"interactive"===document.readyState?drawHighcharts():document.addEventListener("DOMContentLoaded",drawHighcharts);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiY2hhcnRJZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3SGlnaGNoYXJ0cyIsImNoYXJ0IiwidHlwZSIsInN0eWxlZE1vZGUiLCJzcGFjaW5nQm90dG9tIiwic3BhY2luZ1JpZ2h0Iiwic3BhY2luZ0xlZnQiLCJzcGFjaW5nVG9wIiwidGl0bGUiLCJ0ZXh0IiwiZGF0YSIsImdvb2dsZVNwcmVhZHNoZWV0S2V5IiwicGxvdE9wdGlvbnMiLCJzZXJpZXMiLCJncm91cFBhZGRpbmciLCJsZWdlbmQiLCJhbGlnbiIsInN5bWJvbFJhZGl1cyIsInZlcnRpY2FsQWxpZ24iLCJ4IiwiaXRlbU1hcmdpblRvcCIsInhBeGlzIiwibGFiZWxzIiwic3R5bGUiLCJ3aGl0ZVNwYWNlIiwidGlja0xlbmd0aCIsInlBeGlzIiwidXNlSFRNTCIsIm92ZXJmbG93IiwiY3JlZGl0cyIsImVuYWJsZWQiLCJ0b29sdGlwIiwic2hhZG93IiwicGFkZGluZyIsInJlc3BvbnNpdmUiLCJydWxlcyIsImNvbmRpdGlvbiIsIm1heFdpZHRoIiwiY2hhcnRPcHRpb25zIiwic2V0VGltZW91dCIsImlubmVySFRNTCIsImNoYXJ0QXJlYSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiZGlzcGxheSIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFRQUEsV0FBQUMsV0FBQSxDQUNBQyxLQUFBLENBQ0FDLGFBQUEsT0FJQSxJQUFBQyxRQUFBQyxTQUFBQyxlQUFBLG1CQWlCQSxTQUFBQyxpQkFDQVAsV0FBQVEsTUFBQUosUUFBQSxDQUNBSSxNQUFBLENBQ0FDLEtBQUEsTUFDQUMsWUFBQSxFQUNBQyxjQUFBLEdBQ0FDLGFBQUEsSUFDQUMsWUFBQSxFQUNBQyxXQUFBLElBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLGdEQUdBQyxZQUFBLENBQ0FDLE9BQUEsQ0FDQUMsYUFBQSxLQW9CQUMsT0FBQSxDQUNBQyxNQUFBLFFBQ0FDLGFBQUEsRUFDQUMsY0FBQSxNQUNBQyxFQUFBLEdBQ0FDLGVBQUEsSUFFQUMsTUFBQSxDQUNBQyxPQUFBLENBQ0FDLE1BQUEsQ0FDQUMsV0FBQSxXQUdBQyxXQUFBLEdBT0FDLE1BQUEsQ0FDQWxCLE9BQUEsRUFDQWMsT0FBQSxDQUNBSyxTQUFBLEVBQ0FDLFNBQUEsVUFPQUMsUUFBQSxDQUNBQyxTQUFBLEdBRUFDLFFBQUEsQ0FDQUMsUUFBQSxFQUNBQyxRQUFBLElBRUFDLFdBQUEsQ0FDQUMsTUFBQSxDQUFBLENBQ0FDLFVBQUEsQ0FDQUMsU0FBQSxLQUVBQyxhQUFBLENBQ0FyQyxNQUFBLENBQ0FJLGFBQUEsSUFFQVUsT0FBQSxDQUNBQyxNQUFBLE9BQ0FHLEdBQUEsSUFFQVksUUFBQSxDQUNBRCxTQUFBLFNBekdBUyxXQUFBLFdBQ0EsR0FBQSxLQUFBMUMsUUFBQTJDLFVBQUEsQ0FFQSxJQUFBQyxFQUFBM0MsU0FBQTRDLHVCQUFBLGNBQ0EsSUFBQSxJQUFBQyxFQUFBLEVBQUFBLEVBQUFGLEVBQUFHLE9BQUFELElBQ0FGLEVBQUFFLEdBQUFwQixNQUFBc0IsUUFBQSxPQUdBL0MsU0FBQUMsZUFBQSxrQkFBQXlDLFdBQUEsNElBSUEsS0FxR0EsYUFBQTFDLFNBQUFnRCxZQUFBLGdCQUFBaEQsU0FBQWdELFdBQ0E5QyxpQkFFQUYsU0FBQWlELGlCQUFBLG1CQUFBL0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFkZHMgc29jaWFsIGNsYXNzIHRvIGdldCBzb2NpYWwgY2hhcnRcbi8vIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LWFyZWFcIik7XG4vLyBmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKylcbi8vIHtcbi8vICAgICBlbGVtZW50W2ldLmNsYXNzTmFtZSArPSBcIiBzb2NpYWxcIjtcbi8vIH1cblxuXG5IaWdoY2hhcnRzLnNldE9wdGlvbnMoe1xuICAgIGxhbmc6IHtcbiAgICAgIHRob3VzYW5kc1NlcDogJywnXG4gICAgfVxufSk7XG5cbmxldCBjaGFydElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydC1jb250YWluZXJcIik7XG5cbi8vIGNoZWNrcyBmb3IgdGhlIGNoYXJ0IElEIGFuZCBkaXNwbGF5cyBhIGJhY2t1cCBpbWFnZSBpZiB0aGUgYnJvd3NlciBjYW4ndCBmaW5kIGl0XG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGlmKGNoYXJ0SWQuaW5uZXJIVE1MID09PSBcIlwiKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdub0lkJyk7XG4gICAgICAgIGxldCBjaGFydEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYVwiKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNoYXJ0QXJlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hhcnRBcmVhW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gaW5zZXJ0IGNoYXJ0IHNjcmVlbnNob3QgaGVyZVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWZhbGxiYWNrXCIpLmlubmVySFRNTCArPSAnPGltZyBzcmM9XCJodHRwczovL2ZtLXN0YXRpYy5jbmJjLmNvbS9hd3NtZWRpYS9jaGFydC8yMDE5LzEwLzA4L2NoYXJ0LWVycm9yX3dpZGUuMTU3MDU2OTMzMTI1Mi5wbmdcIiBzdHlsZT1cIndpZHRoOiAxMDAlO21heC13aWR0aDo2NjBweFwiPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3llc0lkJylcbiAgICB9XG59LDUwMCk7XG5cbmZ1bmN0aW9uIGRyYXdIaWdoY2hhcnRzKCkge1xuICAgIEhpZ2hjaGFydHMuY2hhcnQoY2hhcnRJZCwge1xuICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICBzdHlsZWRNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc3BhY2luZ0JvdHRvbTogMjUsXG4gICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwMCxcbiAgICAgICAgICAgIHNwYWNpbmdMZWZ0OiAwLFxuICAgICAgICAgICAgc3BhY2luZ1RvcDogMjBcbiAgICAgICAgfSwgXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdvb2dsZVNwcmVhZHNoZWV0S2V5OiAnMVlPS2I1bDJWTTRhQUIycjIwTl8xYVRfMXZFYWpZclAzVS1VM0E2bFpiQzAnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZvciBiYXIgY2hhcnRzIG9ubHlcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3VwUGFkZGluZzogMC4xXG4gICAgICAgICAgICB9IFxuICAgICAgICB9LFxuICAgICAgICAvLyBmb3IgbGluZSBjaGFydHMgb25seVxuICAgICAgICAvLyBwbG90T3B0aW9uczoge1xuICAgICAgICAvLyAgICAgc2VyaWVzOiB7XG4gICAgICAgIC8vICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAvLyAgICAgICAgIC8vIGNsaXA6IGZhbHNlLFxuICAgICAgICAvLyAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAvLyAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIC8vICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgc3ltYm9sUmFkaXVzOiAwLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgICB4OiAxMCxcbiAgICAgICAgICAgIGl0ZW1NYXJnaW5Ub3A6IC0xMFxuICAgICAgICB9LFxuICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlja0xlbmd0aDogNSxcbiAgICAgICAgICAgIC8vIGVkaXRzIHhBeGlzIHRpY2tzXG4gICAgICAgICAgICAvLyBkYXRlVGltZUxhYmVsRm9ybWF0czoge1xuICAgICAgICAgICAgLy8gICAgIHdlZWs6ICclYi4gJWUnLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHRpY2tJbnRlcnZhbDogMjQgKiAzNjAwICogMTAwMCAqIDdcbiAgICAgICAgfSxcbiAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhbGxvdydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBhZGRzIGNvbW1hcyB0byB0aG91c2FuZHNcbiAgICAgICAgICAgIC8vIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBIaWdoY2hhcnRzLm51bWJlckZvcm1hdCh0aGlzLnZhbHVlLDAsJy4nLCcsJyk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICB9LFxuICAgICAgICBjcmVkaXRzOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICBzaGFkb3c6IGZhbHNlLFxuICAgICAgICAgICAgcGFkZGluZzogMTBcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgcnVsZXM6IFt7XG4gICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgeDogLTE4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICBkcmF3SGlnaGNoYXJ0cygpO1xufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBkcmF3SGlnaGNoYXJ0cyk7XG59Il19