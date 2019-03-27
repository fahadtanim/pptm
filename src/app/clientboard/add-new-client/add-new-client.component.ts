import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from '@angular/material';
import { IClientService } from 'src/Services/Repository/RepositoryInterfaces/IClientService';
@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.scss']
})
export class AddNewClientComponent implements OnInit {
  public clientName: string;
  public clientCid: string;
  public clientDescription: string;
  public snackBarRef: any;
  constructor(
    public dialogRef: MatDialogRef<AddNewClientComponent>,
    private snackBar: MatSnackBar,
    public clientServices: IClientService
  ) {}

  ngOnInit() {
    this.clientName = '';
    this.clientCid = '';
    this.clientDescription = '';
  }

  onClientSubmit() {
    this.clientServices.addClient({
      client_id: this.clientServices.getClients().length,
      cid: this.clientCid,
      client_name: this.clientName,
      client_description: this.clientDescription
    });
    this.dialogRef.close();
    this.snackBarRef = this.snackBar.open(
      'Client Added Successfully !!!',
      'close',
      {
        duration: 2000
      }
    );
  }
}
