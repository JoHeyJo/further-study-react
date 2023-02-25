export interface BoxInterface {
  id: string;
  width: number | string;
  height: number | string;
  backgroundColor: string;
}

export interface BoxProps extends BoxInterface {
  remove: (id: string) => void,
}


