  google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Facultad',      10],
          ['Series de TV',     1],
          ['Vicio',  1],
          ['Dormir',    4],
          ['PC',10]
        ]);

        var options = {
       
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }