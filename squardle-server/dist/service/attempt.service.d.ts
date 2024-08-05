import GameService from './game.service';
export declare class AttemptService {
    private readonly gameService;
    constructor(gameService: GameService);
    getAttempt(id: number): string;
    createAttempt(gameId: number, body: any): Promise<number[]>;
}
