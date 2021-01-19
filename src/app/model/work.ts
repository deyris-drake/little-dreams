import { from } from "rxjs";

export interface Work {
    name: string,
    materials: string,
    img: string,
    data: string,
    price: string,
    artist: number,
    idx?: number
}