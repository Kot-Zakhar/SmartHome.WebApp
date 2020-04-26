import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { routes as appRoutes } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  logInFormGroup: FormGroup;

  routes = appRoutes;

  ngOnInit() {
    this.logInFormGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  submit() {
    if (!this.logInFormGroup.invalid) {
      this.http.post('api/auth/login', this.logInFormGroup.value)
      .subscribe(
        () => this.router.navigate([this.routes.home]),
        err => console.log(err)
      );
    }
  }

}
