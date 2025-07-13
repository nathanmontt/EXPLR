<script setup>
    import { reactive } from 'vue';
    const svgPrevIconData = reactive({ 
        xmlns: "http://www.w3.org/2000/svg", 
        viewBox: '0 -960 960 960',
        height: "24px",
        width: "24px",
        fill: "#000000",
    });
</script>

<template>
    <svg :="svgPrevIconData">
        <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z"/>
    </svg>
</template>