<script setup>
    /* IMPORTS */
    import { setTheme, getSavedTheme } from '@/assets/utils/theme';
    import { ref, reactive } from 'vue';

    const instagramLink = reactive({ href:'https://www.instagram.com/nathanmontt/', target: '_blank' });
    const linkedinLink = reactive({ href:'https://www.linkedin.com/in/nathan-monteiro/', target: '_blank' });
    const githubLink = reactive({ href:'https://github.com/nathanmontt', target: '_blank' });
</script>

<template>
    <div class="container-socials">
        <ul>
            <li><a :="instagramLink">INS</a></li>
            <li><a :="linkedinLink">LIN</a></li>
            <li><a :="githubLink">GIT</a></li>
        </ul>
    </div>
</template>

<style lang="scss">
    @use '../../../assets/styles/abstracts/variables' as *;
    @use '../../../assets/styles/layout/header' as *;
    @use '../../../assets/styles/base/base' as *;
    @use '../../../assets/styles/theme/themes' as *;
    @use '../../../assets/styles/layout/footer' as *;
</style>