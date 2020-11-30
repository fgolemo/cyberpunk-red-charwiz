<template>
  <b-row class="border">
    <b-col>
      <h5>01 - Mode</h5>
      <div v-if="this.$store.state.activePage.mode">
        <div>
          <p>
            How do you want to create your character?
          </p>
        </div>
        <div>
          <b-card-group deck>
            <b-card title="Streetrat" img-src="https://picsum.photos/200/200/?image=41" img-alt="Image" img-top
                    :class="activeSR" @click="activate(0)">
              <b-card-text>
                Fast, easy, great for new Cyberpunks.<br>Main STATs are optimal, skills are fixed. Full choice over
                lifepath.
              </b-card-text>
              <!--              <template #footer>-->
              <!--                <small class="text-muted">Last updated 3 mins ago</small>-->
              <!--              </template>-->
            </b-card>

            <b-card title="Edgerunner" img-src="https://picsum.photos/200/200/?image=41" img-alt="Image" img-top
                    :class="activeED" @click="activate(1)">
              <b-card-text>
                Medium effort, more flexible.<br>Roll STATs individually, assign points to preselected skills.
              </b-card-text>
            </b-card>

            <b-card title="Complete Package" img-src="https://picsum.photos/200/200/?image=41" img-alt="Image" img-top class="disabled text-muted">
              <b-card-text>
                Maximum effort, full control.<br>Everything is point-buy. Can make or break your character.
                (Currently not available. TBD later)
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>

        <div>
          <p>
            <b>STAT</b> - One of your character's innate statistics (like INTelligence or DEXterity)<br>
            <b>Skill</b> - One of the many things your character has trained (like First Aid or Lip Reading)<br>
          </p>
        </div>

        <div class="float-left">
          <b-button squared variant="secondary" @click="prev">Previous</b-button>
        </div>
        <div class="float-right">
          <b-button squared variant="primary" @click="next">Next</b-button>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Mode',
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
      if (this.$store.state.mode !== null) {
        this.$store.dispatch('next');
      } else {
        //TODO warning popup
      }
    },
    activate: function (mode) {
      this.$store.commit("modeChange", mode);
    }
  },
  computed: {
    activeSR: function () {
      return this.$store.state.mode === 0 ? ["active", "bg-primary", "text-light"] : ''
    },
    activeED: function () {
      return this.$store.state.mode === 1 ? ["active", "bg-primary", "text-light"] : ''
    }
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
.card.disabled {
  cursor: default;
}
</style>
