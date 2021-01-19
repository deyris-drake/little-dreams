import { Injectable } from '@angular/core';
import { GalleryImage } from '../model/gallery-image';
import { BehaviorSubject, Observable} from 'rxjs';
import { WorksService } from '../services/works.service';
import { Work } from '../model/work';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private galleryImages: GalleryImage[] = [];
  private gallery$: BehaviorSubject<GalleryImage[]> = new BehaviorSubject(this.galleryImages);
  private gallerySelected$: BehaviorSubject<GalleryImage> = new BehaviorSubject(undefined);
  private works : Work[];

  constructor(private _worksService : WorksService) {
    this.works = _worksService.getWorksByArtist(1);
  }

  getGallery(): Observable<GalleryImage[]> {
    return this.gallery$.asObservable();
  }

  getImageSelected(): Observable<GalleryImage> {
    return this.gallerySelected$.asObservable();
  }

  createGallery(): void {
    this.galleryImages = [];
    let i : number = 0;

    for(let work of this.works ){
      this.galleryImages.push(
        {
          src: work.img,
          position: i++,
          alt: work.name,
          first: (i === 0),
          last: (i === 4)
        });
    }
    this.gallery$.next(this.galleryImages);
  }

  selectImage(position: number): void {
    if (position >= 0 && position < this.galleryImages.length) {
      this.gallerySelected$.next(this.galleryImages[position]);
    }
  }
}