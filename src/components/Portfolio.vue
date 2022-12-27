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
        <!-- <div class="mb-12 p-4 md:w-1/3">
          <div class="rounded-md shadow-md overflow-hidden">
            <img
              class="object-contain"
              src="https://i5.walmartimages.com/asr/c5b61db6-0f39-4058-8485-56f7079d20b7.9d2991522f987856614699bab25879eb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              width="w-full"
              alt=""
            />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">
            Tyler, the Creator Call Me If You Get Lost
          </h3>
          <p class="font-medium text-base text-secondary pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum
            animi tempora.
          </p>
          <a
            type="button"
            class="text-white bg-igor hover:bg-slate-100 hover:text-igor font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Listen
          </a>
        </div> -->
        <!-- <div class="mb-12 p-4 md:w-1/3">
          <div class="rounded-md shadow-md overflow-hidden">
            <img
              src="https://m.media-amazon.com/images/I/71H4GD0XjDL._SL1200_.jpg"
              width="w-full"
              alt=""
            />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">
            Tyler, the Creator Wolf
          </h3>
          <p class="font-medium text-base text-secondary pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum
            animi tempora.
          </p>
          <a
            type="button"
            class="text-white bg-igor hover:bg-slate-100 hover:text-igor font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Listen
          </a>
        </div> -->
        <!-- <div class="mb-12 p-4 md:w-1/3">
          <div class="rounded-md shadow-md overflow-hidden">
            <img
              src="https://images.tokopedia.net/img/cache/700/product-1/2018/2/8/14468602/14468602_26812518-0823-47ae-b6a9-e59f7856681d_1500_1500.jpg"
              width="w-full"
              alt=""
            />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">
            Tyler, the Creator Flower Boy
          </h3>
          <p class="font-medium text-base text-secondary pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum
            animi tempora.
          </p>
          <a
            type="button"
            class="text-white bg-igor hover:bg-slate-100 hover:text-igor font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Listen
          </a>
        </div> -->
        <!-- <div class="mb-12 p-4 md:w-1/3">
          <div class="rounded-md shadow-md overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/65/13/3b/65133bfc57da781d0d36fd59c20f080b.jpg"
              width="w-full"
              alt=""
            />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">
            Tyler, the Creator Goblin
          </h3>
          <p class="font-medium text-base text-secondary pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum
            animi tempora.
          </p>
          <a
            type="button"
            class="text-white bg-igor hover:bg-slate-100 hover:text-igor font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Listen
          </a>
        </div> -->
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
      ],
    };
  },
};
</script>

<style></style>
