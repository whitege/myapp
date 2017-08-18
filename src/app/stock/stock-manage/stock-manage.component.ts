import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import "rxjs/Rx";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock> = [];

  private nameFilter: FormControl = new FormControl();

  private keywork: string;

  constructor(public router: Router, private stock: StockService) {

  }

  ngOnInit() {

    this.stocks = this.stock.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keywork = value);

  }

  create() {
    this.router.navigateByUrl('/stock/0')
  }

  update(stock: Stock) {

    this.router.navigateByUrl('/stock/' + stock.id)

  }

}


