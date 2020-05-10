import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Device } from '@app/models';

@Injectable({ providedIn: 'root' })
export class DeviceService {
    constructor(
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<Device[]>('api/device/all');
    }
}
