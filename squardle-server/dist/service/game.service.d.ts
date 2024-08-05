declare class GameService {
    getWord(gameId: number): Promise<string>;
    constructor();
    getHello(): string;
}
export default GameService;
