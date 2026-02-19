import { type Game } from '@app-types/game/index.js';
import { type GameRepository } from './types.js';

const games: Game[] = [];

export default function GameRepository(): GameRepository {
    
    const getAllGames = async (): Promise<Game[]> => {
        return [...games];
    };

    const addGame = async (game: Game): Promise<Game> => {
        games.push(game);
        return game;
    }

    const updateGame = async (id: string, updatedFields: Partial<Game>): Promise<Game | null> => {
        const game = games.find((game) => game.id === id);
        
        if (game) {
            Object.assign(game, updatedFields);
            return game;
        }
        return null;
    }

    const deleteGame = async (id: string): Promise<boolean> => {
        const index = games.findIndex((game) => game.id === id);
        if (index !== -1) {
            games.splice(index, 1);
            return true;
        }
        return false;
    }

    const findGames = async (parameters: Partial<Game>): Promise<Game[]> => {
        return games.filter((game) => {
            return Object.entries(parameters).every(([key, value]) => {
                return game[key as keyof Game] === value;
            });
        });
    };

    return ({
        getAllGames,
        addGame,
        updateGame,
        deleteGame,
        findGames,
    });
}