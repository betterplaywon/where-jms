type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

// export type Menu = { name: string; price: string };
export type Churches = {
  number: number;
  churchName: string;
  coordinates: Coordinates;
  churchKind: string;
  address: string;
};
