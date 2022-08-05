import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';




@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  game: Game;
  gameId: string;
  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.game = new Game();
    this.gameID();
  }
userID;
  gameID() {
    this.route.params.subscribe((params) => {
      this.game.result = params['id'];

    })
  }

  
  play() {
    //Start Game
    this.firestore
    .collection('games')
    .doc(this.game.result)
    .set(this.game.toJson())
    .then(() => {
      this.router.navigateByUrl('/game/' + this.game.result) // ('/game/' + this.result)
    });
  }
}

