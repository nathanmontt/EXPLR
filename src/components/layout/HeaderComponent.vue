<script setup>
    /* IMPORTS */
    import MenuIcon from '../icons/common/MenuIcon.vue';
    import DarkModeIcon from '../icons/modes/DarkModeIcon.vue';
    import LightModeIcon from '../icons/modes/LightModeIcon.vue';
    import { ref, reactive } from 'vue';
    
    
    const homePage = reactive({ href:'../../App.vue', id: 'menu' });
    
    const menuVisible = ref(false);
    function toggleMenu () {
        menuVisible.value = !menuVisible.value
    }
</script>

<template>
    <nav>
        <div class="options-top">
            <a :="homePage">EXPLR</a>
            <MenuIcon v-on:click="toggleMenu" />
            <ul class="menu-options" v-bind:class="{
                visible: menuVisible
            }">
                <li class="options"><a href="#">ABOUT</a></li>
                <li class="options"><a href="#">CONTACT</a></li>
                <li class="options">
                    <span id="icons">
                        <button class="btn-cta"><DarkModeIcon/></button>
                        <button class="btn-cta"><LightModeIcon/></button>
                    </span>
                </li>
            </ul>
        </div>

    </nav>
</template>

<style lang="scss">
    @use '../../assets/styles/abstracts/variables' as *;
    @use '../../assets/styles/layout/header' as *;
    @use '../../assets/styles/base/base' as *;
</style>