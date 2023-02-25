interface ICell {
  flipCellsAroundMe: Function;
  isLit: number;
}

interface IBoard {
  nrows: number;
  ncols: number;
  chanceLIghtStartsOn: number;
}

export type { ICell, IBoard };