import type { CreateGameDTO, Game, GameCurrentState } from "@app-types/game/index.js";

export interface GameService {
    getAllGames: () => Promise<Game[]>;
    addGame: (game: CreateGameDTO) => Promise<Game>;
    deleteGame: (id: string) => Promise<boolean>;
    findGames: (parameters: Partial<Game>) => Promise<Game[]>;
    changeGameStatus: (id: string, status: GameCurrentState) => Promise<Game | null>;
}
