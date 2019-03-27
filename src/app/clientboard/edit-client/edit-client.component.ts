import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { IClientService } from 'src/Services/Repository/RepositoryInterfaces/IClientService';
import { IClient } from 'src/Models/Interfaces/IClient';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditClientComponent>,
    private snackBar: MatSnackBar,
    public clientServices: IClientService,
    @Inject(MAT_DIALOG_DATA) public client: IClient
    ) { }

  ngOnInit() {
  }
  onEditClientSubmit(){
    this.dialogRef.close();
  }
}
