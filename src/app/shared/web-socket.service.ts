import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class WebSocketService {

  ws: WebSocket;

  constructor() {
  }

  //连接服务器
  connect(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        //当收到服务器发送过来的消息的时候通过流发射出去
        this.ws.onmessage = (event) => observer.next(event.data);
        //当服务器发送一个异常的时候.流也发射一个异常
        this.ws.onerror = (event) => observer.error(event);
        //当服务器连接关闭的时候，流也关闭
        this.ws.onclose = (event) => observer.complete();
      }
    );
  }

  send(message: string) {
    this.ws.send(message);
  }
}
