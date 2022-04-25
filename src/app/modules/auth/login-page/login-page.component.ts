import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { UserLoginDto } from 'src/app/models/auth/user-login-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  userLoginDto: UserLoginDto = {} as UserLoginDto;
  public loginForm: FormGroup = {} as FormGroup;

  public hidePass = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackbarService: SnackBarService,
  ) {}

  ngOnInit() {
    this.validateForm();
  }

  private validateForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(this.userLoginDto.email,[
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),

      ]),
      password: new FormControl(this.userLoginDto.password,[
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

  public signIn(_user: UserLoginDto) {
      console.log(_user.email)
  }

}
