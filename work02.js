$(function(){

    $('#work02_01').highcharts({
        chart: {
            type: 'column',
            style: {
                fontFamily: 'ubuntu'
            }
        },
        title: {
            text: 'Top 10 films that had higher worldwide gross',
        },
        legend: {
            enabled: false,
            floating:true,
        },
        xAxis: {
            type: 'category',
            labels: {
               rotation:-45,
               fontFamily: 'Verdana, sans-serif'
            },
        },
        yAxis: {
            min: 0,
            title: {
               text: 'Worldwide'
            }
        },
        series: [{
                     name: 'Films',
                     data: [
                           ['Avatar',2784],
                           ['Harry Potter and the Deathly Hallows Part 2',1328],
                           ['Transformers: Dark of the Moon',1123],
                           ['Pirates of the Caribbean: On Stranger Tides',1044],
                           ['Alice in Wonderland',1024],
                           ['The Dark Knight',999],
                           ["Pirates of the Caribbean: At World's End",961],
                           ['Iron Man',585],
                           ['Quantum of Solace',585],
		           ['Puss In Boots',522],
			   ['Sherlock Holmes 2',522]
                           ],
                           color: "#0043ff" ,
                dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'center',
                shadow: true,
                format: '{point.y:.0f}', // one decimal
                y: 0, // 10 pixels down from the top
                style: {
                    fontSize: '10px',
                }
            }

}]


    });



$('#work02_02').highcharts({
        chart: {
            type: 'line',
            style: {
                fontFamily: 'ubuntu'
            }
        },
        title: {
            text: 'Differences between films that won oscars and/or baftas awards',

        },
        xAxis: {
            categories: ['No Country for Old Men', "The King's Speech",'Slumdog Millionaire','The Artist','The Hurt Locker','Milk','The Fighter','Beginners','Black Swan','Inglourious Basterds','Juno','Michael Clayton','Midnight in Paris','Ratatouille','The Blind Side','The Dark Knight','The Help','There Will Be Blood','Up','WALL-E','Up in the Air']
        },
        yAxis: {
            title: {
               text: 'Awards'
            }
        },
        series: [{   name: 'Baftas',
                     data: [2,0,3,0,2,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1],
                     color:'#0043ff',
                 },{
	             name: 'Oscars',
                     data: [4,4,3,3,3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
                     color: '#ff9000',
                 },
                     

        ],
    });



});
