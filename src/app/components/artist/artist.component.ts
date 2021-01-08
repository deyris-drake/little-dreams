import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService, Artist } from '../../services/artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};

  constructor( private activatedRoute : ActivatedRoute,
               private _artistsService : ArtistsService) { 
        this.activatedRoute.params.subscribe( params => {
        this.artist = this._artistsService.getArtist(params['id'] );
      })
  }

  ngOnInit(): void {

  }

}
