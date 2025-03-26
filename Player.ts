class Player{

    private hand: Card[] = [];
    private score: number = 0;

    constructor(public name: string){}

    hit(card: Card): void {
        this.hand.push(card);
        this.calculateScore();
    }

    calculateScore(): void{
        this.score = this.hand.reduce((total, card) => total + card.value, 0);
        let aceCount = this.hand.filter((card) => card.rank === 'Ace').length;

        while(this.score > 21 && aceCount > 0) {
            this.score -= 10;
            aceCount--;
        }
    }

    getScore(): number{
        return this.score;
    }

    getHand(): Card[]{
        return this.hand;
    }
    clearHand(): void{}

    showHand(): string {
        return this.hand.map((card) => card,toString()).join(', ');
    }
}