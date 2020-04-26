import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import debug from 'debug';
import { Router } from '@angular/router';
import { routes } from 'src/environments/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private log = debug('SignUpComponent');
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUpFormGroup: FormGroup;

  ngOnInit(): void {
    this.signUpFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required])
    });
  }

  submit() {
    this.http.post('api/auth/register', this.signUpFormGroup.value).subscribe(
      res => {
        this.log('Registered: ', res);
        this.router.navigate(['/', routes.home]);
      },
      err => {
        this.log(err);
        // this.signUpFormGroup.reset();
      },
      () => this.log('next')
    );
  }
}
