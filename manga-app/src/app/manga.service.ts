import { Injectable } from '@angular/core';
import { Manga } from './manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  protected mangalist:Manga[] = [
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

  getAllMangas():Manga[]
  {
    return this.mangalist;
  }

  getMangaById(id:number): Manga | undefined
  {
    return this.mangalist.find(manga=>manga.id===id);
  }
  constructor() { }
}
