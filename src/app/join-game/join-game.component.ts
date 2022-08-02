import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {
  gameID: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
   
    
  }
  enterGame() {
    this.router.navigateByUrl('/game/' + this.gameID)
  }
}
