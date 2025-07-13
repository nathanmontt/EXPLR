<script setup>
    import { ref, watch } from 'vue';
    import NextIcon from '../icons/player/NextIcon.vue';
    import PauseIcon from '../icons/player/PauseIcon.vue';
    import PrevIcon from '../icons/player/PrevIcon.vue';
    import ResumeIcon from '../icons/player/ResumeIcon.vue';

    import Song from '@/assets/logic/Song';

    const isPlaying = ref(false);
    const currentSongIndex = ref(0);
    const currentTime = ref(0);
    const duration = ref(0);

    const audio = ref(null);

    // Recebe album e musicas via props
    const props = defineProps({
        album: Object,
        default: () => ({songs: []})
    });

    defineExpose({
        currentSongIndex,
        handleResume
    })
    
    /* Essa feature verifica se houve mudança no quesito de música.
       Caso os valores sejam aqueles mesmo, no caso definidos acima, dentro do if
        começamos a mudá-los.
    */
    watch(currentSongIndex, () => {
        if (
            audio.value && 
            props.album && 
            props.album.songs && 
            props.album.songs.length
        ) {
            audio.value.src = props.album.songs[currentSongIndex.value].filePath;
            audio.value.currentTime = 0;

            // Sempre toca ao trocar de música
            audio.value.play();
            isPlaying.value = true;
        }
    });

    function formatTime (sec) {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);

        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    function onTimeUptade () { currentTime.value = audio.value.currentTime; }
    function onLoadedMetadata () { duration.value = audio.value.duration; }


    function handleResume () {
        isPlaying.value = true; 
        audio.value.play();
    }
    function handlePause () {
        isPlaying.value = false; 
        audio.value.pause();
    }
    function handleNext() {
        if (currentSongIndex.value < props.album.songs.length - 1) {
            currentSongIndex.value++;
            console.log(currentSongIndex.value);
        } else {
            currentSongIndex.value = 0; 
        }
    }
    function handlePrev() {
        if (currentSongIndex.value > 0) {
            currentSongIndex.value--;
            console.log(currentSongIndex.value);
        } else {
            currentSongIndex.value = props.album.songs.length - 1;
            console.log(currentSongIndex.value);
        }
    }

    function onSeek () {
        audio.value.currentTime = currentTime.value;
    }
</script>

<template>
    <div class="container-player" v-if="album && album.songs && album.songs.length">
        <audio
            ref="audio" 
            :src="album.songs[currentSongIndex].filePath"
            @timeupdate="onTimeUptade"
            @loadedmetadata="onLoadedMetadata"
            @ended="handleNext"
        ></audio>
        <div id="song-title">
            {{ album.songs[currentSongIndex].title }}
        </div>
        <div class="container-controls">
            <PrevIcon class="hover-up" @click="handlePrev" />
            <PauseIcon v-if="isPlaying" class="hover-up" @click="handlePause" />
            <ResumeIcon v-else class="hover-up" @click="handleResume" />
            <NextIcon class="hover-up" @click="handleNext" />
        </div>
        <div class="progress-bar">
            <span class="duration-time">{{ formatTime(currentTime) }}</span>
            <input
                type="range"
                min="0"
                :max="duration"
                step="1"
                v-model="currentTime"
                @input="audio.value.currentTime = currentTime"
                @change="onSeek"
                id="progress-bar-duration"
            />
            <span class="duration-time">{{ formatTime(duration) }}</span>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../styles/components/music-player' as *;
</style>