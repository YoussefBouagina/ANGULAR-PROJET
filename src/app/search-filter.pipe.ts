import { Pipe, PipeTransform } from '@angular/core';
import { Livre } from './model/livre.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: Livre[] | null, filterText: string): Livre[] {
    if (!list) return [];
    if (!filterText) return list;
    
    filterText = filterText.toLowerCase();
    return list.filter(item =>
      item.titre.toLowerCase().includes(filterText));
  }
}