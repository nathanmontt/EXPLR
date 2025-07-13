<script setup>
    import { reactive } from 'vue';
    const propsColor = defineProps({
        fill: { type: String }
    });

    const svgBackArrowIconData = reactive({ 
        xmlns: "http://www.w3.org/2000/svg", 
        viewBox: '0 -960 960 960',
        height: "24px",
        width: "24px",
    });
</script>

<template>
    <svg :="svgBackArrowIconData" v-bind:fill="propsColor.fill">
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
    </svg>
</template>

<style scoped>
    svg { cursor: pointer; height: 2em; }
</style>