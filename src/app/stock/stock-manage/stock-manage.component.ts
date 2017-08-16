import {Component, OnInit} from '@angular/core';
import construct = Reflect.construct;

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stcocks: Array<Stock> = [];

  constructor() {
  }

  ngOnInit() {

    this.stcocks = [
      new Stock(1, "第一只股票", 1.99, 3.5, "这是我创建的第一只股票", ["IT", "互联网"]),
      new Stock(2, "第二只股票", 1.99, 3.5, "这是我创建的第二只股票", ["IT", "互联网"]),
      new Stock(3, "第只股票", 1.99, 3.5, "这是我创建的第只股票", ["IT", "互联网"])
    ];

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
