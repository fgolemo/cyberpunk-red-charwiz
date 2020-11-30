<template>
  <b-row class="border">
    <b-col>
      <h5>02 - Role</h5>
      <div v-if="this.$store.state.activePage.role">


        <b-card :class="activeCard('Rockerboy')" @click="activate('Rockerboy')">
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="10">
              <b-card-body title="Rockerboy">
                <b-card-text>Lil summary sentence</b-card-text>
                <b-card-text><b>Role Ability:</b> Bla</b-card-text>
                <b-card-text v-if="this.$store.state.pc.role === 'Rockerboy'">
                  Long description of the class... ladeedadeeda <br>ladeeda<br>deedeedum
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card :class="activeCard('Nomad')" @click="activate('Nomad')">
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="10">
              <b-card-body title="Nomad">
                <b-card-text>Lil summary sentence</b-card-text>
                <b-card-text><b>Role Ability:</b> Bla</b-card-text>
                <b-card-text v-if="this.$store.state.pc.role === 'Nomad'">
                  Long description of the class... ladeedadeeda <br>ladeeda<br>deedeedum
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card :class="activeCard('Fixer')" @click="activate('Fixer')">
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="10">
              <b-card-body title="Fixer">
                <b-card-text>Lil summary sentence</b-card-text>
                <b-card-text><b>Role Ability:</b> Bla</b-card-text>
                <b-card-text v-if="this.$store.state.pc.role === 'Fixer'">
                  Long description of the class... ladeedadeeda <br>ladeeda<br>deedeedum
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <div class="float-left">
          <b-button squared variant="secondary" @click="prev">Previous</b-button>
        </div>
<!--        <div class="float-right">-->
<!--          <b-button squared variant="primary" @click="next">Next</b-button>-->
<!--        </div>-->
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Role',
  // data: function () {
  //   return {
  //     selected: null
  //   }
  // },
  methods: {
    prev: function () {
      this.$store.dispatch('prev');
    },
    next: function () {
      if (this.$store.state.pc.role !== null) {
        this.$store.dispatch('next');
      } else {
        //TODO warning popup
      }
    },
    activate: function (role) {
      this.$store.commit("roleChange", role);
    },
    activeCard: function (role) {
      return this.$store.state.pc.role === role ? ["active", "bg-primary", "text-light"] : ''
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active .card-title::after {
  content: " ❮";
}
.card {
  cursor: pointer;
}
</style>
