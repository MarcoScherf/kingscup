import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/models/game';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {
  game: Game;
  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, private router: Router, public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }

  ngOnInit(): void {


  }
  restart() {
    this.router.navigateByUrl('/');
    this.dialogRef.close();
  }
}
