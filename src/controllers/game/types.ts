import type {  Request, Response, NextFunction } from 'express';

export interface GameController {
    getAllGames: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
    addGame: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
    deleteGame: (req: Request<{ id: string }>, res: Response, next: NextFunction) => Promise<Response | void>;
    findGames: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
    changeGameStatus: (req: Request<{ id: string }>, res: Response, next: NextFunction) => Promise<Response | void>;
}
