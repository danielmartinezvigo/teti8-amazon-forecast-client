<template>
  <b-navbar class="is-black">
    <template slot="start">
      <b-navbar-item href="#/">
        Inicio
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-dropdown label="Recursos">
        <b-navbar-item href="#/datasets">
          Datasets
        </b-navbar-item>
        <b-navbar-item href="#/datasets-groups">
          Datasets Groups
        </b-navbar-item>
        <b-navbar-item href="#/predictors">
          Predictors
        </b-navbar-item>
        <b-navbar-item href="#/forecasts">
          Forecasts
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>
