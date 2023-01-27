import dayjs from 'dayjs';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { MockData } from '../../../types/mock-data.type.js';

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const FIRSR_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.title);
    const description = getRandomItem<string>(this.mockData.description);
    const town = getRandomItem<string>(this.mockData.town);
    const image = getRandomItem<string>(this.mockData.image);
    const offerCategory = getRandomItem<string>(this.mockData.offerCategory);
    const stars = getRandomItem<string>(this.mockData.stars);
    const type = getRandomItem<string>(this.mockData.type);
    const roomsQuantity = getRandomItem<string>(this.mockData. roomsQuantity);
    const guestsQuantity = getRandomItem<string>(this.mockData.guestsQuantity);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const comodity = getRandomItems<string>(this.mockData.comodity).join(';');
    const user = getRandomItem<string>(this.mockData.user);
    const offerCoordinates = getRandomItem<string>(this.mockData.offerCoordinates);
    const createdDate = dayjs().subtract(generateRandomValue(FIRSR_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();

    // применяем деструкуризацию
    const [firstname, email, avatarPath, password, roule] = user.split(' ');
    const [latitude, longitude] = offerCoordinates.split(' ');

    return [
      title, description, createdDate, town, image, offerCategory, stars, type, roomsQuantity,guestsQuantity,
      price, comodity, firstname, email, avatarPath, password, roule, latitude, longitude
    ].join('\t');
  }
}

