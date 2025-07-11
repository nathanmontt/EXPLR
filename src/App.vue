<script setup>
  import ModalComponent from './assets/components/common/ModalComponent.vue';
  import FooterComponent from './assets/components/layout/FooterComponent.vue';
  import HeaderComponent from './assets/components/layout/HeaderComponent.vue';
  import HomeComponent from './assets/components/layout/HomeComponent.vue'; 
</script>

<template>
  <body>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <HomeComponent />

      <!-- <section>
        <ModalComponent />
      </section> -->
    </main>

    <div id="modal"></div>

    <footer>
      <FooterComponent />
    </footer>
  </body>
</template>