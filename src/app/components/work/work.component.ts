import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Work } from 'src/app/model/work';
import { Artist } from '../../services/artists.service';
import { Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input() work : Work;
  @Input() index : number;
  @Input() artistName : string;

  constructor(private _artistsService : ArtistsService,
              private router : Router) { 
  }

  ngOnInit(): void {
    console.log(this.work);
    this.artistName = this.getArtistName(this.work.artist.toString());
  }

  showArtist() {
    console.log(this.index);
    this.router.navigate( ['/artist', this.index]);
    //this.selectedHero.emit(this.index);
  }

  getArtistName( idx : string) : string{
    let artist : Artist = this._artistsService.getArtist(idx);
    return artist.name;
  }

}
