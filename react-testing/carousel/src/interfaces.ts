interface IC {
  caption: string;
  src: string;
}

interface ICarousel {
  photos: IC[];
  title: string;
}

interface ICard extends IC {
  currNum?: number;
  totalNum?: number;
}

export type { ICard, ICarousel, IC };