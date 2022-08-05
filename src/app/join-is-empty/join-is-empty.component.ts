import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-join-is-empty',
  templateUrl: './join-is-empty.component.html',
  styleUrls: ['./join-is-empty.component.scss']
})
export class JoinIsEmptyComponent implements OnInit {
  

  constructor(private router: Router, public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }

  ngOnInit(): void {
  }
  createGame() {
    this.router.navigateByUrl('/');
    this.dialogRef.close();
  }
}
