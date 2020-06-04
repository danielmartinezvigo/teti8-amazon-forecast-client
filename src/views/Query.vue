<template>
  <div>
    <h1 class="title">Query</h1>
    <p class="subtitle">{{ ForecastArn }}</p>
    <Query :ForecastArn="ForecastArn" />
  </div>
</template>

<script>
import Query from '../components/Query'

export default {
  components: {
    Query
  },
  data() {
    return {
      ForecastArn: '',
    }
  },
  mounted() {
    this.ForecastArn = this.$route.query.ForecastArn
  }
}
</script>
