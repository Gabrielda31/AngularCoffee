import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private _users: BehaviorSubject<IUser[]> = new BehaviorSubject([]);

  // get users() {
  //   return this._users.asObservable();
  // }

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(`users`).pipe(
      map((res: any) => {
        // tslint:disable-next-line:prefer-const
        let users: IUser = {
          id: res.id,
          name: res.name,
          picture: res.picture,
          role: res.role
        };
        return users;
      }));
  }

  getCurrentUser() {
    return this.httpClient.get(`user/me`).pipe(
      map((res: any) => {
        // tslint:disable-next-line:prefer-const
        let user: IUser = {
          id: res.id,
          name: res.name,
          picture: res.picture,
          role: res.role
        };
        return user;
      })).subscribe((user: any[] => {
        this._users.next(user);
      })
  }
}
