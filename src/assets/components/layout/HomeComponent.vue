<script setup>
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
            <!-- Caso o álbum ainda não tenha sido revelado, mostrar o ícone da pasta -->
            <FolderIcon v-if="!isAlbumRevealed" />
            <!-- Caso contrário, mostrar a capa -->
            <img v-else :src="currentAlbum.coverArtPath" :alt="`Capa do álbum ${currentAlbum.title}`" class="folder-cover-art" />
        </button>
        <div v-else>
            <p>Nenhum álbum disponível esta semana. Volte em breve!</p>
        </div>
        
        <Teleport to="#modal" defer>
            <Transition name="modal">
                <div class="modal-bg" v-if="isModalOpen && currentAlbum">
                    <div class="modal" ref="modal">
                        <button class="back-btn" @click="isModalOpen = false">
                            <BackArrowIcon />
                        </button>

                        <!-- Conteúdo dinâmico do álbum dentro do modal -->
                        <div class="album-content">
                            <img :src="currentAlbum.coverArtPath" :alt="`Capa do álbum ${currentAlbum.title}`" class="modal-cover-art">
                            <h2 class="album-title">{{ currentAlbum.title }}</h2>
                            <h3 class="album-artist">{{ currentAlbum.artist }} - {{ currentAlbum.year }}</h3>
                            <ul class="song-list">
                                <li v-for="song in currentAlbum.songs" :key="song.filePath" class="song-item">
                                    {{ song.title }}
                                </li>
                            </ul>
                            <a :href="currentAlbum.downloadPath" download class="download-link">Baixar Álbum</a>
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

    .btn-cta-folder {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        // line-height: 0;
    }

    .folder-cover-art {
        width: $size-master-blaster;
        height: $size-master-blaster;
        object-fit: cover;
        border-radius: 5px;
        transition: transform $time-minimal ease;

        &:hover {
            transform: scale(1.05);
        }
    }

    .modal-cover-art {
        padding: 0;
        margin: 0;
        max-width: 100%;
        aspect-ratio: 2 / 1;
        object-fit: cover;
        
        @media screen and (min-width: 768px) {
            aspect-ratio: 5 / 1;
        }
    }
</style>