import { Component, OnInit } from '@angular/core';
import { IUserService } from 'src/Services/Repository/RepositoryInterfaces/IUserService';
import { IUserRoleService } from 'src/Services/Repository/RepositoryInterfaces/IUserRoleService';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/Models/Interfaces/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user_id: number;
  public paramKey = 'user_id';
  public user: IUser;
  constructor( private _route: ActivatedRoute, private userServices: IUserService, public userRoleServices: IUserRoleService) { }

  ngOnInit() {
    this._route.params.subscribe(
      params => this.user_id = params[this.paramKey]
    )
    this.user = this.userServices.getUserByUserId(this.user_id);
  }

}
