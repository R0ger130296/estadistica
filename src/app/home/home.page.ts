import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() { }
  ngOnInit() {
  }
  calcularMedia() {
    var temp = parseFloat(prompt("Cuantos dígitos desea calcular?"));
    var numero = [];
    var suma = 0;

    for (let i = 0; i < temp; i++) {
      numero[i] = Number(prompt("Ingrese un número"));
      suma = suma + numero[i];

      var speedCanvas = document.getElementById("speedChart");

      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;

      var speedData = {
        labels: numero,
        datasets: [{
          label: "Gráfica de la Media",
          data: [suma / temp],
          backgroundColor: [
            'rgba(210, 99, 132, 0.6)',
          ],
          borderColor: [
            'rgba(90, 99, 132, 1)',
          ],
        }]
      };

      var chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'bar',
        data: speedData,
        options: chartOptions
      });
    }

    document.getElementById('respuesta').innerHTML = "Media = " + suma / temp;
    document.getElementById('array').innerHTML = "Valores: " + numero.sort((num1, num2) => num1 - num2);;
  }





  calcularMediana() {
    var temp = parseFloat(prompt("Cuantos dígitos desea calcular?"));
    var numero = [];
    var v_sort = [];
    var temp1 = [];
    var temp2: any;
    var temp3: any;
    for (let i = 0; i < temp; i++) {
      numero[i] = Number(prompt("Ingrese un número"));
    }
    v_sort = numero.sort((num1, num2) => num1 - num2);

    if (v_sort.length % 2 == 0) {
      let suma = 0
      temp1 = v_sort.slice((v_sort.length / 2) - 1, (v_sort.length / 2) + 1)
      temp2 = temp1.map(function (params) {
        return params / 2
      })
      temp3 = temp2.forEach(function (params) {
        suma += params
      })
      document.getElementById('respuesta').innerHTML = "Mediana = " + suma;
    } else {
      let suma = 0
      temp1 = v_sort.slice((v_sort.length / 2), (v_sort.length / 2) + 1)
      temp2 = temp1.forEach(function (params) {
        suma = params
      })

      var speedCanvas = document.getElementById("speedChart");

      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;

      var speedData = {
        labels: numero,
        datasets: [{
          label: "Gráfica de la Mediana",
          data: [suma],
          backgroundColor: [
            'rgba(150, 99, 132, 0.6)',
          ],
          borderColor: [
            'rgba(0, 99, 132, 1)',
          ],
        }]
      };

      var chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 50,
            fontColor: 'orange'
          }
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'horizontalBar',
        data: speedData,
        options: chartOptions
      });


      document.getElementById('respuesta').innerHTML = "Mediana = " + suma;
    }
    document.getElementById('array').innerHTML = "Valores: " + v_sort;

  }





  calcularModa() {
    var temp = parseFloat(prompt("Cuantos dígitos desea calcular?"));
    var arreglo = [];

    for (let i = 0; i < temp; i++) {
      arreglo[i] = Number(prompt("Ingrese un número"));
    }

    var buscarMayor = (counter) => Math.max.apply(null, counter)
    var ordenarAsc = (a, b) => a - b
    var corencias = (name) => {
      return { count: 1, name: name }
    }
    var contar_coerencia = (a, b) => {
      a[b.name] = (a[b.name] || 0) + b.count
      return a
    }
    var mapearParaArray = (calculo) => {
      var counter = []

      Object.keys(calculo).filter((a) => {
        counter.push(calculo[a])
      })
      return counter
    }

    var filtrarModa = (calculo, MAX) => Object.keys(calculo).filter((a) => {
      return (calculo[a] === MAX && calculo[a] > 1) ? calculo[a] : null
    })

    function moda(arr) {
      var calculo = arr.sort(ordenarAsc).map(corencias).reduce(contar_coerencia, {})
      var filtrada = filtrarModa(calculo, buscarMayor(mapearParaArray(calculo)))
      return filtrada.length ? filtrada : 0
    }

    var speedCanvas = document.getElementById("speedChart");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var speedData = {
      labels: arreglo,
      datasets: [{
        label: "Gráfica de la Moda",
        data: [moda(arreglo)],
        backgroundColor: [
          'rgba(186, 242, 46)',
        ],
        borderColor: [
          'rgba(90, 99, 132, 1)',
        ],
      }]
    };

    var chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'red'
        }
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'bar',
      data: speedData,
      options: chartOptions
    });

    document.getElementById('respuesta').innerHTML = "Moda = " + moda(arreglo)
    document.getElementById('array').innerHTML = "Valores: " + arreglo
  }




  calcularFrecuenciaAbsoluta() {
    var temp = parseFloat(prompt("Cuantos dígitos desea calcular?"))
    var arreglo = []
    var frecuenciaAbsoluta = {}

    for (let i = 0; i < temp; i++) {
      arreglo[i] = Number(prompt("Ingrese un número"))
    }

    for (let i = 0; i < arreglo.length; i++) {
      var num = arreglo[i]
      if (frecuenciaAbsoluta[num]) {
        frecuenciaAbsoluta[num]++
      } else {
        frecuenciaAbsoluta[num] = 1
      }
    }


    var speedCanvas = document.getElementById("speedChart");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var speedData = {
      labels: arreglo,
      datasets: [{
        label: "Gráfica de la Frecuencia Absoluta",
        data: [arreglo],
        backgroundColor: [
          'rgba(46, 232, 242)',
        ],
        borderColor: [
          'rgba(46, 232, 242)',
        ],
      }]
    };

    var chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'green'
        }
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'bar',
      data: speedData,
      options: chartOptions
    });

    document.getElementById('respuesta').innerHTML = "Frecuencia Absoluta = " + JSON.stringify(frecuenciaAbsoluta)
    document.getElementById('array').innerHTML = "Valores: " + arreglo.sort((num1, num2) => num1 - num2)
  }
}
