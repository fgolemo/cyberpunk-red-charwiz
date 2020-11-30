<template>
  <b-row class="border">
    <b-col>
      <h5>00 - Intro</h5>
      <div v-if="this.$store.state.activePage.intro">
        <p class="">Remember, choomba:</p>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <p class="lead">#1 STYLE OVER SUBSTANCE</p>
            <p class="lead">#2 ATTITUDE IS EVERYTHING</p>
            <p class="lead">#3 LIVE ON THE EDGE</p>
            <p class="lead">#4 BREAK THE RULES</p>
          </div>
        </div>
        <div class="text-right">
          <b-button squared variant="outline-secondary">Load Character</b-button>
          <b-button squared variant="primary" @click="next">Next</b-button>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Intro',
  // props: ["active"],
  methods: {
    next: function () {
      // this.$store.commit("next");
      this.$store.dispatch('next');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
