<script setup>
    import { ref } from 'vue';
    import NextIcon from '../icons/player/NextIcon.vue';
    import PauseIcon from '../icons/player/PauseIcon.vue';
    import PrevIcon from '../icons/player/PrevIcon.vue';
    import ResumeIcon from '../icons/player/ResumeIcon.vue';

    const isPlaying = ref(false);

    function handleResume () { isPlaying.value = true; }
    function handlePause () { isPlaying.value = false; }
</script>

<template>
    <div class="container-player">
        <div class="container-controls">
            <PrevIcon class="hover-up" />
            <PauseIcon v-if="isPlaying" class="hover-up" @click="handlePause" />
            <ResumeIcon v-else class="hover-up" @click="handleResume" />
            <NextIcon class="hover-up" />
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../styles/components/music-player' as *;
</style>