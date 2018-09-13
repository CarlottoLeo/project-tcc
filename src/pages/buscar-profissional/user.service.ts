import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    url='http://localhost:3000/user'

    constructor(private http: Http) {
    }

    list(){
        return this.http.get(this.url).map(res => res.json())
    }

}
