import type { Game } from "@app-types/game/index.js";

export interface GameRepository {
    getAllGames: () => Promise<Game[]>;
    addGame: (game: Game) => Promise<Game>;
    updateGame: (id: string, updatedFields: Partial<Game>) => Promise<Game | null>;
    deleteGame: (id: string) => Promise<boolean>;
    findGames: (parameters: Partial<Game>) => Promise<Game[]>;
}