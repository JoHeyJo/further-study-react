interface IPokecard {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

interface IPokeGame {
  pokemon: IPokecard[];
}

interface IPokedex extends IPokeGame {
  totalXp: number;
  isWinner: boolean;
}

export type { IPokecard, IPokedex, IPokeGame };