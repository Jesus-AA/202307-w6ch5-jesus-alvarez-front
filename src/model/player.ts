export type PlayerWithId = {
  id: string;
};

export type PlayerWithNoId = {
  name: string;
  nationality: string;
  tour: string;
  titles: number;
  prizemoney: number;
  img: string;
};

export type Player = PlayerWithId & PlayerWithNoId;
