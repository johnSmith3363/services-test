import { Component, Input, inject } from '@angular/core';
import { Manga } from '../manga';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manga-box',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './manga-box.component.html',
  styleUrl: './manga-box.component.css'
})
export class MangaBoxComponent {

  @Input() manga!:Manga;
  
}
