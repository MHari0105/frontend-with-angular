import { Component } from '@angular/core';
import { buffer } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was Created!";
  serverName: string = "";
  serverName2: string = "Test";
  serverCreated: boolean = false;
  servers = ['Test Server 1', 'Test Server 2']


  constructor() {
    setTimeout(() => { 
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was Created. Server Name is " + this.serverName;
  }

  onUpdateServerName1(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateServerName2(event: Event) {
    this.serverName2 = (<HTMLInputElement>event.target).value;
  }



}
