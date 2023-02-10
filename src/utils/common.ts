//import { OfferType} from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, createdDate, town, image, offerCategory, stars, type, roomsQuantity, guestsQuantity, price, comodity, firstname, email, avatarPath, password, roule, latitude, longitude] = tokens;
  return {
    title,
    description,
    postDate: new Date(createdDate),
    town,
    image,
    offerCategory,
    stars,
    type,
    roomsQuantity,
    guestsQuantity,
    price: Number.parseInt(price, 10),
    comodity,
    user: {firstname, email, avatarPath, password, roule},
    offerCoordinates: {latitude, longitude},
  } as Offer;
};
//функция, которая принимает объект ошибки, пока неизвестного типа
// и будет выполнять проверку, что если это у нас  экземпляр ошибки, то мы
//будем извлекать  error.message  а  если нет , то просто выводить пустую строку
export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';
