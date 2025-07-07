<script setup>
  import ModalComponent from './components/common/ModalComponent.vue';
  import HeaderComponent from './components/layout/HeaderComponent.vue';
  import HomeComponent from './components/layout/HomeComponent.vue';
</script>

<template>
  <body>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <HomeComponent />

      <section>
        <ModalComponent />
      </section>
    </main>
  </body>
</template>