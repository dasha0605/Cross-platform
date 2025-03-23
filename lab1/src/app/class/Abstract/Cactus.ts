import { DecorativePlant } from "../Abstract/Plants";

export class Cactus extends DecorativePlant {
  hasThorns: boolean;

  constructor(name: string, height: number, lifespan: number, hasThorns: boolean) {
    super(name, height, lifespan);
    this.hasThorns = hasThorns;
  }

  additionalInfo(): string {
    return `Колючки: ${this.hasThorns ? 'Є' : 'Немає'}`;
  }
}
