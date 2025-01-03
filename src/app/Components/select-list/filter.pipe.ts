import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//     name: 'filter'
//   })
//   export class FilterPipe implements PipeTransform {
//     transform(items: any[], term: string, field: string): any[] {
//       if (!items || !term) {
//         return items;
//       }
//       return items.filter(item => item[field].label.toLowerCase().includes(term.toLowerCase()));
//     }
//   }

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  private removeVietnameseTones(str: string): string {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }

  transform(items: any[], term: string, field: string): any[] {
    if (!items || !term) {
      return items;
    }
    const normalizedTerm = this.removeVietnameseTones(term.toLowerCase());
    return items.filter(item => {
      const fieldValue = item[field]?.label || item[field]; // Kiểm tra trường `label` hoặc giá trị trực tiếp
      return this.removeVietnameseTones(fieldValue?.toLowerCase() || '').includes(normalizedTerm);
    });
  }
}
