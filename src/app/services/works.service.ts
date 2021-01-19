import { Injectable } from '@angular/core';
import { Work } from '../model/work';

@Injectable({
    providedIn: 'root'
})
export class WorksService {
    private works:Work[] = 
    [
        {
          name: "Pájaros de colores",
          materials: "Rotulador sobre papel",
          img: "assets/img/works/img_2.jpg",
          data: "2020",
          price: "x",
          artist: 1
        },
        {
            name: "Mariposa",
            materials: "Lápiz sobre cartulina",
            img: "assets/img/works/img_1.jpg",
            data: "2020",
            price: "x",
            artist: 1
          },
          {
            name: "Sirena sobre fondo azul",
            materials: "Acrílico sobre madera",
            img: "assets/img/works/img_3.jpg",
            data: "2020",
            price: "x",
            artist: 1
          },
    ];
    
    constructor(){
    }

    getWorks():Work[]{
        return this.works;
    }

    getWorksByArtist(artist: number):Work[]{
        let worksArr:Work[] = [];
        let i : number = 0;
  
        for(let work of this.works){
          if (work.artist == artist){
            work.idx = ++i;
            worksArr.push(work);
          }
        }
        return worksArr;
    }
}