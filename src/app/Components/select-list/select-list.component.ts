import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/common/service/authentication.service';
// 0372610846
@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
})
export class SelectListComponent implements OnInit {

  @Input() type: 'single' | 'multiple' | undefined;
  @Input() dataList: { key: string, value: string }[] = [];
  @Output() selectedValues = new EventEmitter<string[]>();
  @Output() selectedObjects = new EventEmitter<object[]>();

  isOpen = false;
  selectedKeys: { key: string, value: { value: string, label: string, sort: number, region: string } }[] = [];
  selectedEvent:  { key: string, value: { value: string, label: string, sort: number, region: string } }[] = [];
  searchKeyword: string = '';
  constructor( private router: Router) { }

  async ngOnInit() {
   

  }
  open() {
    this.isOpen = true;
  }
  cancel() {
  this.isOpen = false; 
 }

 
 select() {
  const emitData = (values: any[], objects: any[]) => {
    this.selectedValues.emit(values);
    this.selectedObjects.emit(objects);
  };

  if (this.selectedKeys.length > 0) {
    const values = [...new Set(this.selectedKeys.map(key => key.value.label))];
    const objects = [...new Set(this.selectedKeys)];
    emitData(this.type === 'single' ? [values[0]] : values, this.type === 'single' ? [objects[0]] : objects);
  } else {
    emitData([], []);
  }

  this.selectedEvent = [...new Set(this.selectedKeys)];
  this.isOpen = false;
}
  onCheckboxChange(event: any, value?: any) {
    if (this.type === 'single') {
      if (event.detail.value) {
        this.selectedKeys = [event.detail.value]; 
      } else {
        this.selectedKeys = [];
      }
      
    } else if(this.type === 'multiple' )
    {
      console.log(event.detail.checked)
      if (event.detail.checked) {  
        
          this.selectedKeys.push(value);
      } else{
        this.selectedKeys = this.selectedKeys.filter(key => key.key !== value.key);
        
      }
      
    }  
}
  
 selectedLabels(): string {
    if (this.type === 'single') {
      return this.selectedEvent.length > 0 ? this.selectedEvent[0].value.label : '';
    } else if (this.type === 'multiple') {
      return this.selectedEvent.length > 0 ? this.selectedEvent.map(key => key.value.label).join(', ') : '';
    }
    return '';
  }
}



  //  select() {
//   console.log(this.selectedEvent)
//   if (this.type === 'single') {
//     if (this.selectedKeys.length > 0) {
//       const selectedValue = this.selectedKeys[0];
//       this.selectedValues.emit([selectedValue.value.label]);
//       this.selectedObjects.emit([selectedValue]);
//     }
//     // else{
//     //     this.selectedValues.emit([]);
//     //     this.selectedObjects.emit([]);
//     // }
    
//   } else if (this.type === 'multiple') {
//     if (this.selectedKeys.length > 0) {
//       this.selectedValues.emit([...new Set(this.selectedKeys.map(key => key.value.label))]);
//       this.selectedObjects.emit([...new Set(this.selectedKeys)]);
      
//     }
//     // else{
//     //     this.selectedValues.emit([]);
//     //     this.selectedObjects.emit([]);
//     // }
//   }
//   this.selectedEvent = [...new Set(this.selectedKeys)]
//   this.isOpen = false;
// }


  
  // onCheckboxChange(event: any, value?: any) {
  //     if (this.type === 'single') {
  //       if (event.detail.value) {
  //         this.selectedKeys = [event.detail.value]; 
  //       } else {
  //         this.selectedKeys = [];
  //       }
        
  //     } else if(this.type === 'multiple' )
  //     {
  //       console.log(event.detail.checked)
  //       if (event.detail.checked) {  
  //         console.log("check")
  //           this.selectedKeys.push(value);
  //       } else{
  //         this.selectedKeys = this.selectedKeys.filter(key => key.key !== value.key);
          
  //       }
        
  //     }  
  // }