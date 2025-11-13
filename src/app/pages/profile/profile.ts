import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(private profileService: ProfileService) { }

  // ngOnInit() {
  //   const userId = 1;
  //   this.profileService.getUserProfile(userId).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
