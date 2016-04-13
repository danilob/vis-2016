$(function(){

    $('#container').highcharts({
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Bilheteria',
        },
        xAxis: {
            categories: ['Worldwide', 'Domestic', 'Brazil', 'Australia']
        },
        yAxis: {
            title: 'Bilheteria',
        },
        series: [{
                     name: 'Deadpool',
                     data: [756971828,358587687,20602053,32459253]
                 }, {
                     name: 'Star Wars: The Force Awakens',
                     data: [2064053170,935553170,27982311,71399222]
                 }, {
                     name: 'Big Hero 6',
                     data: [657818612,222527828,12822819,17773571]
                 }, {
                     name: 'Big Hero 6',
                     data: [463360063,126663600,9393449,13873306]
                 }]

    });



$('#container2').highcharts({
        chart: {
            type: 'line',
        },
        title: {
            text: 'Arrecadação nas Bilheterias na Semana de Estréia',
        },
        xAxis: {
            categories: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4','Dia 5','Dia 6','Dia 7']
        },
        yAxis: {
            title: {
               text: 'Valor arrecadado (US$) corrigido pela inflação'
            }
        },
        series: [{
                     name: 'Deadpool',
                     data: [47335600, 42508000, 42591000, 19759200, 11559600, 8617600, 8023800]
                 },
{
                     name: 'Star Wars: The Force Awakens',
                     data: [119119282, 68294204, 60553189, 40109742, 37361729, 38022183, 27395725]
                 },
{
                     name: 'Lucy',
                     data: [17088110, 15024580, 11786650, 4967320, 5441695, 3744140, 3234890]
                 },
{
                     name: 'Big Hero',
                     data: [15809055, 24050595, 16356239, 5159128, 10508182, 1876936, 1883756]
                 }
]

    });



});
