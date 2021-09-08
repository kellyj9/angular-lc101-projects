import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'And now for images of cats...';
  image1 = 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=590&h=800&7E4B4CAD-CAE1-4726-93D6A160C2B068B2';
  image2 = 'https://c.tenor.com/EXrzI_OI6FkAAAAC/cat-dance.gif';
  image3 = 'https://www.cnet.com/a/img/gxdtMy8zV6gQ6Oj2UmQlHSNLOGY=/1200x630/2021/02/09/fb830cdc-d10e-496c-a15d-f079f9bd0a99/zoomcat-1.jpg';

  constructor() { }

  ngOnInit() {
  }

}