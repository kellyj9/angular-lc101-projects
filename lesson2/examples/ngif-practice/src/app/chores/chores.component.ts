import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher'];
   finishedChores = ['Buy groceries', 'Laundry', 'Organize pantry', 'Complete LaunchCode prep work'];

   targetImage = 'https://img.icons8.com/emoji/256/soft-ice-cream-emoji.png';

   constructor() { }

   ngOnInit() {
   }

}
