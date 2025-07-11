<script setup>
    /* IMPORTS */
    import { setTheme, getSavedTheme } from '@/assets/utils/theme';
    import { ref, reactive } from 'vue';
</script>

<template>
    <div class="container-socials">
        <ul>
            <li><a href="#">INS</a></li>
            <li><a href="#">LIN</a></li>
            <li><a href="#">GIT</a></li>
        </ul>
    </div>
</template>

<style lang="scss">
    @use '../../../assets/styles/abstracts/variables' as *;
    @use '../../../assets/styles/layout/header' as *;
    @use '../../../assets/styles/base/base' as *;
    @use '../../../assets/styles/theme/themes' as *;
    @use '../../../assets/styles/layout/footer' as *;
</style>