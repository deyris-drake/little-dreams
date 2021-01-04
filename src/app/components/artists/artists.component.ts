import { Component, OnInit } from '@angular/core';
import { ArtistsService, Artist } from '../../services/artists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists : Artist[] = [];
  
  constructor(private _artistsService : ArtistsService,
              private router : Router) { }

  ngOnInit(): void {
    this.artists = this._artistsService.getArtists();
  }

}
