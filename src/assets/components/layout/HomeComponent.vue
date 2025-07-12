<script setup>
    import { setTheme, getSavedTheme } from '@/assets/utils/theme';
    import FolderIcon from '../icons/player/FolderIcon.vue';
    import { onClickOutside } from '@vueuse/core';
    import { ref, onMounted } from 'vue';
    import BackArrowIcon from '../icons/common/BackArrowIcon.vue';

    import AlbumManager from '@/assets/logic/AlbumManager';
    import Album from '@/assets/logic/Album';

    const isModalOpen = ref(false);
    const modal = ref(null);
    
    // Lógica do álbum
    const isLoading = ref(true);
    const currentAlbum = ref(null);
    const isAlbumRevealed = ref(false); // Controla se a capa já foi revelada

    onMounted(async () => {
        try {
            const manager = new AlbumManager('/data/albums-database.json');
            await manager.loadDatabase();
            const albumData = manager.getAlbumForCurrentWeek();

            if (albumData) {
                currentAlbum.value = new Album(albumData);

                // Verifica no localStorage se este álbum específico já foi revelado
                const savedRevealedAlbumTitle = localStorage.getItem('revealedAlbumTitle');
                if (savedRevealedAlbumTitle === currentAlbum.value.title) {
                    isAlbumRevealed.value = true;
                }
            }
        } catch (error) {
            console.error("Falha ao carregar o álbum da semana:", error);
        } finally {
            isLoading.value = false;
        }
    });

    function openAlbumAndModal() {
        isModalOpen.value = true;
        isAlbumRevealed.value = true;
        // Salva o título do álbum revelado no localStorage para persistência
        if (currentAlbum.value) {
            localStorage.setItem('revealedAlbumTitle', currentAlbum.value.title);
        }
    }

    onClickOutside(modal, function clickingOutise () {
        isModalOpen.value = false;
    })
</script>

<template>
    <div id="container-folder">
        <div v-if="isLoading">Carregando...</div>

        <button class="btn-cta-folder" @click="openAlbumAndModal" v-else-if="currentAlbum">
            <FolderIcon v-if="!isAlbumRevealed" />
            <img
                :src="currentAlbum.coverArtPath"
                :alt="`Capa do álbum ${currentAlbum.title}`" class="folder-cover-art"
            />
        </button>
        <div v-else>
            <p id="no-album">Nenhum álbum disponível esta semana. Volte em breve!</p>
        </div>
        
        <Teleport to="#modal" defer>
            <Transition name="modal">
                <div class="modal-bg" v-if="isModalOpen && currentAlbum">
                    <div class="modal" ref="modal">
                        <button class="back-btn" @click="isModalOpen = false">
                            <BackArrowIcon />
                        </button>

                        <!-- Conteúdo dinâmico do álbum dentro do modal -->
                        <div id="album-content">
                            <img
                                :src="currentAlbum.personaArtPath" 
                                :alt="`Artista do álbum ${currentAlbum.title}`" class="persona-art" 
                            />
                            
                            <div class="container-album-info">
                                <div id="album-info">
                                    <h2 class="album-title">{{ currentAlbum.title }}</h2>
                                    <h3 class="album-persona">{{ currentAlbum.artist }} ({{ currentAlbum.year }})</h3>
                                </div>
                                
                                <div class="grid">
                                    <ul id="song-list">
                                        <li v-for="song in currentAlbum.songs" :key="song.filePath" class="song-item"> {{ song.title }} </li>
                                    </ul>
                                    <div id="discography">
                                        <h2 class="album-title">{{ currentAlbum.artist }}</h2>
                                        <p>{{ currentAlbum.artistDiscography }}</p>
                                    </div>
                                </div>

                                <a :href="currentAlbum.downloadPath" download id="download-link">Baixar Álbum</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style lang="scss">
    @use '../../../assets/styles/components/modal' as *;
    @use '../../../assets/styles/abstracts/variables' as *;
    @use '../../styles/pages/home' as *;
</style>