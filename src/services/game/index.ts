import { type IGameRepository} from '@repositories/game/index.js';
import type { CreateGameDTO, Game, GameCurrentState } from 'src/types/index.js';

export interface IGameService {
    getAllGames: () => Promise<Game[]>;
    addGame: (game: CreateGameDTO) => Promise<Game>;
    deleteGame: (id: string) => Promise<boolean>;
    findGames: (parameters: Partial<Game>) => Promise<Game[]>;
    changeGameStatus: (id: string, status: GameCurrentState) => Promise<Game | null>;
}

export default function gameService(repository: IGameRepository): IGameService {

    const getAllGames = async () => {
        return await repository.getAllGames();
    };

    const addGame = async (game: CreateGameDTO) => {
        const gameObject = {
            id: crypto.randomUUID(),
            ...game,
        }

        return await repository.addGame(gameObject);        
    };

    const deleteGame = async (id: string) => {
        return await repository.deleteGame(id);
    };

    const findGames = async (parameters: Partial<Game>) => {
        return await repository.findGames(parameters);
    };

    const changeGameStatus = async (id: string, status: GameCurrentState) => {
        return await repository.updateGame(id, { status });
    };

    return ({
        getAllGames,
        addGame,
        deleteGame,
        findGames,
        changeGameStatus
    }); 
}