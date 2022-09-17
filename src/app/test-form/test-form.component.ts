import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyAuthService } from '../services/my-auth.service';
import { PromptsService } from '../services/prompts.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {
  loginForm = this.fb.group({
    uname: ['', Validators.required],
    // uname: [null, [Validators.required, Validators.minLength(6), Validators.pattern("^[a-zA-Z0-9]+$")]],
    pwd: ['', Validators.required]
  });

  token: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;

  constructor(private fb: FormBuilder, private myauth: MyAuthService, 
              private prompt: PromptsService, private router: Router) {}

  onSubmit(): void {
    let user = this.loginForm.get('uname')?.value;
    let pwd = this.loginForm.get('pwd')?.value;
    if (user === "bmcuser" && pwd === "BMC") {
      this.myauth.authenticate(user, pwd, this.token)
      this.router.navigate(['dash']);
      this.prompt.openSnackBar(`Login Successful ${user}!`);
      
    }
    else {
      this.prompt.openSnackBar("Incorrect username or password!");
    }
  }
}
