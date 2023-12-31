import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../manga.service';
import { Manga } from '../manga';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route:ActivatedRoute = inject(ActivatedRoute);
  mangaService: MangaService = inject(MangaService);
  manga : Manga|undefined;

  constructor()
  {
    const mangaId = Number(this.route.snapshot.params["id"]);
    this.manga = this.mangaService.getMangaById(mangaId);
  }
}
