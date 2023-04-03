type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];
export type Info = { keyword: string };

export type Churches = {
  number: number;
  iconNumber: number;
  churchName: string;
  coordinates: Coordinates;
  churchKind: string;
  address: string;
  description: string;
  naverUrl: string;
  info: Info[];
};
