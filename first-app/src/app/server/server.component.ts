import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl : './server.component.html',
  styles : [`
    .active {
      color : white
    }  
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "IN_ACTIVE";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'ACTIVE' : 'IN_ACTIVE';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'ACTIVE' ? 'green' : 'red';
  }

}