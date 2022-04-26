import EasyPieChart from 'easy-pie-chart';
class SingleMap {
    constructor() {
       this.mapPieChart();
    }
    mapPieChart() {
        var element = document.querySelectorAll('.piechart');
        for (var i = 0; i < element.length; i++) {
            new EasyPieChart(element[i], {
                scaleColor: "transparent",
                lineWidth: 4,
                lineCap: 'round',
                barColor: '#C17BBE',
                trackColor: "#EAE0D5",
                size: 48,
                rotate: 0,
                animate: 1500,
                onStep: function(from, to, percent) {
                    $( this.el ).find( '.percent' ).text( Math.round( percent ) );
                },
            });
        }
    }
}
export default SingleMap;
new SingleMap();