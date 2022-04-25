import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../services/login.service";
import {SnackBarService} from "../../../services/snack-bar.service";
import {UserRegisterDto} from "../../../models/auth/user-register-dto";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  userRegisterDto: UserRegisterDto = {} as UserRegisterDto;
  public registerForm: FormGroup = {} as FormGroup;

  public hidePass = true;

  constructor(
    private loginService: LoginService,
    private snackbarService: SnackBarService,
  ) {}

  ngOnInit() {
    this.validateForm();
  }

  private validateForm() {
    this.registerForm = new FormGroup({
      name: new FormControl(this.userRegisterDto.name,[
        Validators.required,
        Validators.minLength(4)
      ]),
      lastName: new FormControl(this.userRegisterDto.lastName,[
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.userRegisterDto.email,[
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(this.userRegisterDto.password,[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ])
    })
  }

  public signUp(_user: UserRegisterDto) {
    console.log(_user.name)
  }

}
