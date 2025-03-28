import {Deck} from './Deck.ts';
import {Card} from './Card.ts';
import {Player} from './Player';

export class BlackjackGame{
    private deck: Deck
    private player: Player
    private dealer: Player

    constructor(playerName: string) {
        this.deck = new Deck();
        this.player = new Player(playerName);
        this.dealer = new Player('Dealer')
    }
    dealInitialHands(): void{
        this.player.clearHand();
        this.dealer.clearHand();

        this.player.hit(this.deck.deal()!);
        this.dealer.hit(this.deck.deal()!);
        this.player.hit(this.deck.deal()!);
        this.dealer.hit(this.deck.deal()!);        
    }

    getPlayerHand(): string {
        return this.player.showHand();
    }

    getDealerHand(): string {
        return this.dealer.showHand();
    }

    getPlayerScore(): number {
        return this.player.getScore();
    }

    getDealerScore(): number {
        return this.dealer.getScore();
    }

    playerHit(): void {
        this.player.hit(this.deck.deal()!);
    }

    dealerHit(): void {
        this.dealer.hit(this.deck.deal()!);
    }

    dealerPlay(): void {
        while(this.dealer.getScore() < 17) {
            this.dealerHit();
        }
    }
    
    determineWinner(): string {
        const playerScore = this.player.getScore();
        const dealerScore = this.dealer.getScore();

        if (playerScore > 21) {
            return 'Dealer Wins!';
        } else if (dealerScore > 21) {
            return `${this.player.name} Wins!`;
        } else if (playerScore > dealerScore) {
            return `${this.player.name} Wins!`;
        } else if (dealerScore > playerScore) {
            return 'Dealer Wins!';
        } else {
            return 'Push (tie)!';
        }
    }

    isBlackjack(player: Player): boolean {
        return player.getScore() === 21 && player.getHand().length === 2;
    }
    startRound(): void {
        // Temporary system of infinatly reseting deck per hand -> Need to impliment "Shoe System"
        this.deck.reset();
        this.dealInitialHands();
    }
}