import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stock: Stock[] = [
    new Stock(1, "京东","assets/img/moby.jpg", 3.5, "这是一款外卖 团购App", ["IT", "互联网"]),
    new Stock(2, "美团", "assets/img/moby.jpg", 4.5, "这是一款外卖 团购App", ["IT",]),
    new Stock(3, "饿了么", "assets/img/moby.jpg", 2.5, "这是一款外卖 团购App", ["IT", "互联网","金融"]),
    new Stock(4, "小黄车", "assets/img/moby.jpg", 1.5, "这是一款外卖 团购App", ["IT", "互联网"]),
    new Stock(5, "小红车", "assets/img/moby.jpg", 3.5, "这是一款外卖 团购App", ["互联网"]),
    new Stock(6, "小绿车", "assets/img/moby.jpg", 4.5, "这是一款外卖 团购App", ["IT", "金融"]),
    new Stock(7, "小紫车", "assets/img/moby.jpg", 5.0, "这是一款外卖 团购App", ["IT", "互联网"])
  ];

  getStocks() {

    return this.stock;

  }

  getStock(id: number): Stock {

    let stock = this.stock.find(stock => stock.id == id);

    if (!stock) {
      stock = new Stock(0, "","", 0, "", []);
    }

    return stock;

  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public logo: string,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
