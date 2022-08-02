import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Each player starts drinking at the same time as the person to their left. NO player can stop drinking until the person before them stops.' },
    { title: 'You', description: 'Whoever draws this can choose anyone to take a drink.' },
    { title: 'Me', description: 'The person who draws this takes a drink.' },
    { title: 'Floor', description: 'The last person to touch the floor takes a drink.' },
    { title: 'Guys', description: 'All the guys at the table drink.' },
    { title: 'Chicks', description: 'All the girls at the table drink.' },
    { title: 'Heaven', description: 'If you draw this card, raise your hand above you head. Every other player must do so as well. The last person takes a drink.' },
    { title: 'Mate', description: 'Choose someone to be your mate. For the rest of the game, they drink when you drink.' },
    { title: 'Rhyme', description: `You say a word, then the person to your right has to say a word that rhymes. This continues until someone can't think of a word. That person takes a drink. You can't reuse words.` },
    { title: 'Categories', description: `Come up with a category of things. The person to your right must name something that falls within the category. This continues until someone can't think of something. That person takes a drink.` },
    { title: 'Never Have I Ever', description: 'Everyone holds up three fingers. The person who drew says, "Never have I ever _____________ " and everyone who has done it puts down a finger. Then the next person says, "Never have I ever _________" The first person to lose all their fingers must drink. It is allowed to say something you actually have done, and put down a finger on your own turn if you wish.' },
    { title: 'Questions', description: 'Ask someone a question. That person then asks someone else a question. This continues until someone messes up or fails to ask a question. That person drinks. No question can be repeated.' },
    { title: `King's Cup`, description: 'Set a rule to be followed, e.g. stand on one foot when you drink, only speak in an accent, etc.' },
  ];

  title = '';
  description = '';
  @Input() card: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.card){
    let cardnumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardnumber - 1].title;
    this.description = this.cardAction[cardnumber - 1].description;
  }
  }
}
