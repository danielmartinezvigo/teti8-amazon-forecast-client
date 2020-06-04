<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-5">
            TETI8 - Amazon Forecast
          </h1>
          <p class="subtitle is-6">
            Prueba de concepto.
          </p>
        </div>
      </div>
    </section>
    <Navbar />
    <section class="section is-fullheight">
      <div class="container is-fullheight">
        <router-view></router-view>
      </div>
    </section>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from './components/_Navbar'
import Footer from './components/_Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.custom-small {
  font-size: 12px;
}
</style>