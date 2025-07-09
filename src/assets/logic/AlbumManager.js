// Gerencia o carregamento e a seleção do álbum da semana de forma automática.

class AlbumManager {
  /**
   * @param { string } databasePath O caminho para o arquivo JSON com a lista de álbuns.
   */
  constructor(databasePath) {
    this.databasePath = databasePath;
    this.albums = [];
    // IMPORTANTE: Defina a data de início do seu projeto aqui.
    // Deve ser uma segunda-feira para garantir consistência na troca semanal.
    // Formato: YYYY-MM-DD
    this.PROJECT_START_DATE = new Date('2025-07-09T19:30:00Z');
  }

  // Carrega a lista de álbuns do arquivo JSON.
  async loadDatabase() {
    const response = await fetch(this.databasePath);
    if (!response.ok) {
      throw new Error(`Falha ao carregar o banco de dados de álbuns: ${response.statusText}`);
    }
    this.albums = await response.json();
  }

  /**
   * Calcula a diferença em semanas entre a data atual e a data de início do projeto.
   * @returns {number} O índice da semana atual (0 para a primeira semana, 1 para a segunda, etc.).
   */
  _getCurrentWeekIndex() {
    const now = new Date();
    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
    const diffInMs = now.getTime() - this.PROJECT_START_DATE.getTime();
    return Math.floor(diffInMs / oneWeekInMs);
  }

  /**
   * Obtém o objeto de dados do álbum para a semana atual.
   * @returns {object | null} O objeto de dados do álbum ou null se não houver álbum para a semana.
   */
  getAlbumForCurrentWeek() {
    const weekIndex = this._getCurrentWeekIndex();
    return this.albums[weekIndex] || null;
  }
}

export default AlbumManager;