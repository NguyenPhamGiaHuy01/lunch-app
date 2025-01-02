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
  constructor(private userService: AuthenticationService, private router: Router) { }

  async ngOnInit() {
    (await this.userService.loadArea()).subscribe(
      {
        next: (_value) => {
          this.dataList = _value.map((item: any, index: number) => ({
            key: index.toString(),
            value: item
          }));
          console.log(this.type);
          console.log(_value);
          console.log(this.dataList);
      
        },
        error(err) {
          console.log(err);
        },
      }
    );

  }
  open() {
    this.isOpen = true;
  }
  cancel() {
  this.isOpen = false; 
 }

  select() {
    if (this.type === 'single') {
      if (this.selectedKeys.length > 0) {
        const selectedValue = this.selectedKeys[0];
        this.selectedValues.emit([selectedValue.value.label]);
        this.selectedObjects.emit([selectedValue]);
      }
      
    } else if (this.type === 'multiple') {
      if (this.selectedKeys.length > 0) {
        this.selectedValues.emit([...new Set(this.selectedKeys.map(key => key.value.label))]);
        this.selectedObjects.emit([...new Set(this.selectedKeys)]);
        
      }
    }
    this.selectedEvent = [...new Set(this.selectedKeys)]
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



  