interface Football{
    playerCount: number;

    startMatch(): void;
}

abstract class Sport{
    abstract numberOfPlayers: number 
}
class Football extends Sport{
    numberOfPlayers: number = 22;

    startMatch(): void{};
}