interface IBoard {
  nrows: number;
  ncols: number;
  chanceLightStartsOn: boolean;
}

interface ICell {
  flipCellsAroundMe: Function;
  isLit: boolean;
}

export type { IBoard, ICell };