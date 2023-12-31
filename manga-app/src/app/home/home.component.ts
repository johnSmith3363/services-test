import { Component } from '@angular/core';
import { Manga } from '../manga';
import { MangaBoxComponent } from '../manga-box/manga-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MangaBoxComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mangaList:Manga[] = [
    {
      id:1,
      name:"Chainsaw Man",
      image:'./assets/Manga/chainsaw_man.png'
    },
    {
      id:2,
      name:"Fullmetal Alechmist",
      image:"./assets/Manga/fullmetal.jpg"
    },
    {
      id:3,
      name:"Jobless Reincarnation",
      image:"./assets/Manga/jobless.jpg",
    }


  ];
}
