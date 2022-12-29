<template>
  <section id="Portofolio" class="pt-32 pb-32">
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl text-center mx-auto mb-16">
          <h2 class="text-lg font-semibold text-primary mb-2">Portofolio</h2>
          <h1 class="text-3xl font-bold text-dark mb-4">Web Developer</h1>
          <p class="text-secondary font-medium text-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            dignissimos voluptate iste eveniet. Alias aliquid consectetur, illum
            atque veniam provident.
          </p>
        </div>
      </div>
      <div
        class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto"
      >
        <div
          class="mb-12 p-4 md:w-1/3"
          v-for="portfolio in portfolios"
          :key="portfolio.id"
        >
          <div class="rounded-md shadow-md overflow-hidden">
            <img
              class="object-contain"
              :src="require(`../assets/img/${portfolio.img}`)"
              alt=""
            />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">
            {{ portfolio.name }}
          </h3>
          <p class="font-medium text-base text-secondary pb-4">
            {{ portfolio.description }}
          </p>
          <a
            type="button"
            :href="portfolio.url"
            target="_blank"
            class="text-white bg-primary hover:bg-slate-100 hover:text-primary font-bold rounded-lg text-sm px-3 py-2 mr-2 mb-2 focus:outline-none"
            >Open
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      portfolios: [
        {
          id: 1,
          name: "Landing Page",
          description:
            "Netflix, Inc. is an American subscription video on-demand over-the-top streaming service and production company based in Los Gatos, California.",
          img: "netflix.png",
          url: "https://landing-page-netflix-mulan.netlify.app/",
        },
        {
          id: 2,
          name: "Landing Page",
          description:
            "Garut is a district and town in West Java of Indonesia, and the former capital of Garut Regency. It is located about 75 km to the southeast of the major city of Bandung.",
          img: "garut.png",
          url: "https://landing-page-garut.netlify.app/",
        },
        {
          id: 3,
          name: "Catalog",
          description:
            "A Complete List Of Items, Typically One In Alphabetical Or Other Systematic Order.",
          img: "catalog.png",
          url: "https://catalog-ecommerce.netlify.app/",
        },
        {
          id: 4,
          name: "TODO Application",
          description: "To Do List Application",
          img: "todo.png",
          url: "https://todolist-app-vue.netlify.app/",
        },
        {
          id: 5,
          name: "Cashier Application",
          description: "Cashier Ppplication",
          img: "kasir.png",
          url: "https://kulineran-vue.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style></style>
