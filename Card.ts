class Card{

    constructor(public suit: string, public rank: string, public value: number) {}

    toString(): string{
        return `${this.rank} of ${this.suit}`;
    }
}