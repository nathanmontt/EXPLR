<script setup>
    import FolderIcon from '../icons/player/FolderIcon.vue';
    import ModalComponent from '../common/ModalComponent.vue';

</script>

<template>
    <div id="container-folder">
        <button @click="console.log('opa')">
            <FolderIcon />
        </button>
        <div id="modal"></div>
    </div>
</template>

<style scoped>
    button {
        background-color: transparent;
        border: none;
    }
</style>