import { ILabelService } from "../RepositoryInterfaces/ILabelService";
import { ILabel } from "src/Models/Interfaces/ILabel";
import { Label } from '../../../Models/Entities/Label';
import { Injectable } from '@angular/core';

let labels = [
  new Label('1', '#b71c1c'),
  new Label('2', '#880e4f'),
  new Label('3', '#4a148c'),
  new Label('4', '#1a237e'),
  new Label('5', '#2962ff'),
  new Label('6', '#004d40'),
  new Label('7', '#1b5e20'),
  new Label('8', '#827717'),
  new Label('9', '#ff5722'),
];

@Injectable()
export class LabelService implements ILabelService {
  getLabels(): ILabel[] {
    return labels;
  }
  getLabelById( id ): ILabel {
    return labels.find( x => x.label_id == id );
  }
  getLabelByValue( value ): ILabel[] {
    return labels.filter( x => x.label_value == value );
  }
}
