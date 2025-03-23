import { Cactus } from './Cactus';
import { Orchid } from './Orchid';
import { DecorativePlant } from './Plants';
import { PlantsNameMap } from './PlantsNameMap';
export class PlantFactory {
    public static getPlant(name: string, height: number, lifespan: number, parameter: any): DecorativePlant {
      if (name === PlantsNameMap['Cactus']) return new Cactus(name, height, lifespan, parameter);
      else if (name === PlantsNameMap['Orchid']) return new Orchid(name, height, lifespan, parameter);
      else throw new Error('Невідома рослина');
    }
  }
  