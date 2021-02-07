import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], orderBy: string): any {
      //return items.filter(item => item.id.indexOf(orderBy) !== -1);
      return items.map(data => data.tiporegistro_id.valueOf(orderBy)!== -1 );
      //return items.filter(data => data.tiporegistro_id.valueOf(orderBy) !== -1);

  }
}
