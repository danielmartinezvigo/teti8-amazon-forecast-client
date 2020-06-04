<template>
  <div>
    <h1 class="title">Alcance</h1>
    <div class="content">
      <div class="field">
        <b-checkbox :value="true" size="" type="is-info">Listar Datasets</b-checkbox>
      </div>
      <div class="field">
        <b-checkbox :value="true" size="" type="is-info">Listar Datasets Groups</b-checkbox>
      </div>
      <div class="field">
        <b-checkbox :value="true" size="" type="is-info">Listar Predictors</b-checkbox>
      </div>
      <div class="field">
        <b-checkbox :value="true" size="" type="is-info">Listar Forecasts</b-checkbox>
      </div>
      <hr>
      <div class="field">
        <b-checkbox :value="true" size="" type="is-success">Forecast Query</b-checkbox>
        <br>
        <em>Seleccionar un atributo, un intervalo y graficar la predicción.</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
