import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFood } from '../interfaces/IFood';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private _foods: BehaviorSubject<IFood[]> = new BehaviorSubject([]);
  private _currentMenu: BehaviorSubject<String> = new BehaviorSubject<String>('');

  get currentMenu() {
    return this._currentMenu.asObservable();

  }
  get foods() {
    return this._foods.asObservable();
  }

  constructor(private httpClient: HttpClient) {
  }


  getMenus() {
    // tslint:disable-next-line:max-line-length
    const url = `foods`;
    this.httpClient.get(url).pipe(map((res: any) => {
      const data = res.rows.map(x => {
        // tslint:disable-next-line:prefer-const
        let food: IFood = {
          id: x.id,
          name: x.name,
          price: x.price,
          cover: x.pictures ? x.pictures[0] : '',
          categories: x.categories ? x.categories.map(i => {
            return {
              id: i.id,
              name: i.name
            };
          }) : []
        };
        return food;
      });
      return data;
    })).subscribe((data: any[]) => {
      this._foods.next(data);
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('completed');
    });
  }

  setCurrentFood(name: String) {
    this._currentMenu.next(name);
  }

  getFood(id: string) { }
}
