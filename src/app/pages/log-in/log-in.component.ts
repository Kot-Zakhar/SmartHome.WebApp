import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { routes as appRoutes, routes } from '@env/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '@app/services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { }

  logInFormGroup: FormGroup;
  returnUrl: string;
  loading = false;
  submitted = false;
  error = '';
  routes = appRoutes;

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams?.returnUrl || '/';

    if (this.authenticationService.currentUserValue) {
      this.router.navigate([routes.home]);
      return;
    }

    this.logInFormGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  get f() {
    return this.logInFormGroup.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.logInFormGroup.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      )

  }

}
