export class Alert {
  _id: string;
  price: number;
  isUpward: boolean;

  constructor(price: number, isUpward: boolean) {
    this.price = price;
    this.isUpward = isUpward;
  }
}
