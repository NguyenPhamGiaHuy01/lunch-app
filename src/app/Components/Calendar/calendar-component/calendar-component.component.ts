import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.scss'],
})
export class CalendarComponentComponent implements OnInit{
  constructor() { }
  
  @Output()
  dateTimeEvent = new EventEmitter<string[]>()

  ngOnInit() {
    
    this.onDateChange({
      detail: {
        value: new Date().toISOString() // Dùng ngày hiện tại làm giá trị mặc định
      }
    });
  }

  onDateChange(event: any) {
    const selectedDate = new Date(event.detail.value); // Lấy giá trị ngày từ event

    // Lấy ngày, tháng, năm và thứ
    const day = String(selectedDate.getDate());  // Lấy ngày
    const month = String(selectedDate.getMonth() + 1);  // Lấy tháng (lưu ý tháng bắt đầu từ 0, nên cần +1)
    const year = String(selectedDate.getFullYear());  // Lấy năm
    const dayOfWeek = selectedDate.toLocaleString('en-us', { weekday: 'long' });  // Lấy thứ (chẳng hạn: 'Monday')

    this.dateTimeEvent.emit([day,month,year,dayOfWeek])
    console.log(`Ngày: ${day}, Tháng: ${month}, Năm: ${year}, Thứ: ${dayOfWeek}`);
  }
}
