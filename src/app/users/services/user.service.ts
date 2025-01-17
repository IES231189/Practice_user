import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.apiUrl);
  }

  addUser(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(this.apiUrl , user);
  }


}
