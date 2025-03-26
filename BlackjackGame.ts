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

}