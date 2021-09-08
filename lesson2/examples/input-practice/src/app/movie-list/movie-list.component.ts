import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   errorMessage: string = ``;

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string): void {
     newTitle = newTitle.trim();
      if (this.movies.includes(newTitle)) {
         this.errorMessage = `${newTitle} is already in the movies list.`;
      }
      else if (newTitle === "") {
         this.errorMessage = `The movie title was not entered.  Please re-enter a movie title.`;
      }
      else {
         this.movies.push(newTitle);
         this.errorMessage = ``;
      }
   }

}