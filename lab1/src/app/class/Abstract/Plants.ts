export abstract class DecorativePlant {
    name: string;
    height: number;
    lifespan: number;
  
    constructor(name: string, height: number, lifespan: number) {
      if (height <= 0) throw new Error('Height must be greater than zero');
      if (lifespan <= 0) throw new Error('Lifespan must be greater than zero');
      
      this.name = name;
      this.height = height;
      this.lifespan = lifespan;
    }
  
    getHeight(): number {
      return this.height;
    }
  
    displayInfo(): string {
      return `Назва: ${this.name}\nВисота: ${this.height} м\nТривалість життя: ${this.lifespan} років`;
    }
  
    abstract additionalInfo(): string;
  }