import { Component, OnInit } from '@angular/core';
import debug from 'debug';
import { DeviceService } from '@app/services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  private log = debug("app:DevicesComponent");
  constructor(
    private deviceService: DeviceService
  ) { }

  async ngOnInit() {
    this.deviceService.getAll().subscribe(devices => {
      this.log(JSON.stringify(devices, null, 2));
    });
  }

}
