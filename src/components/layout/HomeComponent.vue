<script setup>
    import FolderIcon from '../icons/player/FolderIcon.vue';
    import ModalComponent from '../common/ModalComponent.vue';
    import { onClickOutside } from '@vueuse/core';
    import { ref } from 'vue';

    const isModalOpen = ref(false);
    const modal = ref(null);

    onClickOutside(modal, function clickingOutise () {
        isModalOpen.value = false;
    })
</script>

<template>
    <div id="container-folder">
        <button class="btn-cta-folder" @click="isModalOpen = true">
            <FolderIcon />
        </button>
        
        <Teleport to="#modal" defer>
            <Transition name="modal">
                <div class="modal-bg" v-if="isModalOpen">
                    <div class="modal" ref="modal">
                        <button class="close-btn" @click="isModalOpen = false">X</button>
                        <div>Click outside this modal to close it!</div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style lang="scss">
    @use '../../assets/styles/abstracts/variables' as *;

    .btn-cta-folder {
        background-color: transparent;
        border: none;
    }
</style>