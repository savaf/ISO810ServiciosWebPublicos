<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>

      <canvas id="myChart"></canvas>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  mounted () {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    const config = {
      type: 'line',
      data,
      options: {}
    };

    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  },
  methods: {
    fetchRequestData () {
      // axios.get()
    }
  }
}
</script>

