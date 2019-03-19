import { ILabel } from '../../../Models/Interfaces/ILabel';
import { Injectable } from '@angular/core';



@Injectable()
export abstract class ILabelService {
  abstract getLabels(): ILabel[];
  abstract getLabelById( id ): ILabel;
  abstract getLabelsByValue( value ): ILabel[];
}
