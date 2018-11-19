import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  //url='https://my-json-server.typicode.com/CarlottoLeo/json-serve/register'
  url='https://my-json-server.typicode.com/CarlottoLeo/json-serve/register'
  constructor(private http: Http) {
  }

  list(){
    return this.http.get(this.url).map(res => res.json())
  }
  update(obj){
    return this.http.put(this.url+"/"+obj.id, obj).map(res => res.json())
  }
}
