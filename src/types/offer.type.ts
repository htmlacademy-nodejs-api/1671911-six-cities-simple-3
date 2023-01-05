import { User } from './user.type.js';
import { Coordinates } from './coordinates.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  town: string;
  image: string;
  offerCategory: string;
  stars: string;
  type: string;
  roomsQuantity: string;
  guestsQuantity: string;
  price: number;
  comodity: string;
  user: User;
  offerCoordinates: Coordinates;
}
