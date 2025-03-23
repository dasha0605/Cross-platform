export type PlantName = 'Кактус' | 'Орхідея';

export type PlantMap = {
  [key: string]: PlantName;
};

export const PlantsNameMap: PlantMap = {
  Cactus: 'Кактус',
  Orchid: 'Орхідея'
};