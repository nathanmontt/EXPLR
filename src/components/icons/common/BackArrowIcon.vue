<script setup>
    const propsColor = defineProps({
        fill: {
            type: String
        }
    });
</script>

<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960" 
        width="24px" 
        v-bind:fill="propsColor.fill">
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
    </svg>
</template>

<style scoped>
    svg { 
        cursor: pointer;
        height: 2em;
    }
</style>