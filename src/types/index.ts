export type Snap = {
  duration: number;
  imgUrl: string;
  from: number;
  timestamp: number;
  id: number;
};

export type ImgOverlay = {
  show: boolean,
  duration: number
  imgUrl: string
}