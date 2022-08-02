import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPlayerPleaseComponent } from '../add-player-please/add-player-please.component';
import { GameOverComponent } from '../game-over/game-over.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game;
  gameId: string;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.game = new Game();
    this.route.params.subscribe((params) => {
      this.gameId = params['id'];
      this.firestore
        .collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game: any) => {
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.stack = game.stack;
          this.game.pickCardAnimation = game.pickCardAnimation;
          this.game.currentCard = game.currentCard;
        })
    })
  }

  newGame() {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.saveGame();
      }
    });
  }

  takeCard() {
    if (this.game.stack.length == 0) {
      this.dialog.open(GameOverComponent);
    } else {
      if (!this.game.pickCardAnimation && this.game.players.length > 1) {
        this.game.currentCard = this.game.stack.pop();
        this.game.pickCardAnimation = true;
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        this.saveGame();
        setTimeout(() => {
          this.game.playedCards.push(this.game.currentCard);
          this.game.pickCardAnimation = false;
          this.saveGame();
        }, 1000);
      } else if (this.game.players.length <= 1) {
        this.openaddPlayerPlease()
      }
    }
  }

  saveGame() {
    this.firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJson())
  }

  openaddPlayerPlease() {
    this.dialog.open(AddPlayerPleaseComponent)
  }

}
