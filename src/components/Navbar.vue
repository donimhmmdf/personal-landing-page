<template>
  <header id="header">
    <div
      class="bg-tri bg-opacity-75 backdrop-blur-sm top-0 left-0 w-full flex items-center z-10 fixed"
    >
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="px-4">
            <a href="#home" class="font-bold text-lg text-primary block py-6"
              >Personal Landing Page
            </a>
          </div>
          <div class="flex items-center px-4">
            <button
              @click="handleToggle"
              id="hamburger"
              name="hamburger"
              type="button"
              class="block absolute right-4 lg:hidden"
              :class="{ hamburgerActive: isOpen }"
            >
              <span
                class="hamburger-line transtion duration-300 ease-in-out"
              ></span>
              <span
                class="hamburger-line transtion duration-300 ease-in-out"
              ></span>
              <span
                class="hamburger-line transtion duration-300 ease-in-out"
              ></span>
            </button>
            <nav
              :class="{ hidden: !isOpen }"
              class="absolute py-5 bg-tri bg-opacity-75 backdrop-blur-sm shadow-lg rounded-b-md max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none"
            >
              <ul class="block lg:flex">
                <li class="group" v-for="nav in navs" :key="nav.id">
                  <a
                    :href="`#${nav}`"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >{{ nav }}</a
                  >
                </li>
                <!-- <li class="group">
                  <a
                    href="#about"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >About</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#portfolio"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >Portofolio
                  </a>
                </li>
                <li class="group">
                  <a
                    href="#contact"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >Contact</a
                  >
                </li> -->
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navs: ["Home", "About", "Portofolio", "Contact"],
      isOpen: false,
      isActive: false,
      scrollPosition: null,
    };
  },
  name: "Navbar",
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style></style>
