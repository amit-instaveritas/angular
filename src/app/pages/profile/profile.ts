import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile/profile';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent {
  constructor(private profileService: ProfileService) { }

  // ngOnInit() {
  //   const userId = 1;
  //   this.profileService.getUserProfile(userId).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
