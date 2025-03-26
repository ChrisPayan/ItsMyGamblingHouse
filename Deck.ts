class Deck{

    private cards: Card[] = [];

    constructor(){
        this.reset();
    }

    reset(): void{

        this.cards = []; //initialize empty hand

        //bring in constant values to create a deck Find out what an enum is
        const suits = ['Heats', 'Diamonds', 'Clubs', 'Spades'];
        const ranks = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
        const values = [2,3,4,5,6,7,8,9,10,10,10,10,11];

        //impliment a way to add more than 1 deck
        for (const suit of suits){
            for (let i = 0; i < ranks.length; i++){
                this.cards.push(new Card(suit, ranks[i], values[i]));
            }
        }
        this.shuffle();
    }

    //function to randomize cards in a deck
    shuffle(): void{
        
        for(let i = this.cards.length - 1; i > 0; i++){
            const j = Math.floor(Math.random()*(i+1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        } 
    }

    //pop a card to return
    deal(): Card | undefined{
        return this.cards.pop();

    }
    //show current card
    getCards(): Card[] {
        return this.cards;
    }
}