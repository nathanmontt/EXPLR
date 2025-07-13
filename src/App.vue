<script setup>
  import FooterComponent from './assets/components/layout/FooterComponent.vue';
  import HeaderComponent from './assets/components/layout/HeaderComponent.vue';
  import HomeComponent from './assets/components/layout/HomeComponent.vue'; 
  import MusicPlayerComponent from './assets/components/layout/MusicPlayerComponent.vue';
</script>

<template>
  <body>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <HomeComponent />
    </main>
    
    <!-- <div id="modal"></div> -->

    <section>
      <MusicPlayerComponent />
    </section>

    <footer>
      <FooterComponent />
    </footer>
  </body>
</template>