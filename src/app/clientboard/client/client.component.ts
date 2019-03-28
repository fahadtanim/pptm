import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClientService } from 'src/Services/Repository/RepositoryInterfaces/IClientService';
import { IClient } from 'src/Models/Interfaces/IClient';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public client_cid: string;
  public client: IClient
  constructor( private _route: ActivatedRoute, private clientServices: IClientService) { }

  ngOnInit() {
    this._route.params.subscribe(
      params => this.client_cid = params['cid']
    )
    this.client = this.clientServices.getClientByCid(this.client_cid);
    console.log(this.client);
    console.log(this.client_cid);
  }

}
