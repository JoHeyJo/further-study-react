interface ICard {
  caption: string;
  src: string;
  currNum: number;
  totalNum: number;
}

interface ICarousel {
  photos: ICard[];
  title: string;
}

export type { ICard, ICarousel };