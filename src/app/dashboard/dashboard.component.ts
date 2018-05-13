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
  public id: number;
  public errorMessage: string;
  public successMessage: string;
  public showUpdate: any;
  public createForm: FormGroup;
  public userInfo = [];

  static formData = function () {
    return {
      name: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: ['', Validators.compose([Validators.required])],
      work: ['', Validators.compose([Validators.required])],
    };
  };

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group(DashboardComponent.formData());
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.url) {
      this.errorMessage = 'Please update your DP';
      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
    } else {
      this.createForm.value['img'] = this.url;
      this.userInfo.push(this.createForm.value);
      this.successMessage = 'User successfully added';
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
      this.createForm.reset();
    }
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

  onAdd(i) {
    this.id = i;
    this.showUpdate = true;
    this.createForm = this.fb.group(this.userInfo[i]);
  }

  onOpen() {
    this.showUpdate = false;
    $('#exampleModal').modal('show');
  }

  onEdit() {
    this.userInfo[this.id] = this.createForm.value;
    this.successMessage = 'User successfully updated';
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}
