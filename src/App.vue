<template>
  <Navbar></Navbar>
  <Hero></Hero>
  <About></About>
  <Portfolio></Portfolio>
  <Conctact />
  <footer class="py-1 bottom-0 w-full text-center bg-primary text-tri">
    <h2>©Copyright 2022</h2>
  </footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Portfolio from "./components/Portfolio.vue";
import Conctact from "./components/Conctact.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    About,
    Portfolio,
    Conctact,
  },
};
</script>

<style></style>
