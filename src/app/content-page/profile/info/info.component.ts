import { Component, OnInit } from '@angular/core';
import { IProfile } from '../interfaces/IProfile';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  profile: IProfile = {
    id: '',
    name: 'Đỗ Đạt',
    picture: '../../assets/diem.jpg',
    position: 'Nhân viên bán hàng',
    email: 'gabrielda3108@gmail.com',
    phone: '0399452387'
  };
  constructor() { }

  ngOnInit() {
  }

}
