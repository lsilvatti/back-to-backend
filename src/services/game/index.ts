import type { GameRepository } from '@repositories/game/index.js';
import apiError from '@helpers/apiError.js';
import type { CreateGameDTO, Game, GameCurrentState } from '@app-types/game/index.js';
import type { GameService } from './types.js';

export default function gameService(repository: GameRepository): GameService {

    const getAllGames = async () => {
        const games = await repository.getAllGames();
        return games;
    };

    const addGame = async (game: CreateGameDTO) => {
        const gameObject = {
            id: crypto.randomUUID(),
            ...game,
        }

        return await repository.addGame(gameObject);        
    };

    const deleteGame = async (id: string) => {
        const deleted = await repository.deleteGame(id);

        if(!deleted) { 
            throw apiError('Jogo não encontrado', 404);
        }

        return deleted;
    };

    const findGames = async (parameters: Partial<Game>) => {
        const games = await repository.findGames(parameters);
        return games;
    };

    const changeGameStatus = async (id: string, status: GameCurrentState) => {
        const game = await repository.updateGame(id, { status });
        if (!game) {
            throw apiError('Jogo não encontrado', 404);
        }
        return game;
    };

    return ({
        getAllGames,
        addGame,
        deleteGame,
        findGames,
        changeGameStatus
    }); 
}