import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import "rxjs/Rx";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  // private stocks: Array<Stock> = [];
  private stocks: Observable<any>;

  private nameFilter: FormControl = new FormControl();

  private keywork: string;

  dataSource: Observable<any>;

  constructor(public router: Router, private stock: StockService, private http: Http) {
    //采用请求头的方式
    let myHeaders: Headers = new Headers();
    myHeaders.append("token", "123456");


    // this.dataSource = this.http.get("/api/stocks").map(response=>response.json());
    this.stocks = this.http.get("/api/stocks", {headers: myHeaders}).map(response => response.json());
  }

  ngOnInit() {

    // this.stocks = this.stock.getStocks();
    //通过订阅的方法获取流里面的数据
    // this.dataSource.subscribe(data=>this.stocks = data);
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keywork = value);


  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {

    this.router.navigateByUrl('/stock/' + stock.id);

  }

}


