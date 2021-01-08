import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ArtistsService {
    private artists:Artist[] = 
        [
            {
              name: "Doris",
              bio: "Le gusta pintar usando diferentes materiales. Usa mucho color y abstracción. Le gusta pintar usando diferentes materiales. Usa mucho color y abstracción. Le gusta pintar usando diferentes materiales. Usa mucho color y abstracción.",
              img: "assets/img/artists/doris.png",
              appearance: "2020",
              materials:"Papel, madera y piedra",
              objective:"Ahora quiere ..."
            },
            {
              name: "Doris",
              bio: "Le gusta pintar usando diferentes materiales. Usa mucho color y abstracción. ",
              img: "assets/img/artists/doris.png",
              appearance: "2020",
              materials:"Papel, madera y piedra",
              objective:"Con el dinero reunido quiere comprarse una caja para su colección de piedras."
            }
          ];
    
    constructor(){
    }

    getArtists():Artist[]{
        return this.artists;
    }

    getArtist( idx: string){
        return this.artists[idx];
    }

    buscarArtist( termino:string ){
      let artistsArr:Artist[] = [];
      termino = termino.toLowerCase();
      let i : number = 0;

      for(let artist of this.artists){
        let name = artist.name.toLowerCase();
        if (name.indexOf(termino) >= 0){
          artist.idx = ++i;
          artistsArr.push(artist);
        }
      }
      return artistsArr;
    }
  
}

export interface Artist {
    name: string;
    bio: string;
    img: string;
    appearance: string;
    materials: string;
    objective: string;
    idx?: number;

}