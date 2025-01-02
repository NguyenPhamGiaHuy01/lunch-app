import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
    transform(items: any[], term: string, field: string): any[] {
      if (!items || !term) {
        return items;
      }
      return items.filter(item => item[field].label.toLowerCase().includes(term.toLowerCase()));
    }
  }
