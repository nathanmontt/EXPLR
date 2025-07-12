import Song from './Song.js';

class Album {
  /**
   * @param { object } albumData Dados do álbum, geralmente vindos de um JSON.
   */
  constructor(albumData) {
    this.title = albumData.title;
    this.artist = albumData.artist;
    this.year = albumData.year;
    this.coverArtPath = albumData.coverArtPath;
    this.personaArtPath = albumData.personaArtPath;
    this.downloadPath = albumData.downloadPath;
    this.artistDiscography = albumData.artistDiscography;

    // Cria instâncias da classe Song para cada música
    this.songs = albumData.songs.map((songInfo) => new Song(songInfo.title, songInfo.filePath));
  }
}

export default Album;