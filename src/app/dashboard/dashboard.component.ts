import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

declare const $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public url: any;
  public createForm: FormGroup;
  public userInfo = [];

  static formData = function () {
    return {
      name: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
    };
  };

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group(DashboardComponent.formData());
  }

  ngOnInit() {
  }

  onSubmit() {
    this.createForm.value['img'] = this.url;
    this.userInfo.push(this.createForm.value);
    console.log('form data :: ', this.userInfo);
  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.url = e.target['result'];
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
