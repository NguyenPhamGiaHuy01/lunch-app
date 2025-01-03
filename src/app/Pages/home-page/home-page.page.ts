import { Component, inject, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/service/authentication.service';
import { MenuPageComponent } from 'src/app/Components/menu-page/menu-page.component';
import { MenuServiceService } from 'src/app/Service/MenuService/menu-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  public date: string[] | undefined
  dataList: { key: string, value: string }[] = [];
  constructor(private userService: AuthenticationService) {
   
  }
// Event handler for the emitted dateTimeEvent
onDateTimeEventReceived($event: string[]) {
  this.date = $event;
  console.log(`Received date: ${this.date[0]}/${this.date[1]}/${this.date[2]}, Day of the week: ${this.date[3]}`);
  // You can now use `day`, `month`, `year`, and `dayOfWeek` as needed
}

onSelection(value: any) {
  console.log('Selection:', value);
}

  async ngOnInit() {
    (await this.userService.loadArea()).subscribe(
      {
        next: (_value) => {
          this.dataList = _value.map((item: any, index: number) => ({
            key: index.toString(),
            value: item
          }));
         
          console.log(_value);
          console.log(this.dataList);
      
        },
        error(err) {
          console.log(err);
        },
      }
    );
  }

  
}
