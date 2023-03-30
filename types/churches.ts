type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export type Churches = {
  number: number;
  iconNumber: number;
  churchName: string;
  coordinates: Coordinates;
  churchKind: string;
  address: string;
};
