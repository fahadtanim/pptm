import { ILabelService } from '../RepositoryInterfaces/ILabelService';
import { ILabel } from 'src/Models/Interfaces/ILabel';
import { Label } from '../../../Models/Entities/Label';
import { Injectable } from '@angular/core';

let labels = [
  { label_id: '1', label_value: '#b71c1c' },
  { label_id: '2', label_value: '#880e4f' },
  { label_id: '3', label_value: '#4a148c' },
  { label_id: '4', label_value: '#1a237e' },
  { label_id: '5', label_value: '#2962ff' },
  { label_id: '6', label_value: '#004d40' },
  { label_id: '7', label_value: '#1b5e20' },
  { label_id: '8', label_value: '#827717' },
  { label_id: '9', label_value: '#ff5722' },
];

@Injectable()
export class LabelService implements ILabelService {
  getLabels(): ILabel[] {
    return labels;
  }
  getLabelById( id ): ILabel {
    return labels.find( x => x.label_id == id );
  }
  getLabelsByValue( value ): ILabel[] {
    return labels.filter( x => x.label_value == value );
  }
}
