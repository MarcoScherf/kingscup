import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  game: Game;
  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
    this.game = new Game();
  }

  newGame() {
    this.makeid();
    this.router.navigateByUrl('/create-game/' + this.game.result)
  }

  makeid() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
      this.game.result = result;
    }
    return result;
  }
}


