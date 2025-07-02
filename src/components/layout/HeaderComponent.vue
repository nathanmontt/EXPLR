<script setup>
    const msg = 'Hello World!';
</script>

<template>
    <p class="msg">{{ msg }}</p>
</template>

<style lang="scss">
@use '../../assets/styles/abstracts/variables' as *;
    p {
        font-size: 2em;
    }
</style>