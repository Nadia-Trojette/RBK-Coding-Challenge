import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { User } from 'src/app/models/user';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {
  links: Link[] = [];
  user!: User;
  placeholderLinks = ['Github', 'Linkedin', '', 'Faceook', 'Instagram'];
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    const userInfoDataString = localStorage.getItem('userInfo');
    const linksString = localStorage.getItem('links');

    if (userInfoDataString) {
      const userInfoData = JSON.parse(userInfoDataString);
      this.user = userInfoData?.userInfo;
    }
    if (linksString) {
      const linksData = JSON.parse(linksString);
      this.links = linksData?.links;
    } else {
      this.sharedDataService.data$.subscribe((data) => {
        if (data !== null && data.links !== null) {
          this.links = data.links;
        }
        if (data !== null && data.userInfo !== null) {
          this.user = data.userInfo;
          console.log(data.userInfo);
        }
      });
    }
  }

  getColor(platform: string) {
    let color = '#780244';

    switch (platform) {
      case 'Github':
        color = '#1A1A1A';
        break;
      case 'LinkedIn':
        color = '#0077B5';
        break;
      case 'Facebook':
        color = '#1877F2';
        break;
      case 'Youtube':
        color = '#EE3939';
        break;
      case 'Instagram':
        color = '#780CFF';
        break;

      default:
        color = '#780244';
        break;
    }

    return color;
  }
}
