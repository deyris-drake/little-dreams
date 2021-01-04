import { Input } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Artist } from 'src/app/services/artists.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artist-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() artist : Artist;
  @Input() index : number;

  @Output() selectedArtist : EventEmitter<number>;


  constructor(private router : Router) { 
    this.selectedArtist = new EventEmitter();
  }

  ngOnInit(): void {
  }

  showArtist() {
    console.log(this.index);
    this.router.navigate( ['/artist', this.index]);
    //this.selectedHero.emit(this.index);
  }

}
