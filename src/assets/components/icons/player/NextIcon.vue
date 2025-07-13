<script setup>
    import { reactive } from 'vue';
    const svgNextIconData = reactive({ 
        xmlns: "http://www.w3.org/2000/svg", 
        viewBox: '0 -960 960 960',
        height: "24px",
        width: "24px",
        fill: "#000000",
    });
</script>

<template>
    <svg :="svgNextIconData">
        <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z"/>
    </svg>
</template>