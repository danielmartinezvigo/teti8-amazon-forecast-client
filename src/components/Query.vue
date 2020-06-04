<template>
  <section>
    <div class="columns">
      <div class="column is-one-quarter">
        <b-field label="Select a date">
          <b-datepicker
            placeholder="Click to select..."
            v-model="dates"
            range>
          </b-datepicker>
        </b-field>
        <b-field label="Attribute Name *">
          <b-input v-model="AttributeName"></b-input>
        </b-field>
        <b-field label="Attribute Value *">
          <b-input v-model="AttributeValue"></b-input>
        </b-field>
        <b-button
          type="is-primary"
          style="margin-top: 1em"
          @click="apply"
          :disabled="!AttributeName || !AttributeValue || !dates || dates.length !== 2 || isLoading"
        >Apply</b-button>
      </div>
      <div class="column">
        <vue-apex-charts
          v-if="chart.series && chart.series.length > 0"
          type="line"
          height="400"
          :options="chart.options"
          :series="chart.series"
        ></vue-apex-charts>
      </div>
    </div>
  </section>
</template>

<script>
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7
import VueApexCharts from 'vue-apexcharts'

export default {
  props: {
    ForecastArn: {
      type: String,
    }
  },
  components: {
    VueApexCharts,
  },
  data() {
    return {
      AttributeName: 'item_id',
      AttributeValue: '',
      dates: [],
      isLoading: false,

      chart: {
        series: [],
        options: {
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            dashArray: [0, 0],
            width: [4, 4]
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              inverseColors: false,
              gradientToColors: ['#7367F0', '#FF9F43'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 0.85,
              opacityTo: 0.85,
              stops: [0, 100, 100, 100]
            }
          },
          // colors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
          xaxis: {
            type: 'date',
            categories: [],
          },
          markers: {
            size: 0,
            hover: {
              size: 5
            }
          },
          yaxis: {
            tickAmount: 5,
            labels: {
              style: {
                cssClass: 'text-grey fill-current'
              },
              formatter: function(val) {
                return val > 999 ? (val / 1000).toFixed(1) + 'k' : val
              }
            }
          },
          tooltip: {
            x: { show: false }
          }
        }
      }
    }
  },
  methods: {
    apply() {
      this.isLoading = true
      this.axios
        .post(window.backend + '/forecast/query', {
          ForecastArn: this.ForecastArn,
          AttributeName: this.AttributeName,
          AttributeValue: this.AttributeValue,
          StartDate: this.dates[0].toISOString(),
          EndDate: this.dates[1].toISOString(),
        })
        .then((response) => {
          this.chart.options.xaxis.categories = [];
          this.chart.series = [];
          const data = response.data.Forecast.Predictions
          Object.keys(data).forEach((key, index) => {
            const element = data[key];
            this.chart.series.push({
              name: key,
              data: [],
            });
            element.forEach((item) => {
              if (index === 0) {
                this.chart.options.xaxis.categories.push(item.Timestamp);
              }
              this.chart.series[this.chart.series.length - 1].data.push(item.Value)
            });
          });
        })
        .catch((err) => {
          this.$buefy.toast.open({
            duration: 5000,
            message: err && err.response && err.response.data && err.response.data.error ? err.response.data.error : `${err.name}: ${err.message}`,
            position: 'is-bottom',
            type: 'is-danger'
          })
        })
        .finally(() => {
          this.isLoading = false
        });
    }
  },
  mounted() {
    this.dates = [new Date(Date.now() - ONE_WEEK), new Date() ]
  }
}
</script>