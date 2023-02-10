// тут опишем псевдоним типа MockData, в котором опишем структуру тех данных,
//которые нам возвращает json-server
export type MockData = {
  title: string[];
  description: string[];
  postDate: Date;
  town: string[];
  image: string[];
  offerCategory: string[];
  stars: string[];
  type: string[];
  roomsQuantity: string[];
  guestsQuantity: string[];
  price: number[];
  comodity: string[];
  user: string[];
  email: string[];
  avatarPath: string[];
  password: string[];
  roule: string[];
  latitude: string[];
  longitude: string[];
};
