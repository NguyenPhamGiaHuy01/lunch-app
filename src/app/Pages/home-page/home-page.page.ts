import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { MenuPageComponent } from 'src/app/Components/menu-page/menu-page.component';
import { MenuServiceService } from 'src/app/Service/MenuService/menu-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
onItemSelected($event: Event) {
throw new Error('Method not implemented.');
}

  public date: string[] | undefined
  

  
// Event handler for the emitted dateTimeEvent
onDateTimeEventReceived($event: string[]) {
  this.date = $event;
  console.log(`Received date: ${this.date[0]}/${this.date[1]}/${this.date[2]}, Day of the week: ${this.date[3]}`);
  // You can now use `day`, `month`, `year`, and `dayOfWeek` as needed
}
networkStatus: ConnectionStatus | undefined
 
constructor(){}


ngOnInit(){

}

  
}
