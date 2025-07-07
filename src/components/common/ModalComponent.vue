<script setup>
    /* IMPORTS */
    import { ref, reactive } from 'vue';
    import HomeComponent from '../layout/HomeComponent.vue';
</script>

<template>
    <Teleport to="#modal" defer>
        <div class="modal-bg">
            <div class="modal">
                Click outside this modal to close it!
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss">
    @use '../../assets/styles/abstracts/variables' as *;
    @use '../../assets/styles/layout/header' as *;
    @use '../../assets/styles/base/base' as *;
    @use '../../assets/styles/theme/themes' as *;
</style>