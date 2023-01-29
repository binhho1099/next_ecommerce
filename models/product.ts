import { IProduct } from 'interfaces/product';

export class Product {
  productId: number;
  productPrice: number;
  productdiscountPercentage: number;
  productdiscountPercentageString: string;

  constructor(product: IProduct) {
    this.productId = product.id;
    this.productPrice = product.price;
    this.productdiscountPercentage = product.discountPercentage;
    this.productdiscountPercentageString = `${Math.round(
      product.discountPercentage
    )}%`;
  }

  handlePrice() {
    const price = this.productPrice * 23000;
    const priceFormat = price.toLocaleString('vi');
    return priceFormat;
  }

  handlePriceOld() {
    const price =
      Math.round(
        this.productPrice * ((100 + this.productdiscountPercentage) / 100)
      ) * 23000;
    const priceFormat = price.toLocaleString('vi');
    return priceFormat;
  }

  subTotal(quantity: number) {
    const calc = quantity * this.productPrice * 23000;
    const priceFormat = calc.toLocaleString('vi');
    return priceFormat;
  }
}
