<script setup>
import { reactive } from 'vue';

    const propsColor = defineProps({
        fill: { type: String }
    });

    const svgData = reactive({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 -960 960 960' })
</script>

<template>
    <svg :="svgData" v-bind:fill="propsColor.fill">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
</template>

<style>
    svg { cursor: pointer; height: 2em; }
</style>