import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirmed.validator';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-test-reg-form',
  templateUrl: './test-reg-form.component.html',
  styleUrls: ['./test-reg-form.component.css']
})
export class TestRegFormComponent {
  regForm = this.fb.group({
    fullname: ['', Validators.required],
    // uname: ['', Validators.required],
    uname: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8), 
                Validators.pattern(`^[A-Za-z][A-Za-z0-9]+$`)]],
    address: [''],
    contact: ['', [Validators.required, Validators.minLength(10)]],
    pwd: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12),
              Validators.pattern(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$`)]],
    rpwd: ['', Validators.required]
  },
  { 
    validator: ConfirmedValidator('pwd', 'rpwd')
  });

  constructor(private fb: FormBuilder, private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  onSubmit(): void {
  //   let user = this.regForm.get('uname')?.value;
  //   let pwd = this.Form.get('pwd')?.value;
  //   if (user === "bmcuser" && pwd === "BMC") {
  //     alert(`Login Successful ${user}!`);
  //     // location.replace("http://localhost:4200/binding")
  //   }
  //   else {
  //     alert("Incorrect username or password!");
  //   }
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}