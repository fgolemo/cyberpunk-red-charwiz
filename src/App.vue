<template>
  <div id="app">
    <b-container class="root text-left">
      <b-row>
        <b-col>
          <h1 class="text-left">Cyberpunk Red Character Creator</h1>
        </b-col>
      </b-row>
      <Intro/>
      <Mode/>
      <Role/>
    </b-container>
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import Mode from "@/components/Mode";
import Role from "@/components/Role";

export default {
  name: 'App',
  components: {
    Intro,
    Mode,
    Role,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
