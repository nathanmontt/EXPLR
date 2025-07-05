<script setup>
    /* IMPORTS */
    import MenuIcon from '../icons/common/MenuIcon.vue';
    import DarkModeIcon from '../icons/modes/DarkModeIcon.vue';
    import LightModeIcon from '../icons/modes/LightModeIcon.vue';
    import { setTheme, getSavedTheme } from '@/utils/theme';
    import { ref, reactive } from 'vue';
    import { iconColors } from '@/utils/iconColors';
    
    // Link para a homepage
    const homePage = reactive({ href:'../../App.vue', id: 'menu' });
    
    const theme = ref(getSavedTheme());
    function getIconColor () { return iconColors[theme.value] || '#202122'; }

    // Toggle the menu opacity
    const menuVisible = ref(false);
    function toggleMenu () {
        menuVisible.value = !menuVisible.value
    }

    // Modes
    function lightModeFunction () { setTheme('light-mode'); theme.value = 'light-mode'; }
    function darkModeFunction () { setTheme('dark-mode'); theme.value = 'dark-mode'; }
</script>

<template>
    <nav>
        <div class="options-top">
            <a :="homePage">EXPLR</a>
            <div class="menu-dropdown-holder">
                <MenuIcon :fill="getIconColor()" v-on:click="toggleMenu" />
                <ul class="menu-options" v-bind:class="{ visible: menuVisible }">
                    <li class="options"><a href="#">ABOUT</a></li>
                    <li class="options"><a href="#">CONTACT</a></li>
                    <li class="options">
                        <span id="icons">
                            <button class="btn-cta" v-on:click="darkModeFunction"><DarkModeIcon :fill="getIconColor()"/></button>
                            <button class="btn-cta" v-on:click="lightModeFunction"><LightModeIcon :fill="getIconColor()"/></button>
                        </span>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<style lang="scss">
    @use '../../assets/styles/abstracts/variables' as *;
    @use '../../assets/styles/layout/header' as *;
    @use '../../assets/styles/base/base' as *;
    @use '../../assets/styles/theme/themes' as *;
</style>