import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
@Injectable()


export class PublishmentService {
    private baseUrl: String = environment.base_uri;

    constructor (private http: HttpClient){

    }

    public getAllPublishments(){
        let headers = new HttpHeaders();
        headers.append("Accepts","aplication/json");
        headers.append("Content-Type","aplication/json");
        
        return this.http.get(this.baseUrl+"getPublishments/", {
            headers: headers
        })
    }
    public getAllPublishmentsById(req:any){
        let headers = new HttpHeaders();
        headers.append("Accepts","aplication/json");
        headers.append("Content-Type","aplication/json");
        
        return this.http.get(this.baseUrl+"getAllPublishmentsByUser/"+req.userId, {
            headers: headers
        })
    }
}