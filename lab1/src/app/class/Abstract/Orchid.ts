import { DecorativePlant } from "../Abstract/Plants";
export class Orchid extends DecorativePlant {
    flowerColor: string;
  
    constructor(name: string, height: number, lifespan: number, flowerColor: string) {
      super(name, height, lifespan);
      this.flowerColor = flowerColor;
    }
  
    additionalInfo(): string {
      return `Колір квітів: ${this.flowerColor}`;
    }
  }
  