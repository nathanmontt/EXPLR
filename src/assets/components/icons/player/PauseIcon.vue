<script setup>
    import { reactive } from 'vue';
    const svgPauseIconData = reactive({ 
        xmlns: "http://www.w3.org/2000/svg", 
        viewBox: '0 -960 960 960',
        height: "24px",
        width: "24px",
        fill: "#000000",
    });
</script>

<template>
    <svg :="svgPauseIconData">
        <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>
    </svg>
</template>