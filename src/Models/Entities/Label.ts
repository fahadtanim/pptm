import { ILabel } from '../Interfaces/ILabel';

export class Label implements ILabel {
  label_id: any;
  label_value: string;
  constructor( label_id: any, label_value: string ) {
    this.label_id = label_id;
    this.label_value = label_value;
  }
}
