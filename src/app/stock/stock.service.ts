import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stocks: Stock[] = [
    new Stock(1, "第一只股票", 1.99, 3.5, "这是我创建的第一只股票", ["IT", "互联网"]),
    new Stock(2, "第二只股票", 1.99, 4.5, "这是我创建的第二只股票", ["IT",]),
    new Stock(3, "第三只股票", 1.99, 2.5, "这是我创建的第三只股票", ["IT", "互联网","金融"]),
    new Stock(4, "第四只股票", 1.99, 1.5, "这是我创建的第四只股票", ["IT", "互联网"]),
    new Stock(5, "第五只股票", 1.99, 3.5, "这是我创建的第五只股票", ["互联网"]),
    new Stock(6, "第六只股票", 1.99, 4.5, "这是我创建的第六只股票", ["IT", "金融"]),
    new Stock(7, "第七只股票", 1.99, 5.0, "这是我创建的第七只股票", ["IT", "互联网"])
  ];

  getStocks() {

    return this.stocks;

  }

  getStock(id: number): Stock {

    let stock = this.stocks.find(stock => stock.id == id);

    if (!stock) {
      stock = new Stock(0, "", 0, 0, "", []);
    }

    return stock;

  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
