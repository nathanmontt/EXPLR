<script setup>
    const homePage = '../../App.vue';

    import BackArrowIcon from '../icons/common/BackArrowIcon.vue';
    import CloseIcon from '../icons/common/CloseIcon.vue';
    import MenuIcon from '../icons/common/MenuIcon.vue';
    import MaxVolumeIcon from '../icons/player/MaxVolumeIcon.vue';
    import MedVolumeIcon from '../icons/player/MedVolumeIcon.vue';
    import MuteVolumeIcon from '../icons/player/MuteVolumeIcon.vue';
</script>

<template>
    <a :href="homePage">EXPLR</a>
    <BackArrowIcon/>
    <MenuIcon/>
    <MaxVolumeIcon/>
    <MedVolumeIcon/>
    <MuteVolumeIcon/>
    <CloseIcon/>
</template>

<style lang="scss">
    @use '../../assets/styles/abstracts/variables' as *;
</style>