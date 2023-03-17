interface IBoard {
  nrows: number;
  ncols: number;
  chanceLightStartsOn: number;
}

interface ICell {
  flipCellsAroundMe: () => [][];
  isLit: boolean;
}

export type { IBoard, ICell };