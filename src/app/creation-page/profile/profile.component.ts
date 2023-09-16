import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  photo!: any;
  user!: User;
  profileForm!: FormGroup;

  constructor(
    private sharedDataService: SharedDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });
  }

  get firstNameInput() {
    return this.profileForm.get('firstName');
  }

  get lastNameInput() {
    return this.profileForm.get('lastName');
  }
  get emailInput() {
    return this.profileForm.get('email');
  }

  addPhoto(event: any) {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);

    if (selectedFile && selectedFile.type === 'image/png') {
      const reader = new FileReader();
      reader.onload = () => {
        this.photo = reader.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  saveData() {
    this.user = {
      photo: this.photo,
      firstName: this.firstNameInput?.value,
      lastName: this.lastNameInput?.value,
      email: this.emailInput?.value,
    };
    this.sharedDataService.setData({
      userInfo: this.user,
    });

    const dataString = JSON.stringify({ userInfo: this.user });

    localStorage.setItem('userInfo', dataString);
  }
}
