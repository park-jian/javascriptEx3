//https://www.chartjs.org/
//https://www.chartjs.org/docs/latest/configuration/interactions.html
var ctx = document.getElementById('myChart').getContext('2d');


var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
      datasets: [{
          label: '물섭취량/1일',
          data: [12, 19, 3, 5, 2, 3,7],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 119, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(250, 19, 64, 0.2)'
          ],
          borderWidth: 1
      },
      {
        label: '멍때리기/1일',
        data: [3, 2, 4, 6, 12, 5,5],
        backgroundColor: 'rgba(75, 192, 192, 1)',
		borderColor: 'rgba(75, 192, 192, 1)',
		fill: false,
        borderWidth: 1
    }
    
    ]
  },
  options: {
    onClick: (e) => {
        alert("안뇽!!");
    },
    responsive: false,    //원하는 크기 차트 생성가능
      scales: {
          y: {
              beginAtZero: true
          }
      },
      plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                color: 'rgb(255, 99, 132)',
                font: {
                    size: 10
                },
               
            }
        },
        title: {
            display: true,
            text: 'Jian Exercise days',
            padding: {
                top: 5,
                bottom: 5
            },
            align: 'center',
            color: 'skyblue'
        }
    },
    layout: {
      padding: 70
      
    }
    
  }
});
//https://ming9mon.tistory.com/109?category=841705
var ctx = document.getElementById('myChart2').getContext('2d');

const data = {
    labels: [
      '수면(12시~7시)',
      '아침(7시~8시)',
      '공부(8시~12시)',
      '점심(12시~1시)',
      '운동(1시~6시)',
      '저녁(6시~7시)',
      '휴식 및 놀기(7시~12시)'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [7, 1, 4, 1, 5, 1, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(220, 120, 186)',
        'rgb(154, 212, 0)',
        'rgb(45, 22, 81)',
        'rgb(0, 0, 200)'
      ],
      hoverOffset: 4
    }]
  };

let datass = {
  type: 'doughnut',
  data: data,
      plugins: {
        
        title: {
            display: true,
            text: 'schedule table',
            padding: {
                top: 5,
                bottom: 5
            },
            align: 'center',
            color: 'skyblue'
        }
    },
    layout: {
      padding: 70
      
    },
    options:{
        responsive: false    //원하는 크기 차트 생성가능
    }
    
  
}
let myChart2 = new Chart(ctx, datass);

//데이터 추가
document.getElementById('addData').onclick = function(){
	alert("hi")	;
    //라벨추가
    myChart2.data.labels.push('data');
    datass.data.datasets[0].data.push(17);
    console.log("ho"+ myChart2.data.labels);
    console.log("ho1"+ datass.data.datasets[0].data);
    
    //데이터셋 수 만큼 반복
    var dataset = myChart2.data.datasets;
    for(var i=0; i<dataset.length; i++){
        //데이터셋의 데이터 추가
        dataset[i].data.push(20);
    }
    myChart.update();	//차트 업데이트
}