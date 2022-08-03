import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GameNotExistComponent } from '../game-not-exist/game-not-exist.component';
import { JoinIsEmptyComponent } from '../join-is-empty/join-is-empty.component';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {
  gameID: string = '';
  constructor(public router: Router, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {


  }
  enterGame() {
    if (this.gameID.length == 0) {
      this.dialog.open(JoinIsEmptyComponent);
    } else if (this.gameID.length > 0) {
      this.firestore
      .collection('games')
      .doc(this.gameID).ref.get().then(function (doc) {
        if (doc.exists) {     
          this.router.navigateByUrl('/game/' + this.gameID);
        } else{
          this.dialog.open(GameNotExistComponent);
        }
      })
    }
  }
}
